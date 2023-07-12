import React, { useEffect, useRef, FC, useCallback } from 'react';
import InputTextMask from "react-input-mask";
import { Input } from "../Input";
import Box from "@mui/material/Box";
import { TextFieldProps } from "@mui/material/TextField";

interface IInputMaskProps {
  value: string;
  mask: string;
}

export const InputMask: FC<IInputMaskProps & TextFieldProps> = ({ value, mask, ...props }) => {
  const inputRef = useRef<HTMLInputElement | null>();
  const fieldRef = useRef<HTMLInputElement | null>();

  const handleChange = useCallback(() => {
    if ( ( !inputRef || !inputRef.current ) || ( !fieldRef || !fieldRef.current ) ) return;
    const ev = new Event('input', { bubbles: true });
    fieldRef.current.value = inputRef.current?.value.trim();
    fieldRef.current.dispatchEvent(ev);
  }, [value, inputRef, fieldRef])

  useEffect(() => {
    handleChange();
  }, [handleChange])

  return (
    <Box>
      <Box
        sx={{
          width: 0,
          height: 0,
          opacity: 0,
        }}
      >
        <InputTextMask
          inputRef={ref => inputRef.current = ref}
          name={props.name}
          mask={mask}
          maskChar=""
          value={value}
        />
      </Box>
      <Input
        inputRef={fieldRef}
        {...props}
      />
    </Box>
  )
}
