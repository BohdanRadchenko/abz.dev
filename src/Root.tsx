import React, { FC } from "react";
import { theme } from "./theme";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from "@mui/material";
import { ToastContainer } from "componetnts";

interface IRoot {
  children: JSX.Element;
}

export const Root: FC<IRoot> = ({ children }): JSX.Element => (
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <ToastContainer/>
    <CssBaseline/>
    {children}
  </ThemeProvider>
  // </React.StrictMode>
)
