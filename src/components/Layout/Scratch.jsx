import React from "react";
import ScratchCard from "react-scratchcard-v2";
import IMGMask from "../../assets/images/TrioCircle.png";
import IMG from "../../assets/images/unmask.png";


const MyScratchCard = (props) => {
  return (
    <div>
      <ScratchCard
        width={180}
        height={180}
        image={IMG}
        finishPercent={90}
        onComplete={props.onComplete}
      >
        <img src={IMGMask}></img>
      </ScratchCard>
    </div>
  );
};

export default MyScratchCard;
