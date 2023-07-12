import React, { FC } from 'react';
import { Avatar, Card } from 'componetnts';
import Stack from "@mui/material/Stack";
import { IUser } from 'interfaces';
import { UserCardField } from "./UserCardField";
import { replacerPhoneMask } from "helpers";

interface IUserCard {
  user: IUser;
}

export const UserCard: FC<IUserCard> = ({
                                          user: {
                                            photo,
                                            name,
                                            email,
                                            phone,
                                            position,
                                          }
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
        <UserCardField value={name}/>
        <Stack
          spacing={0}
          width="100%"
        >
          <UserCardField value={position}/>
          <UserCardField value={email}/>
          <UserCardField
            value={replacerPhoneMask(phone)}
            hideTooltip
          />
        </Stack>
      </Stack>
    </Card>
  );
};
