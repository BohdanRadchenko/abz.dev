import { AxiosError, AxiosResponse } from 'axios';

export interface IError {
  message?: string;
}

export interface IRequestError extends AxiosError {
  response: AxiosResponse<IError>;
}
