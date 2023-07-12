import { action, computed, makeObservable, observable, runInAction } from "mobx";
import { BaseStore } from "./BaseStore";
import { IAuthStore, IRequestError, IRootStore } from "interfaces";
import { FormikValues } from "formik";
import { createRegisterFormData } from "dto/createRegisterFormData";

export class AuthStore extends BaseStore implements IAuthStore {
  public isRegistrationCompleted: boolean = false;

  private asyncStatuses = {
    postUser: this.createKey('postUser'),
  };

  constructor(rootStore: IRootStore) {
    super(rootStore);
    makeObservable(this, {
      isRegistrationCompleted: observable,
      isLoadingPostUser: computed,
      onRegistration: action.bound,
    })
  }


  public get isLoadingPostUser() {
    return this.getAsyncStatus(this.asyncStatuses.postUser).loading;
  }

  public async onRegistration(values: FormikValues) {
    this.setLoading(this.asyncStatuses.postUser);
    const formData = createRegisterFormData(values);
    try {
      // const data = await this.rootStore.requester.auth.postUser(formData);
      const data = await this.rootStore.requester.auth.postUser(new FormData());
      console.log('data', data);
      runInAction(() => {
        this.isRegistrationCompleted = true;
        this.rootStore.notifyStore.success("Success!")
        this.setSuccess(this.asyncStatuses.postUser);
        this.rootStore.usersStore.resetStore();
        this.rootStore.usersStore.getUsers();
      })
    } catch (err) {
      const error = err as IRequestError;
      const msg = error.response?.data.message || error.message;
      this.rootStore.notifyStore.error(msg)
      this.setError(this.asyncStatuses.postUser);
    }
  }

}
