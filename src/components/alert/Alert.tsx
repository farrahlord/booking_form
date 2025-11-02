import { type FC, type PropsWithChildren } from "react";
import { WarningIcon, CloseIcon } from "./icons";

interface Props {
  title: string;
}

const Alert: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-2 bg-amber-200 rounded-xl p-6 text-left">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row items-center gap-2">
          <WarningIcon />
          <h4 className="font-bold text-sm">{title}</h4>
        </div>
        <span className="cursor-pointer hidden md:block">
          <CloseIcon />
        </span>
      </div>
      {children}
    </div>
  );
};

export default Alert;
