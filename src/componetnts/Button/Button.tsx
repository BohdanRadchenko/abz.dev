import React, { FC } from 'react';
import MuiButton, { ButtonProps } from '@mui/material/Button';

interface IButton extends ButtonProps {
  text?: string;
}

export const Button: FC<IButton> = ({ text, ...rest }) => {
  return (
    <MuiButton {...rest}>
      {text}
    </MuiButton>
  );
};
