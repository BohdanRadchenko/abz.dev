const white = '#fff';
const white60 = '#ffffff99';

const black87 = '#000000DE';

const gray100 = '#F8F8F8';
const gray200 = '#B4B4B4';
const gray300 = '#D0CFCF';
const gray400 = '#7E7E7E';
const gray500 = '#C4C4C4';

const yellow100 = '#FFE302';
const yellow200 = '#F4E041';

const blue100 = '#00BDD3';

const red100 = '#CB3D40';

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

const radioBorderDefault = gray500;
const radioPrimaryColor = blue100;

const inputBorderDefault = gray300;
const inputBorderCritical = red100;
const inputLabelDefault = gray400;
const inputLabelCritical = red100;

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

  radioPrimaryColor: string;
  radioBorderDefault: string;

  inputBorderDefault: string;
  inputBorderCritical: string;
  inputLabelDefault: string;
  inputLabelCritical: string;
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

  radioPrimaryColor,
  radioBorderDefault,

  inputBorderDefault,
  inputBorderCritical,
  inputLabelDefault,
  inputLabelCritical,
};
