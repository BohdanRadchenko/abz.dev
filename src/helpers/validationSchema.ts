import * as Yup from "yup";
import { MAX_UPLOAD_FILE_SIZE } from "constant";

const phoneRegExp = /^\+38 \(0\d{2}\) \d{3} \d{2} \d{2}$/

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Username should contain 2-60 characters")
    .max(60, "Username should contain 2-60 characters"),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required!'),
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
