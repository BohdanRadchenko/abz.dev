import React, { FC } from 'react';
import { Avatar, Card } from 'componetnts';
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { UserCardField } from "./UserCardField";

interface IUserCard {
  photo?: string
  name?: string
  mail?: string
  phone?: string
}

export const UserCard: FC<IUserCard> = ({
                                          photo,
                                          name,
                                          mail,
                                          phone
                                        }) => {
  return (
    <Card>
      <Stack
        spacing={2.5}
        alignItems="center"
      >
        <Avatar
          alt={name}
          src={photo}
        />

        <Typography>{name}</Typography>

        {( mail || phone ) && (
          <Stack spacing={0}>
            <UserCardField value={mail}/>
            <UserCardField value={phone}/>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};
