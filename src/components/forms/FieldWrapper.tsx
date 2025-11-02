import classNames from "classnames";
import type { FC, PropsWithChildren } from "react";

type Props = {
  label: string;
  name: string;
  active: boolean;
  error?: string;
};

const FieldWrapper: FC<PropsWithChildren<Props>> = ({
  label,
  name,
  active,
  error,
  children,
}) => {
  return (
    <div>
      <div
        className={classNames(
          "relative rounded-lg mb-2 bg-gray-white text-black border",
          { "border-gray-400 border-opacity-25": !error },
          { "border-red-500": !!error }
        )}
      >
        {children}
        <label
          className={classNames(
            `text-gray-500 absolute top-0 left-0 flex items-center p-4 mb-2 transition-all duration-200 ease-in-out font-bold`,
            { "text-sm": active },
            { "text-md": !active }
          )}
          htmlFor={name}
        >
          {label}
        </label>
      </div>
      {error ? (
        <span role="alert" className="text-sm text-red-700">
          {error}
        </span>
      ) : null}
    </div>
  );
};

export default FieldWrapper;
