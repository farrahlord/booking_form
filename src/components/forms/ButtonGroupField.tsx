import classNames from "classnames";
import {
  Controller,
  useFormContext,
  type FieldValues,
  type Path,
} from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface ButtonGroupFieldProps<T extends FieldValues> {
  name: Path<T>;
  options: Option[];
  required?: boolean;
}

export const ButtonGroupField = <T extends FieldValues>({
  name,
  options,
  required = false,
}: ButtonGroupFieldProps<T>) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: required ? "Please select an option" : false,
      }}
      render={({ field }) => (
        <div className="flex flex-col gap-6">
          {options.map(({ value, label }) => {
            const isSelected = field.value === value;
            return (
              <button
                key={value}
                type="button"
                onClick={() => field.onChange(value)}
                className={classNames(
                  "p-4 text-md font-medium transition cursor-pointer rounded-xl bg-white text-black border-2 text-left",
                  {
                    "border-spectrum-burple": isSelected,
                  },
                  {
                    "bg-white text-black border-gray-400 hover:bg-gray-100":
                      !isSelected,
                  }
                )}
              >
                {label}
              </button>
            );
          })}
        </div>
      )}
    />
  );
};

export default ButtonGroupField;
