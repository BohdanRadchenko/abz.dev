import React from 'react';
import { observer } from "mobx-react";
import { useFormik } from 'formik';
import * as yup from 'yup';
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import { Button, Input, RadioGroup, InputMask, InputUpload } from "componetnts";
import { useStores } from "hooks";
import { dtoUserPosition } from "dto";
import { FormStyled } from "./styled";

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export const RegistrationForm = observer(() => {
  const {
    rootStore: {
      positionStore: {
        positions
      }
    }
  } = useStores();

  const formik = useFormik({
    initialValues: {
      name: "Test name",
      email: 'foobar@example.com',
      phone: '+380631850925',
      position_id: 0,
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <FormStyled onSubmit={formik.handleSubmit}>
      <Stack
        sx={{
          width: "100%",
          maxWidth: "380px"
        }}
      >
        <Stack
          spacing={6.25}
          marginBottom="43px"
        >
          <Input
            label="Your name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <Input
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <InputMask
            mask="+38 (099) 999 99 99"
            value={formik.values.phone}
            onChange={formik.handleChange}
            name="phone"
            label="Phone"
            helperText="+38 (XXX) XXX XX XX"
          />
        </Stack>
        <RadioGroup
          id="position_id"
          name="position_id"
          label="Select your position"
          options={dtoUserPosition(positions)}
          sx={{ mb: "47px" }}
        />
        <Stack
          spacing={6.25}
        >
          <InputUpload accept=".jpeg,.jpg"/>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              text="Sign up"
            />
          </Box>
        </Stack>
      </Stack>
    </FormStyled>
  )
})
