import { IUserPosition } from "interfaces";
import { IRadioOption } from "componetnts";

export const dtoUserPosition = (positions: IUserPosition[]): IRadioOption<number>[] => {
  return positions.reduce((acc, el) => {
    acc = [...acc, { value: el.id, label: el.name }]
    return acc;
  }, [] as IRadioOption<number>[])
}
