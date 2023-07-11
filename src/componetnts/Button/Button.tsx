import React, { FC } from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';
import { Typography } from "@mui/material";

interface IButton extends ButtonProps {
  text?: string;
}

export const Button: FC<IButton> = ({ text, ...rest }) => {
  return (
    <MuiButton {...rest}>
      <Typography>
        {text}
      </Typography>
    </MuiButton>
  );
};
