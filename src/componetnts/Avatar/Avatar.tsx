import React, { FC, useCallback, useEffect, useState } from 'react';
import MuiAvatar, { AvatarProps } from '@mui/material/Avatar';
import { imagePreload } from "helpers";
import { ReactComponent as Placeholder } from 'assets/icons/photoCover.svg'

interface IAvatar extends AvatarProps {
  alt?: string
  src?: string
}

export const Avatar: FC<IAvatar> = ({ src, alt, ...rest }) => {
  const [preloadError, setPreloadError] = useState(false);

  const preloadAvatar = useCallback(() => {
    if ( !src ) {
      setPreloadError(true);
      return;
    }
    imagePreload(src)
      .catch(() => setPreloadError(true));
  }, [src]);


  useEffect(() => {
    preloadAvatar();
  }, [preloadAvatar]);

  return (
    <MuiAvatar
      {...rest}
      alt={alt ?? "avatar"}
      src={preloadError ? "" : src}
      sx={{ width: 70, height: 70 }}
    >
      <Placeholder/>
    </MuiAvatar>
  )
};
