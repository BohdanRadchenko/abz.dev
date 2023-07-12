const white = '#fff';
const white60 = '#ffffff99';

const black87 = '#000000DE';

const gray100 = '#F8F8F8';
const gray200 = '#B4B4B4';

const yellow100 = '#FFE302';
const yellow200 = '#F4E041';

const blue100 = '#00BDD3';

const backgroundColor = gray100;

const buttonContainedPrimaryOnSurfaceDefault = black87;
const buttonContainedPrimaryDefault = yellow200;
const buttonContainedPrimaryHovered = yellow100;
const buttonContainedPrimaryOnSurfaceDisabled = white;
const buttonContainedPrimaryDisabled = gray200;

const tooltipSurfaceDefault = black87;
const tooltipColorDefault = white;

const loaderSurfaceDefault = white60;
const loaderColorDefault = blue100;

export interface IExtendPalette {
  white: string;
  paletteBackgroundColor: string;

  buttonContainedPrimaryOnSurfaceDefault: string;
  buttonContainedPrimaryDefault: string;
  buttonContainedPrimaryHovered: string;
  buttonContainedPrimaryOnSurfaceDisabled: string;
  buttonContainedPrimaryDisabled: string;

  tooltipSurfaceDefault: string;
  tooltipColorDefault: string;

  loaderSurfaceDefault: string;
  loaderColorDefault: string;
}

export const extendPalette: IExtendPalette = {
  white,
  paletteBackgroundColor: backgroundColor,

  buttonContainedPrimaryOnSurfaceDefault,
  buttonContainedPrimaryDefault,
  buttonContainedPrimaryHovered,
  buttonContainedPrimaryOnSurfaceDisabled,
  buttonContainedPrimaryDisabled,

  tooltipSurfaceDefault,
  tooltipColorDefault,

  loaderSurfaceDefault,
  loaderColorDefault,
};
