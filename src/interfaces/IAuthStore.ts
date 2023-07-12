import { FormikValues } from "formik";

export interface IAuthStore {
  isRegistrationCompleted: boolean;
  isLoadingPostUser: boolean;

  onRegistration(values: FormikValues): Promise<void>;
}
