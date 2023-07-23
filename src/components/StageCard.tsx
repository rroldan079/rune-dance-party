import React from "react";

type StageCardProps = {
  cardType: string;
  leftOffset: string;
  z: string;
}

export const StageCard: React.FC<StageCardProps> = ({cardType, leftOffset, z}) => {
  return (<>
    <div className="stage-card" style={{ backgroundColor: cardType, left:leftOffset, zIndex: z}}></div>
  </>);
};
