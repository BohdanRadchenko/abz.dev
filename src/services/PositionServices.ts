import { AxiosInstance } from "axios";
import api from './api';
import { IData, IUserPosition } from "interfaces";

interface IGetPosition extends IData {
  positions: IUserPosition[];
}

export class PositionServices {
  constructor(private readonly instance: AxiosInstance) {
  }

  public async getPositions(): Promise<IGetPosition> {
    return await this.instance
      .get(api.positions)
      .then(({ data }) => data);
  }

}
