import * as Yup from "yup";
import { MAX_UPLOAD_FILE_SIZE } from "constant";

const phoneRegExp = /^\+38 \(0\d{2}\) \d{3} \d{2} \d{2}$/

const emailRegExp = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Username should contain 2-60 characters")
    .max(60, "Username should contain 2-60 characters"),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required!')
    .matches(emailRegExp, 'Invalid email'),
  phone: Yup.string()
    .required('Phone number is required!')
    .matches(phoneRegExp, 'Phone number is not valid'),
  photo: Yup.mixed()
    .required("Photo required!")
    .test("fileSize", "The file is too large", (value) => {
      if ( !value ) return true;
      const file = value as File;
      return file.size < MAX_UPLOAD_FILE_SIZE;
    }),
});
