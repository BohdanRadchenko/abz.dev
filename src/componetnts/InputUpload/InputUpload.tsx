import React, { FC, useRef, useState, useCallback, ChangeEvent } from 'react';
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { HelperTextStyle, InputButtonStyle, InputFieldStyle, InputFileStyle, LabelStyle, TittleStyle } from "./styled";

interface InputUploadProps {
  placeholder?: string;
  helperText?: string;
  error?: boolean;
  accept?: string;
}

export const InputUpload: FC<InputUploadProps> = ({
                                                    placeholder = "Upload your photo",
                                                    helperText,
                                                    error = false,
                                                    accept = "image/*",
                                                  }) => {
  const id = useRef<string>(`input-file-${new Date().getTime().toString()}`)
  const [title, setTitle] = useState<string>(placeholder)

  const handleOnLoad = useCallback((e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if ( !target.files?.length ) return;
    const file = target.files[0];
    setTitle(file.name);
  }, [setTitle])

  return (
    <LabelStyle
      htmlFor={id.current}
      hasError={error}
    >
      <InputButtonStyle>
        <Typography align="center">
          Upload
        </Typography>
      </InputButtonStyle>

      <InputFieldStyle>
        <Stack maxWidth="100%">
          <TittleStyle
            noWrap
            isPlaceholder={title === placeholder}
          >
            {title}
          </TittleStyle>
        </Stack>
      </InputFieldStyle>

      <InputFileStyle
        id={id.current}
        onChange={handleOnLoad}
        type="file"
        accept={accept}
      />

      {!!helperText && (
        <HelperTextStyle>
          {helperText}
        </HelperTextStyle>
      )}
    </LabelStyle>
  );
};
