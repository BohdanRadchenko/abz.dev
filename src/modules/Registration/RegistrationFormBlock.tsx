import React from 'react';
import Typography from "@mui/material/Typography";
import { RegistrationForm } from "./RegistrationForm";
import Stack from "@mui/material/Stack";

export const RegistrationFormBlock = () => {
  return (
    <Stack
      spacing={6.25}
      alignItems="center"
    >
      <Typography variant="title">
        Working with POST request
      </Typography>
      <RegistrationForm/>
    </Stack>
  )
};
