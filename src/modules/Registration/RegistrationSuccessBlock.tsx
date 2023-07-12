import React from 'react';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { ReactComponent as SuccessImage } from 'assets/icons/successImage.svg';

export const RegistrationSuccessBlock = () => {
  return (
    <Stack
      spacing={6.25}
      alignItems="center"
    >
      <Typography
        variant="title"
        align="center"
      >
        User successfully registered
      </Typography>
      <SuccessImage/>
    </Stack>
  )
};
