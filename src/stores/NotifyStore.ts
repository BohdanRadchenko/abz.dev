import { action, makeObservable } from "mobx";
import { toast } from 'react-toastify';
import {
  IRootStore, INotifyStore
} from "interfaces";
import { BaseStore } from "./BaseStore";

export class NotifyStore extends BaseStore implements INotifyStore {

  constructor(rootStore: IRootStore) {
    super(rootStore);
    makeObservable(this, {
      error: action.bound,
    })
  }

  public error(msg: string) {
    toast.error(msg);
  }

  public success(msg: string) {
    toast.success(msg);
  }
}
