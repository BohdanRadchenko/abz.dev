const white = '#fff';
const white60 = '#ffffff99';

const black60 = '#00000099';
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
const inputBorderSecondary = black87;
const inputBorderCritical = red100;
const inputLabelDefault = gray400;
const inputLabelCritical = red100;
const inputLabelAccent = black87;
const inputHelperColorDefault = black60;

export interface IExtendPalette {
  white: string;
  black87: string;
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
  inputBorderSecondary: string;
  inputBorderCritical: string;
  inputLabelDefault: string;
  inputLabelCritical: string;
  inputLabelAccent: string;
  inputHelperColorDefault: string;
}

export const extendPalette: IExtendPalette = {
  white,
  black87,
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
  inputBorderSecondary,
  inputBorderCritical,
  inputLabelDefault,
  inputLabelCritical,
  inputLabelAccent,
  inputHelperColorDefault,
};
