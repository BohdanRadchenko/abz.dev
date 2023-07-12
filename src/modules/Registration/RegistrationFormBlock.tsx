import React from 'react';
import { observer } from "mobx-react";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useStores } from "hooks";
import { Loader } from "componetnts";
import { RegistrationForm } from "./RegistrationForm";

export const RegistrationFormBlock = observer(() => {
  const {
    rootStore: {
      positionStore: {
        isLoadingPositions,
        positionsMap
      },
      authStore: {
        isLoadingPostUser,
      }
    }
  } = useStores();

  const showForm = !isLoadingPositions && !!positionsMap.size;
  return (
    <Stack
      spacing={6.25}
      width="100%"
      alignItems="center"
      position="relative"
    >
      <Loader loading={isLoadingPostUser || isLoadingPositions}/>
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
