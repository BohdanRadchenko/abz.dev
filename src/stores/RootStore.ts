import {
  IApiRequester,
  IPositionStore,
  IRootStore,
  IUsersStore,
} from "interfaces";
import { ApiRequester } from "./ApiRequester";
import { PositionStore } from "./PositionStore";
import { UsersStore } from "./UsersStore";

export class RootStore implements IRootStore {
  public requester: IApiRequester;
  public positionStore: IPositionStore;
  public usersStore: IUsersStore;

  constructor() {
    this.requester = new ApiRequester();
    this.positionStore = new PositionStore(this);
    this.usersStore = new UsersStore(this);
  }
}
