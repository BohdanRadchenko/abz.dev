import { AxiosInstance } from "axios";
import api from '../api';
import { IData } from "interfaces";
import { ELocalStorageKeys } from "../../constant";

export class AuthServices {
  constructor(private readonly instance: AxiosInstance) {
  }

  public get storageGetToken(): string | null {
    return localStorage.getItem(ELocalStorageKeys.ACCESS_TOKEN);
  }

  public storageSetToken(token: string) {
    localStorage.setItem(ELocalStorageKeys.ACCESS_TOKEN, token);
  }

  public async getToken(): Promise<string> {
    return await this.instance
      .get(api.token, { params: { withoutAuthorization: true } })
      .then(({ data: { token } }) => token);
  }

  public async postUser(formData: FormData): Promise<IData> {
    return await this.instance
      .post(api.users, formData)
      .then(({ data }) => data);
  }
}
