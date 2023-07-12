import React, { FC } from 'react';
import TextField, { TextFieldProps } from "@mui/material/TextField";

export const Input: FC<TextFieldProps> = ({ children, ...props }) => {
  return (
    <TextField
      {...props}
      margin="dense"
      fullWidth
    />
  );
};
