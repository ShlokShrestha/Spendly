import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormClearErrors,
  UseFormGetValues,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";

export interface UseFormProps<T extends FieldValues = FieldValues> {
  handleSubmit: UseFormHandleSubmit<T>;
  register?: UseFormRegister<T>;
  errors: FieldErrors<T>;
  setValue?: UseFormSetValue<T>;
  clearErrors?: UseFormClearErrors<T>;
  getValues?: UseFormGetValues<T>;
  control: Control<T>;
}

export interface UseFormFieldHelper<T extends FieldValues = FieldValues> {
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  setValue?: UseFormSetValue<T>;
  clearErrors?: UseFormClearErrors<T>;
  getValues?: UseFormGetValues<T>;
}

export type SignUpFormValues = {
  fullName: string;
  email: string;
  password: string;
};

export type LoginFormValues = {
  email: string;
  password: string;
};
