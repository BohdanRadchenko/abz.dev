import { IPositionStore } from "./IPositionStore";
import { IApiRequester } from "./IApiRequester";
import { IUsersStore } from "./IUsersStore";
import { IAuthStore } from "./IAuthStore";
import { INotifyStore } from "./INotifyStore";

export interface IRootStore {
  requester: IApiRequester;
  positionStore: IPositionStore;
  usersStore: IUsersStore;
  authStore: IAuthStore;
  notifyStore: INotifyStore;
}
