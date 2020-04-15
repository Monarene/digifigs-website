import React from "react";
import ballons from "../assets/images/ballons.png";

const StandOut = () => {
  return (
    <div className="container">
      <div className="row standing-mb-wrapper">
        <h3 className="standing-mb  standing-contact" data-aos="flip-down">
          We stand out
          <br /> among the Crowd
        </h3>
        <div className="col-sm-6 standing-lg">
          <h3 className="standing" data-aos="flip-down">
            We stand out
            <br /> among the Crowd
          </h3>
        </div>
        <div className="col-sm-6 standing-lg">
          <img alt="" className="ballons" src={ballons} />
        </div>
      </div>
    </div>
  );
};

export default StandOut;
