import React, { useEffect, useState } from 'react';

type RoundTimerProps = {
    setRoundTimeUp:React.Dispatch<React.SetStateAction<boolean>>;
}

export const RoundTimer: React.FC<RoundTimerProps> = ({ setRoundTimeUp }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    /////////   PLACEHOLDER   ///////////////
    // This is just a placeholder to start the timer
    const interval = setInterval(() => {
      setProgress((prevProgress) => prevProgress + 1);
    }, 1000); // Increment progress every second
    return () => clearInterval(interval);
  }, []);

  useEffect(()=> {
    let progressPercent = (progress%6 / 5) * 100
    if (progressPercent == 100){
        setRoundTimeUp(true)
    }
    // setRoundTimeUp(false)
  }, [progress])

  return (
    <>
      <div className="w-full h-10 py-2">
        <div
          className="h-full bg-white"
          style={{ width: `${(progress%6 / 5) * 100}%` }} // Calculate the width based on the progress
        />
      </div>
    </>
  );
};