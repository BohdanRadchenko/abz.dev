import React from 'react';
import MuiRadio from '@mui/material/Radio';
import { BpCheckedIcon, BpIcon } from './styled';

export const Radio = ({ ...props }) => {
  return (
    <MuiRadio
      {...props}
      size="small"
      disableRipple
      checkedIcon={<BpCheckedIcon/>}
      icon={<BpIcon/>}
    />
  );
};
