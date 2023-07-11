import React, { FC } from 'react';
import MuiAvatar, { AvatarProps } from '@mui/material/Avatar';

interface IAvatar extends AvatarProps {
  alt?: string
  src?: string
}

export const Avatar: FC<IAvatar> = ({ src, alt, ...rest }) => {
  return (
    <MuiAvatar
      {...rest}
      alt={alt ?? "avatar"}
      src={src}
      sx={{ width: 70, height: 70 }}
    />
  );
};
