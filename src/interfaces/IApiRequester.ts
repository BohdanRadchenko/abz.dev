import { PositionServices, UsersServices } from "services";

export interface IApiRequester {
  position: PositionServices;
  users: UsersServices;
}
