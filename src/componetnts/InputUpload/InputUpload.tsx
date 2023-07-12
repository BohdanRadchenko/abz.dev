import React, { FC, useRef, useState, useCallback, ChangeEvent, FocusEvent } from 'react';
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import { HelperTextStyle, InputButtonStyle, InputFieldStyle, InputFileStyle, LabelStyle, TittleStyle } from "./styled";
import { MIN_UPLOAD_IMG_HEIGHT, MIN_UPLOAD_IMG_WIDTH } from "../../constant";

interface InputUploadProps {
  name: string,
  placeholder?: string;
  helperText?: string | false;
  error?: boolean;
  accept?: string;
  onChange: (file: File) => void;
  onBlur: (event: FocusEvent<HTMLInputElement, Element>) => void;
  onError?: (message: string) => void;
}

export const InputUpload: FC<InputUploadProps> = ({
                                                    name,
                                                    placeholder = "Upload your photo",
                                                    helperText,
                                                    error = false,
                                                    accept = "image/*",
                                                    onChange,
                                                    onBlur,
                                                    onError,
                                                  }) => {
  const id = useRef<string>(`input-file-${new Date().getTime().toString()}`)
  const [title, setTitle] = useState<string>(placeholder)

  const handleOnLoad = useCallback((e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if ( !target.files?.length ) return;
    const file = target.files[0];
    setTitle(file.name);
    onChange(file);

    const url = URL.createObjectURL(file);
    const img = new Image();

    img.onload = () => {
      if ( img.width < MIN_UPLOAD_IMG_WIDTH || img.height < MIN_UPLOAD_IMG_HEIGHT ) {
        onError && onError("The size of the photo must be at least 70x70 pixels")
      }
      URL.revokeObjectURL(img.src);
    };
    img.src = url;
  }, [setTitle, onChange, onError])

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
        name={name}
        id={id.current}
        onChange={handleOnLoad}
        onBlur={onBlur}
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
