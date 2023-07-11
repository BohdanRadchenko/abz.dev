import { IUserPosition } from "./IUserPosition";

export interface IPositionStore {
  positions: Map<number, IUserPosition>;

  getPositions(): Promise<void>
}
