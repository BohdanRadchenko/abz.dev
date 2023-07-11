import { createTheme } from "@mui/material";
import { extendPalette } from "./extendPalette";

const { backgroundColorMain } = extendPalette;

declare module '@mui/material/styles' {
  interface TypographyVariants {
    title: React.CSSProperties;
    body: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    title?: React.CSSProperties;
    body?: React.CSSProperties;
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
      default: backgroundColorMain,
    }
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
  components: {
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
  }
})
