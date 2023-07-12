import { IPositionStore } from "./IPositionStore";
import { IApiRequester } from "./IApiRequester";
import { IUsersStore } from "./IUsersStore";

export interface IRootStore {
  requester: IApiRequester;
  positionStore: IPositionStore;
  usersStore: IUsersStore;
}
