import type { FC } from "react";

interface props {
  progressPercentage: number;
  className?: string;
}

const ProgressBar: FC<props> = ({ progressPercentage, className }) => {
  return (
    <div className={`h-1.5 w-full bg-gray-300 rounded-full ${className}`}>
      <div
        style={{ maxWidth: `${progressPercentage}%` }}
        className="h-full rounded-full bg-spectrum-burple"
      />
    </div>
  );
};

export default ProgressBar;
