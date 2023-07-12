import React from 'react';
import MuiRadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl, { FormControlProps } from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { Radio } from 'componetnts';

export interface IRadioOption<T> {
  value: T,
  label: string,
}

interface IRadioGroup<T> extends Pick<FormControlProps, 'sx'> {
  id: string;
  name: string;
  label?: string;
  options: IRadioOption<T>[],
}

export const RadioGroup = <T extends number | string>({ id, name, label, options, sx }: IRadioGroup<T>) => {
  return (
    <FormControl sx={sx}>
      {label && (
        <FormLabel
          id={id}
          sx={{
            mb: "11px",
          }}
        >
          {label}
        </FormLabel>
      )}
      <MuiRadioGroup
        aria-labelledby={id}
        defaultValue={options[0].value}
        name={name}
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
