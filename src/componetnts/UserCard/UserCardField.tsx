import React, { FC } from 'react';
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

interface IUserCardField {
  value?: string
}

export const UserCardField: FC<IUserCardField> = ({ value }) => {

  if ( !value ) {
    return null;
  }

  return (
    <Tooltip title={value}>
      <Typography
        noWrap
        align="center"
      >
        {value}
      </Typography>
    </Tooltip>
  );
};
