import type { FC } from "react";
import { CloseIcon } from "../alert/icons";

interface props {
  progressPercentage: number;
  className?: string;
}

const ProgressBar: FC<props> = ({ progressPercentage, className }) => {
  return (
    <div
      className={`flex w-full gap-5 justify-center items-center ${className}`}
    >
      <div className="h-1.5 w-full bg-gray-300 rounded-full">
        <div
          style={{ maxWidth: `${progressPercentage}%` }}
          className="h-full rounded-full bg-spectrum-burple"
        />
      </div>
      <div className="w-10 h-10 bg-gray-100 rounded-md md:hidden justify-center flex items-center cursore-pointer">
        <CloseIcon width={12} />
      </div>
    </div>
  );
};

export default ProgressBar;
