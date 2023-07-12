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
    <Tooltip
      title={value}
      placement="bottom-end"
    >
      <Typography
        width="100%"
        noWrap
        align="center"
      >
        {value}
      </Typography>
    </Tooltip>
  );
};
