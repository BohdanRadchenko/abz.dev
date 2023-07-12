import { FormikValues } from "formik";

export const createRegisterFormData = (values: FormikValues) => {
  return Object
    .entries(values)
    .reduce((acc, [k, v]) => {
      acc.append(k, v);
      console.log(k, v);
      return acc;
    }, new FormData())
}
