import React from "react";
import ScratchCard from "react-scratchcard-v2";
import IMG from "../../assets/images/TrioCircle.png";

const MyScratchCard = () => {
  return (
    <div>
      <ScratchCard
        width={300}
        height={300}
        image={IMG}
        finishPercent={80}
        onComplete={() => console.log("complete")}
      >
      </ScratchCard>
    </div>
  );
};

export default MyScratchCard;
