import axios, { AxiosInstance } from 'axios';
import { config } from 'config';
import {
  IApiRequester,
} from "interfaces";
import { PositionServices, UsersServices } from "services";

export class ApiRequester implements IApiRequester {
  protected instance: AxiosInstance;
  public position: PositionServices;
  public users: UsersServices;

  constructor() {
    this.instance = this.createAxiosInstance();
    this.position = new PositionServices(this.instance);
    this.users = new UsersServices(this.instance);
  }

  private createAxiosInstance() {
    const axiosInstance = axios.create({
      withCredentials: false,
      baseURL: config.API,
    });

    // axiosInstance.interceptors.request.use(async request => {
    //   const withoutAuthorization = request.params?.withoutAuthorization;
    //   if (withoutAuthorization) {
    //     delete request.params.withoutAuthorization;
    //     return request;
    //   }
    //
    //   const token = await this.authService.getToken();
    //   request.headers[EApiRequestHeaders.AUTHORIZATION] = `Bearer ${token}`;
    //
    //   return request;
    // });

    axiosInstance.interceptors.response.use(
      response => response,
      error => Promise.reject(error),
    );

    return axiosInstance;
  }
}
