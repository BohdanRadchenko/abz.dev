import { createTheme } from "@mui/material";
import { extendPalette, IExtendPalette } from "./extendPalette";

const {
  black87,
  paletteBackgroundColor,
  buttonContainedPrimaryOnSurfaceDefault,
  buttonContainedPrimaryDefault,
  buttonContainedPrimaryHovered,
  buttonContainedPrimaryOnSurfaceDisabled,
  buttonContainedPrimaryDisabled,
  tooltipSurfaceDefault,
  tooltipColorDefault,
  loaderColorDefault,
  radioPrimaryColor,
  inputBorderDefault,
  inputBorderCritical,
  inputLabelDefault,
  inputLabelCritical,
} = extendPalette;


declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties;
    body: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    body?: React.CSSProperties;
  }


  interface Palette extends IExtendPalette {
  }

  interface PaletteOptions extends IExtendPalette {
  }

  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    title: true;
    body: true;
  }
}


export const theme = createTheme({
  palette: {
    ...extendPalette,
    background: {
      default: paletteBackgroundColor,
    },
  },
  typography: {
    fontFamily: ['Nunito', 'sans-serif'].join(","),
    title: {
      fontSize: '40px',
      lineHeight: '40px',
      fontWeight: 400,
    },
    body: {
      fontSize: '16px',
      lineHeight: '26px',
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      xs: 360,
      sm: 768,
      md: 1024,
      lg: 1440,
      xl: 2560,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          boxSizing: 'border-box',
          paddingLeft: 16,
          paddingRight: 16,
          '@media (min-width: 768px)': {
            paddingLeft: 32,
            paddingRight: 32,
          },
          '@media (min-width: 1024px)': {
            paddingLeft: 60,
            paddingRight: 60,
            maxWidth: 1290,
          }
        },
      }
    },
    MuiTypography: {
      defaultProps: {
        variant: 'body',
        fontFamily: "Nunito",
        variantMapping: {
          title: 'h2',
          body: 'span',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        color: "primary",
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: '80px',
          minWidth: '100px',
          height: '34px',
          padding: '4px 18px',
          flexShrink: 0,
          whiteSpace: 'nowrap',
          textTransform: 'none',
          position: 'relative',
          boxShadow: 'none',
          '&:focus': {
            outline: 'none',
          },
          '&:active': {
            '&:focus': {
              outline: 'none',
            },
          },
          '&.MuiButton-disablePointerEvents': {
            pointerEvents: 'none',
          },
        },
        containedPrimary: {
          color: buttonContainedPrimaryOnSurfaceDefault,
          backgroundColor: buttonContainedPrimaryDefault,
          '&:hover': {
            boxShadow: 'none',
            backgroundColor: buttonContainedPrimaryHovered,
          },
          '&.Mui-disabled': {
            color: buttonContainedPrimaryOnSurfaceDisabled,
            backgroundColor: buttonContainedPrimaryDisabled,
          },
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          color: tooltipColorDefault,
          backgroundColor: tooltipSurfaceDefault,
          padding: '4px 16px',
          borderRadius: '4px',
          cursor: 'default',
          userSelect: 'none',
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        colorPrimary: {
          color: loaderColorDefault,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: inputLabelDefault,
          '&.Mui-focused': {
            color: inputLabelDefault,
          },
          '&.Mui-error': {
            color: inputLabelCritical,
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          maxHeight: 54,
          boxSizing: 'border-box',
          borderColor: inputBorderDefault,
          '&:hover': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: inputBorderDefault,
            },
            '&.Mui-error': {
              '.MuiOutlinedInput-notchedOutline': {
                borderColor: inputBorderCritical,
                borderWidth: 1,
              },
            },
          },
          '&.Mui-focused': {
            '.MuiOutlinedInput-notchedOutline': {
              borderWidth: 1,
              borderColor: inputBorderDefault,
            },
          },
          '&.Mui-error': {
            '.MuiOutlinedInput-notchedOutline': {
              borderColor: inputBorderCritical,
            },
            '& label': {
              color: inputLabelCritical,
            }
          },
          '&.Mui-focused.Mui-error': {
            '.MuiOutlinedInput-notchedOutline': {
              borderWidth: 2,
            },
          }
        },
      }
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          marginTop: 'unset',
          marginBottom: 'unset',
          '& .MuiFormLabel-root': {
            color: black87,
          },
          '& .MuiFormLabel-root.Mui-focused': {
            color: black87,
          },
          '& .MuiFormLabel-root.Mui-focused.Mui-error': {
            color: inputLabelCritical,
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiFormHelperText-root': {
            display: 'block',
            width: '100%',
            position: "absolute",
            bottom: -4,
            transform: 'translateY(100%)',
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          borderWidth: 1,
          '& .MuiSvgIcon-root': {
            fontSize: 24,
          },
          '&.Mui-checked': {
            color: radioPrimaryColor,
          },
        },
      },
    },
  }
})
