import { IPositionStore } from "./IPositionStore";
import { IApiRequester } from "./IApiRequester";

export interface IRootStore {
  requester: IApiRequester;
  positionStore: IPositionStore;
}
