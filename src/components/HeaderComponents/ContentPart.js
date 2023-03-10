import React from "react";
import arrow from "../../images/arrow.svg";


const ContentPart = (props) => {
  return (
    <div className="content-part">
      <div className="headerCont">
        <h1 className="creatorName">{props.creatorName}</h1>
        <h1
          style={{
            textTransform: "uppercase",
          }}
        >
          WE ARE CREATIVES
        </h1>
        <img src={arrow} alt="alt" />
      </div>
    </div>
  );
};

export default ContentPart;
