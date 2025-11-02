import { type FieldValues, type Path, useFormContext } from "react-hook-form";
import { InputValidationByType } from "./validation";
import FieldWrapper from "./FieldWrapper";
import classNames from "classnames";

type InputProps<T extends FieldValues> = {
  label: string;
  type: "text" | "email" | "tel";
  name: Path<T>;
  required?: boolean;
};

const InputField = <T extends FieldValues>({
  label,
  name,
  type,
  required = false,
}: InputProps<T>) => {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const inputValidation = InputValidationByType[type];

  const reg = register(name, {
    ...(required ? { required: `${label} is required` } : {}),
    pattern: inputValidation && {
      value: inputValidation,
      message: `Invalid ${label}`,
    },
  });

  const value = watch(name);
  const hasValue = value !== undefined && value !== "";
  const hasError = !!errors[name];

  return (
    <FieldWrapper
      label={label}
      name={name}
      active={hasValue}
      error={errors[name]?.message as string | undefined}
    >
      <input
        className={classNames(
          "outline-none w-full bg-transparent text-sm transition-all duration-200 ease-in-out p-4 rounded-xl",
          { "pt-10": hasValue }
        )}
        id={name}
        aria-invalid={hasError ? "true" : "false"}
        type={type}
        {...reg}
      />
    </FieldWrapper>
  );
};

export default InputField;
