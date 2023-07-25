import React from "react";

type StageCardProps = {
  color: string;
  leftOffset?: string;
  z?: string;
  limbs?: number[];
};

export const StageCard: React.FC<StageCardProps> = ({
  color,
  leftOffset,
  z,
  limbs,
}) => {
  return (
    <>
      <div
        id="stage-card"
        className="absolute w-10 h-14 border-2 border-black rounded-md"
        style={{ backgroundColor: color, left: leftOffset, zIndex: z }}
      >
        <div className="bold">
          {limbs && limbs[0]}
          {limbs && limbs[1]}
          {limbs && limbs[2]}
          {limbs && limbs[3]}
          </div>
      </div>
    </>
  );
};
