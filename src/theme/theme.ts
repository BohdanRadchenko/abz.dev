import { createTheme } from "@mui/material";
import { extendPalette, IExtendPalette } from "./extendPalette";

const {
  paletteBackgroundColor,
  buttonContainedPrimaryOnSurfaceDefault,
  buttonContainedPrimaryDefault,
  buttonContainedPrimaryHovered,
  buttonContainedPrimaryOnSurfaceDisabled,
  buttonContainedPrimaryDisabled,
  tooltipSurfaceDefault,
  tooltipColorDefault,
  loaderColorDefault,
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
          padding: '4px',
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
  }
})
