import React, { useCallback, useEffect, useRef } from 'react';
import { observer } from "mobx-react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button } from "componetnts";
import { useIsInViewport, useStores } from "hooks";
import { UsersList } from "./UsersList";
import Stack from "@mui/material/Stack";

export const Users = observer(() => {
    const {
      rootStore: {
        usersStore: {
          getUsers,
          getUsersNext,
          users,
          isLoadingUsers,
          isErrorGetUsers,
          isDisabledMoreButton
        }
      }
    } = useStores();
    const { ref, value: isInViewport } = useIsInViewport();
    const listRef = useRef<HTMLDivElement | null>(null);

    const scrollToUser = useCallback((position: number) => {
      if ( !listRef || !listRef.current ) return;
      const t = setTimeout(() => {
        const scrollElement = listRef.current?.children[position];
        scrollElement?.scrollIntoView({ behavior: 'smooth', block: 'start' })
        clearTimeout(t)
      }, 1)
    }, [listRef]);

    const handleShowMore = useCallback(async () => {
      const position = users.length;
      await getUsersNext();
      scrollToUser(position)
    }, [getUsersNext, users, scrollToUser]);

    useEffect(() => {
      if ( !isInViewport || !!users.length || isLoadingUsers || isErrorGetUsers ) return;
      getUsers();
    }, [isInViewport, getUsers, users, isLoadingUsers, isErrorGetUsers]);

    return (
      <Container
        ref={ref}
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
        <UsersList innerRef={listRef}/>
        {!isDisabledMoreButton && (
          <Stack
            alignItems="center"
            mt={6.25}
          >
            <Button
              text="Show more"
              disabled={isDisabledMoreButton || isLoadingUsers}
              onClick={handleShowMore}
            />
          </Stack>
        )}
      </Container>
    );
  }
)
