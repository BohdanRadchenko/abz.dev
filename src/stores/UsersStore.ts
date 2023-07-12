import { observable, computed, action, makeObservable, runInAction } from "mobx";
import {
  IRootStore, IUsersStore, IUser
} from "interfaces";
import { BaseStore } from "./BaseStore";

export class UsersStore extends BaseStore implements IUsersStore {
  public usersMap: Map<number, IUser> = new Map();
  public users: IUser[] = [];
  public currentPage: number = 1;
  public totalPage: number | null = null;

  private asyncStatuses = {
    getUsers: this.createKey('getUsers'),
  };

  constructor(rootStore: IRootStore) {
    super(rootStore);
    makeObservable(this, {
      usersMap: observable,
      users: observable,
      currentPage: observable,
      totalPage: observable,
      isLoadingUsers: computed,
      isErrorGetUsers: computed,
      isDisabledMoreButton: computed,
      getUsers: action.bound,
      getUsersNext: action.bound,
      resetStore: action.bound,
    })
  }

  public get isLoadingUsers() {
    return this.getAsyncStatus(this.asyncStatuses.getUsers).loading;
  }

  public get isErrorGetUsers() {
    return this.getAsyncStatus(this.asyncStatuses.getUsers).error;
  }

  public get isDisabledMoreButton() {
    return !!this.totalPage && this.currentPage >= this.totalPage;
  }

  private async getUsersByPage(requestPage: number = this.currentPage) {
    this.setLoading(this.asyncStatuses.getUsers);
    try {
      const { success, users, page, total_pages } = await this.rootStore.requester.users.getUsers(requestPage);
      if ( !success ) {
        return this.setError(this.asyncStatuses.getUsers)
      }
      runInAction(() => {
        for (const user of users) {
          this.usersMap.set(user.id, user);
          this.users.push(user);
        }
        this.currentPage = page;
        this.totalPage = total_pages;
      })
      this.setSuccess(this.asyncStatuses.getUsers);
    } catch (err) {
      return this.setError(this.asyncStatuses.getUsers)
    }
  }

  public async getUsers() {
    await this.getUsersByPage();
  }

  public async getUsersNext() {
    if ( this.isDisabledMoreButton ) return;
    await this.getUsersByPage(this.currentPage + 1);
  }

  public resetStore() {
    runInAction(() => {
      this.usersMap = new Map();
      this.users = [];
      this.currentPage = 1;
      this.totalPage = null;
    })
  }
}
