import {
  IApiRequester,
  IAuthStore, INotifyStore,
  IPositionStore,
  IRootStore,
  IUsersStore,
} from "interfaces";
import { ApiRequester } from "../api/ApiRequester";
import { PositionStore } from "./PositionStore";
import { UsersStore } from "./UsersStore";
import { AuthStore } from "./AuthStore";
import { NotifyStore } from "./NotifyStore";

export class RootStore implements IRootStore {
  public requester: IApiRequester;
  public positionStore: IPositionStore;
  public usersStore: IUsersStore;
  public authStore: IAuthStore;
  public notifyStore: INotifyStore;

  constructor() {
    this.requester = new ApiRequester();
    this.positionStore = new PositionStore(this);
    this.usersStore = new UsersStore(this);
    this.authStore = new AuthStore(this);
    this.notifyStore = new NotifyStore(this);
  }
}
