import React, { FC } from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';
import { Typography } from "@mui/material";

interface IButton extends ButtonProps {
  text?: string;
  type?: 'button' | 'submit',
}

export const Button: FC<IButton> = ({ text, type = "button", ...rest }) => {
  return (
    <MuiButton
      {...rest}
      type={type}
    >
      <Typography>
        {text}
      </Typography>
    </MuiButton>
  );
};
