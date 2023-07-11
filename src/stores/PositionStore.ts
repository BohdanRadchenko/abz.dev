import { observable, computed, action, makeObservable } from "mobx";
import {
  IPositionStore,
  IRootStore,
  IUserPosition,
} from "interfaces";
import { BaseStore } from "./BaseStore";

export class PositionStore extends BaseStore implements IPositionStore {
  public positions: Map<number, IUserPosition> = new Map();
  private asyncStatuses = {
    getPositions: this.createKey('getPositions'),
  };

  constructor(rootStore: IRootStore) {
    super(rootStore);
    makeObservable(this, {
      positions: observable,
      isLoadingPositions: computed,
      getPositions: action.bound,

    })
  }

  public get isLoadingPositions() {
    return this.getAsyncStatus(this.asyncStatuses.getPositions).loading;
  }

  public async getPositions() {
    this.setLoading(this.asyncStatuses.getPositions);
    const { success, positions } = await this.rootStore.requester.position.getPositions();
    if ( !success ) {
      return this.setError(this.asyncStatuses.getPositions)
    }
    positions.forEach(position => this.positions.set(position.id, position))
    this.setSuccess(this.asyncStatuses.getPositions);
  }
}
