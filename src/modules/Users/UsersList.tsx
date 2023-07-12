import React, { FC, RefObject } from 'react';
import { observer } from "mobx-react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Loader, UserCard } from "componetnts";
import { useStores } from "hooks";
import { EViewBlocks } from "constant";

interface IUsersList {
  innerRef: RefObject<HTMLDivElement>;
}

export const UsersList: FC<IUsersList> = observer(({ innerRef }) => {
  const { rootStore: { usersStore: { users, isLoadingUsers } } } = useStores();
  return (
    <Box
      id={EViewBlocks.USERS}
      sx={{
        position: "relative"
      }}
    >
      <Loader loading={isLoadingUsers}/>
      <Grid
        ref={innerRef}
        container
        rowSpacing={{ xs: 2.5, sm: 2, md: 3.75 }}
        columnSpacing={{ xs: 0, sm: 2, md: 3.75 }}
        columns={{ xs: 1, sm: 4, md: 9 }}
      >
        {!!users.length && users.map(user => (
          <Grid
            item
            xs={1}
            sm={2}
            md={3}
            key={user.id}
          >
            <UserCard
              user={user}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
});
