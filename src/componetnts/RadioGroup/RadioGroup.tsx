import React from 'react';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl, { FormControlProps } from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Radio } from 'componetnts';
import { FormLabelTitleStyle } from "./styled";

export interface IRadioOption<T> {
  value: T,
  label: string,
}

interface IRadioGroup<T> extends Pick<FormControlProps, 'sx' | 'onChange'> {
  id: string;
  name: string;
  label?: string;
  options: IRadioOption<T>[],
  value: T,
  defaultValue: T,
}

export const RadioGroup = <T extends number | string>({
                                                        defaultValue,
                                                        value,
                                                        id,
                                                        name,
                                                        label,
                                                        options,
                                                        sx,
                                                        onChange
                                                      }: IRadioGroup<T>) => {
  return (
    <FormControl sx={sx}>
      {label && (
        <FormLabelTitleStyle id={id}>
          {label}
        </FormLabelTitleStyle>
      )}
      <MuiRadioGroup
        aria-labelledby={id}
        defaultValue={defaultValue || options[0].value}
        name={name}
        value={value}
        onChange={onChange}
      >
        <Stack spacing={1}>
          {options.map(({ value, label }) => (
            <Box key={value}>
              <FormControlLabel
                key={value}
                value={value}
                label={label}
                name={name}
                control={<Radio/>}
                sx={{
                  height: "26px",
                  '& > span': {
                    marginRight: "3px",
                  }
                }}
              />
            </Box>
          ))}
        </Stack>
      </MuiRadioGroup>
    </FormControl>
  );
};
