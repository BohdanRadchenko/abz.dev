import { observable, computed, action, makeObservable, runInAction } from "mobx";
import {
  IPositionStore,
  IRootStore,
  IUserPosition,
} from "interfaces";
import { BaseStore } from "./BaseStore";

export class PositionStore extends BaseStore implements IPositionStore {
  public positionsMap: Map<number, IUserPosition> = new Map();
  public positions: IUserPosition[] = [];
  private asyncStatuses = {
    getPositions: this.createKey('getPositions'),
  };

  constructor(rootStore: IRootStore) {
    super(rootStore);
    makeObservable(this, {
      positionsMap: observable,
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
    try {
      const { success, positions } = await this.rootStore.requester.position.getPositions();
      if ( !success ) {
        return this.setError(this.asyncStatuses.getPositions)
      }
      runInAction(() => {
        for (const position of positions) {
          this.positionsMap.set(position.id, position);
          this.positions.push(position);
        }
      })
      this.setSuccess(this.asyncStatuses.getPositions);
    } catch (err) {
      return this.setError(this.asyncStatuses.getPositions)
    }
  }
}
