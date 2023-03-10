import React from "react";
import arrow from "../../images/arrow.svg";

const ContentPart = (props) => {
  return (
    <div className="content-part">
      <div className="headerCont">
        <h1 className={props.p.class}>{props.p.creatorName}</h1>
        <h1
          style={{
            textTransform: "uppercase",
          }}
          className="acH1"
        >
          WE ARE CREATIVES
        </h1>
        <img src={arrow} alt="alt" />
      </div>
    </div>
  );
};

export default ContentPart;
