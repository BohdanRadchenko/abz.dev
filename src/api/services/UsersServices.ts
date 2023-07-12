import { AxiosInstance } from "axios";
import api from '../api';
import { IData, IUser } from "interfaces";

interface IGetUsers extends IData {
  users: IUser[];
  total_pages: number,
  total_users: number,
  count: number,
  page: number,
  links: {
    next_url: string,
    prev_url: string,
  },
}

export class UsersServices {
  constructor(private readonly instance: AxiosInstance) {
  }

  public async getUsers(page: number): Promise<IGetUsers> {
    return await this.instance
      .get(api.usersPagination(page), { params: { withoutAuthorization: true } })
      .then(({ data }) => data);
  }
}
