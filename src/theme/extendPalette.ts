const white = '#fff';

const black87 = '#000000DE';

const gray100 = '#F8F8F8';
const gray200 = '#B4B4B4';

const yellow100 = '#FFE302';
const yellow200 = '#F4E041';

const backgroundColor = gray100;

const buttonContainedPrimaryOnSurfaceDefault = black87;
const buttonContainedPrimaryDefault = yellow200;
const buttonContainedPrimaryHovered = yellow100;
const buttonContainedPrimaryOnSurfaceDisabled = white;
const buttonContainedPrimaryDisabled = gray200;

export interface IExtendPalette {
  white: string;
  paletteBackgroundColor: string;

  buttonContainedPrimaryOnSurfaceDefault: string;
  buttonContainedPrimaryDefault: string;
  buttonContainedPrimaryHovered: string;
  buttonContainedPrimaryOnSurfaceDisabled: string;
  buttonContainedPrimaryDisabled: string;
}

export const extendPalette: IExtendPalette = {
  white,
  paletteBackgroundColor: backgroundColor,

  buttonContainedPrimaryOnSurfaceDefault,
  buttonContainedPrimaryDefault,
  buttonContainedPrimaryHovered,
  buttonContainedPrimaryOnSurfaceDisabled,
  buttonContainedPrimaryDisabled,
};
