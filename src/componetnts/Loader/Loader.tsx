import React, { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { LoaderWrapper } from "./styled";

interface ILoaderProps {
  loading?: boolean;
}

export const Loader: FC<ILoaderProps> = ({ loading }) => {
  return (
    <>
      {loading && (
        <LoaderWrapper>
          <CircularProgress/>
        </LoaderWrapper>
      )}
    </>
  );
}
