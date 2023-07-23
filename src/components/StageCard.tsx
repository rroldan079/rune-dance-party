import React from "react";

type StageCardProps = {
  cardType: string;
  leftOffset: string;
  z: string;
};

export const StageCard: React.FC<StageCardProps> = ({
  cardType,
  leftOffset,
  z,
}) => {
  return (
    <>
      <div
        id="stage-card"
        className="absolute w-10 h-14 border-2 border-black rounded-md"
        style={{ backgroundColor: cardType, left: leftOffset, zIndex: z }}
      ></div>
    </>
  );
};
