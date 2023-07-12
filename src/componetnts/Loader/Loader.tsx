import React, { FC } from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

interface ILoader {
  loading?: boolean;
}

export const Loader: FC<ILoader> = ({ loading = false }) => {
  return (
    <>
      {loading && (
        <Stack
          sx={theme => ( {
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme.palette.loaderSurfaceDefault,
          } )}
        >
          <CircularProgress/>
        </Stack>
      )}
    </>
  );
}
