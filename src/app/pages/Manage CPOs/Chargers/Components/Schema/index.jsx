import * as Yup from "yup";


export const PracticeFormSchema = Yup.object({
  firstname: Yup.string().min(3).max(25).required("!"),
  lastname: Yup.string().min(3).max(25).required(" !!!!!!"),
  email: Yup.string().email().required(" !!!!!!!!!!!!!!"),
  password: Yup.string().min(8).required("ll")
});