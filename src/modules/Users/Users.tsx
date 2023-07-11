import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { EViewBlocks } from "constant";
import { UsersList } from "./UsersList";

export const Users = () => {
  return (
    <Container
      id={EViewBlocks.USERS}
      sx={{
        mt: 17.5
      }}
    >
      <Typography
        variant="title"
        align="center"
        mb={6.25}
      >
        Working with GET request
      </Typography>
      <UsersList/>
    </Container>
  );
};
