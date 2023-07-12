import React from 'react';
import { observer } from "mobx-react";
import Typography from "@mui/material/Typography";
import { RegistrationForm } from "./RegistrationForm";
import Stack from "@mui/material/Stack";
import { useStores } from "../../hooks";

export const RegistrationFormBlock = observer(() => {
  const {
    rootStore: {
      positionStore: {
        isLoadingPositions,
        positionsMap
      }
    }
  } = useStores();

  const showForm = !isLoadingPositions && !!positionsMap.size;
  return (
    <Stack
      spacing={6.25}
      width="100%"
      alignItems="center"
    >
      <Typography
        variant="title"
        align="center"
      >
        Working with POST request
      </Typography>
      {showForm && <RegistrationForm/>}
    </Stack>
  )
})
