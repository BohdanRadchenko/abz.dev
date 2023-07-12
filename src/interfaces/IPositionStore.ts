import { IUserPosition } from "./IUserPosition";

export interface IPositionStore {
  positionsMap: Map<number, IUserPosition>;
  positions: IUserPosition[];

  isLoadingPositions: boolean;

  getPositions(): Promise<void>
}
