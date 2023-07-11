import React, { FC } from 'react';
import Box from '@mui/material/Box';

interface ICard {
  children: React.ReactElement
}

export const Card: FC<ICard> = ({ children }) => {
  return (
    <Box
      padding={2.5}
      borderRadius="10px"
      sx={theme => ( { backgroundColor: theme.palette.white } )}
    >
      {children}
    </Box>
  );
};
