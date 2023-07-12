import axios, { AxiosInstance } from 'axios';
import { config } from 'config';
import {
  IApiRequester,
} from "interfaces";
import { AuthServices, PositionServices, UsersServices } from "api/services";
import { EApiRequestHeaders } from "constant";

export class ApiRequester implements IApiRequester {
  protected instance: AxiosInstance;
  public position: PositionServices;
  public users: UsersServices;
  public auth: AuthServices;

  constructor() {
    this.instance = this.createAxiosInstance();
    this.position = new PositionServices(this.instance);
    this.users = new UsersServices(this.instance);
    this.auth = new AuthServices(this.instance);
  }

  private createAxiosInstance() {
    const axiosInstance = axios.create({
      withCredentials: false,
      baseURL: config.API,
    });

    axiosInstance.interceptors.request.use(async request => {
      const withoutAuthorization = request.params?.withoutAuthorization;
      if ( withoutAuthorization ) {
        delete request.params.withoutAuthorization;
        return request;
      }

      request.headers[EApiRequestHeaders.TOKEN] = this.auth.storageGetToken;
      return request;
    });

    axiosInstance.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error?.config;
        if ( error.response.status === 401 && !originalRequest._retry ) {
          originalRequest._retry = true;
          const token = await this.auth.getToken();
          this.auth.storageSetToken(token)
          originalRequest.headers[EApiRequestHeaders.TOKEN] = token;
          return this.instance(originalRequest);
        }
        return Promise.reject(error)
      },
    );

    return axiosInstance;
  }
}
