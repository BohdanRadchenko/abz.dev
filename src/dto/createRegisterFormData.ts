import { FormikValues } from "formik";

export const createRegisterFormData = (values: FormikValues) => {
  return Object
    .entries(values)
    .reduce((acc, [k, v]) => {
      switch (k) {
        case "phone":
          acc.append(k, v.replaceAll(/(\s)*(\()*(\))*/gim, ""));
          break;
        default:
          acc.append(k, v);
      }
      return acc;
    }, new FormData())
}
