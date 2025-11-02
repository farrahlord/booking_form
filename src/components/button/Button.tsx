import classNames from "classnames";
import type { FC, MouseEventHandler, PropsWithChildren } from "react";

type ButtonVariant = "primary" | "secondary";

const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-spectrum-burple text-white hover:bg-spectrum-burple-dark ",
  secondary:
    "bg-white text-spectrum-burple border border-spectrum-burple hover:border-spectrum-burple-dark hover:bg-gray-300",
};
interface Props {
  variant?: ButtonVariant;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: FC<PropsWithChildren<Props>> = ({
  variant = "primary",
  onClick,
  disabled = false,
  type = "button",
  className = "",
  children,
}) => {
  return (
    <button
      type={type}
      className={classNames(
        BUTTON_VARIANTS[variant],
        "text-sm p-4 rounded-xl",
        className,
        { "opacity-50 cursor-not-allowed": disabled },
        { "cursor-pointer": !disabled }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
