import React, { useState } from "react";

type StageCardProps = {
  color: string;
  leftOffset?: string;
  z?: string;
  active?: boolean;
  limbs?: number[];
};

export const StageCard: React.FC<StageCardProps> = ({
  color,
  leftOffset,
  z,
  active,
  limbs,
}) => {
  const [colorNicer, setColorNicer] = useState<Record<string,string>>({
    'red': 'bg-vivid-raspberry',
    'yellow': 'bg-ronchi',
    'green': 'bg-willpower-orange',
    'blue': 'bg-blue-purple',
    }) 
  
  return (
    <>
      <div
        id="stage-card"
        className= {`absolute w-10 h-14 border-4 ${active ? "border-white" : "border-black"} rounded-xl ${colorNicer[color]}`}
        style={{ left: leftOffset , zIndex: z, width: "20vw", height: "25vw" }}
      >
        <div className="bold">
          {limbs && limbs[0]}
          {limbs && limbs[1]}
          <br />
          {limbs && limbs[2]}
          {limbs && limbs[3]}
          </div>
      </div>
    </>
  );
};
