import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

interface IUserCardField {
  value?: string
  hideTooltip?: boolean
}

export const UserCardField: FC<IUserCardField> = ({ value, hideTooltip = false }) => {
  const [disableTooltip, setDisableTooltip] = useState(true)
  const ref = useRef<HTMLSpanElement | null>(null)

  const handleCalcTypoSize = useCallback(() => {
    if ( !ref || !ref.current ) return;
    if ( ref.current.offsetWidth < ref.current.scrollWidth ) {
      setDisableTooltip(false)
    }
  }, [ref])

  const addWindowResizeList = useCallback(() => {
    window.addEventListener("resize", handleCalcTypoSize)
  }, [handleCalcTypoSize])

  const remWindowResizeList = useCallback(() => {
    window.removeEventListener("resize", handleCalcTypoSize)
  }, [handleCalcTypoSize])

  useEffect(() => {
    handleCalcTypoSize();
    addWindowResizeList();
    return () => {
      remWindowResizeList();
    }
  }, [handleCalcTypoSize, addWindowResizeList, remWindowResizeList])

  if ( !value ) {
    return null;
  }

  return (
    <Tooltip
      disableHoverListener={hideTooltip || disableTooltip}
      title={value}
      placement="bottom-end"
    >
      <Typography
        ref={ref}
        width="100%"
        noWrap
        align="center"
      >
        {value}
      </Typography>
    </Tooltip>
  );
};
