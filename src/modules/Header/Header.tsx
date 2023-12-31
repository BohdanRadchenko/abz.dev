import React from 'react';
import Box from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import { Button } from "componetnts";
import { useScrollById } from "hooks";
import { EViewBlocks } from "constant";
import { ReactComponent as Logo } from 'assets/icons/logo.svg';

export const Header = () => {
  const handleClickUsers = useScrollById(EViewBlocks.USERS);
  const handleClickRegister = useScrollById(EViewBlocks.REGISTRATION);
  return (
    <Box
      sx={theme => ( {
        backgroundColor: theme.palette.white,
      } )}
    >
      <Container>
        <Stack
          spacing={1.75}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          height="60px"
        >
          <Logo/>
          <Stack
            spacing={1.25}
            direction="row"
          >
            <Button
              text="Users"
              onClick={handleClickUsers}
            />
            <Button
              text="Sign up"
              onClick={handleClickRegister}
            />
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};
