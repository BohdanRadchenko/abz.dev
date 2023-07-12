import { AuthServices, PositionServices, UsersServices } from "api/services";

export interface IApiRequester {
  position: PositionServices;
  users: UsersServices;
  auth: AuthServices;
}
