import { IUser } from "./IUser";

export interface IUsersStore {
  usersMap: Map<number, IUser>;
  users: IUser[];
  isLoadingUsers: boolean;
  isErrorGetUsers: boolean;
  isDisabledMoreButton: boolean;

  getUsers(): Promise<void>

  getUsersNext(): Promise<void>

  resetStore(): void
}
