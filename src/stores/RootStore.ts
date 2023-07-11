import {
  IApiRequester,
  IPositionStore,
  IRootStore,
} from "interfaces";
import { ApiRequester } from "./ApiRequester";
import { PositionStore } from "./PositionStore";

export class RootStore implements IRootStore {
  public requester: IApiRequester;
  public positionStore: IPositionStore;

  constructor() {
    this.requester = new ApiRequester();
    this.positionStore = new PositionStore(this);
  }
}
