import React, { useMemo } from 'react';
import { observer } from "mobx-react";
import { useFormik, FormikValues } from 'formik';
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';
import { Button, Input, RadioGroup, InputMask, InputUpload } from "componetnts";
import { useStores } from "hooks";
import { validationSchema } from "helpers";
import { dtoUserPosition } from "dto";
import { FormStyled } from "./styled";

export const RegistrationForm = observer(() => {
  const {
    rootStore: {
      positionStore: {
        positions
      },
      authStore: {
        onRegistration,
      }
    }
  } = useStores();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      position_id: dtoUserPosition(positions)[0].value,
      photo: null,
    },
    validationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values: FormikValues) => {
      onRegistration(values);
    },
  });


  const disableSubmit = useMemo(() => Object.keys(formik.touched).length === 0 || !formik.isValid, [formik.touched, formik.isValid])

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
            error={!!formik.touched.name && !!formik.errors.name}
            helperText={!!formik.touched.name && !!formik.errors.name && formik.errors.name}
          />
          <Input
            label="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={!!formik.touched.email && !!formik.errors.email}
            helperText={!!formik.touched.email && !!formik.errors.email && formik.errors.email}
          />
          <InputMask
            mask="+38 (099) 999 99 99"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="phone"
            label="Phone"
            error={!!formik.touched.phone && !!formik.errors.phone}
            helperText={!!formik.touched.phone && !!formik.errors.phone ? formik.errors.phone : "+38 (XXX) XXX XX XX"}
          />
        </Stack>
        <RadioGroup
          id="position_id"
          name="position_id"
          label="Select your position"
          value={formik.values.position_id}
          onChange={formik.handleChange}
          defaultValue={formik.values.position_id}
          options={dtoUserPosition(positions)}
          sx={{ mb: "47px" }}
        />
        <Stack spacing={6.25}>
          <InputUpload
            name="photo"
            accept=".jpeg,.jpg"
            onChange={file => formik.setFieldValue("photo", file, true)}
            onBlur={formik.handleBlur}
            error={!!formik.touched.photo && !!formik.errors.photo}
            helperText={!!formik.touched.photo && !!formik.errors.photo && formik.errors.photo}
            onError={msg => formik.setFieldError("photo", msg)}
          />
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              text="Sign up"
              disabled={disableSubmit}
            />
          </Box>
        </Stack>
      </Stack>
    </FormStyled>
  )
})
