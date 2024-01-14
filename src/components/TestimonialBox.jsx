import React from "react";

export default function TestimonialBox(props) {
  return (
    <div className="box">
      <div className="box__side box__side--front">
        <img src={`../../images/${props.imgURL}`} alt={props.name} />
      </div>
      <div className="box__side box__side--back border-test">
        <div className="border-test">
          <div className="profile-img border-test">
            <img src={`../../images/${props.imgURL}`} alt="" />
          </div>
        </div>

        <div className="profile-info border-test">
          <p className="profile-info--name text-grey-white">{props.name}</p>
          <p className="profile-info--nationality text-grey-white">
            {props.nationality}
          </p>
        </div>

        <p className="profile-message border-test">{`" ${props.message} "`}</p>
      </div>
    </div>
  );
}
