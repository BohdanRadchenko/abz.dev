import { IAsyncStatus } from './IAsyncStatus';
import { IError } from './IError';

export interface IAsyncKey extends Symbol {
  asyncKey: true;
}

export interface IAsyncStore {
  createKey(stringKey: string): IAsyncKey;

  getAsyncStatus(asyncStatus: string): IAsyncStatus;

  getAsyncError(asyncError: string): IError | null;

  setLoading(key: string): void;

  setSuccess(key: string): void;

  setError(key: string, error?: IError): void;
}
