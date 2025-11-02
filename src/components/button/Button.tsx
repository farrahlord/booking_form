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
  className?: string;
  type?: "button" | "submit" | "reset";
}

const Button: FC<PropsWithChildren<Props>> = ({
  variant = "primary",
  onClick,
  disabled = false,
  children,
  type = "button",
}) => {
  return (
    <button
      type={type}
      style={{ minWidth: "144px" }}
      className={`${
        BUTTON_VARIANTS[variant]
      } text-sm p-4 rounded-xl cursor-pointer ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
