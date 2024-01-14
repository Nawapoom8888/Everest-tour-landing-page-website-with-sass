import React from "react";

export default function StepBox(props) {
  return (
    <div className="step__box">
      <div className="step__box--text border-test">
        <div className="step__box--heading">
          <div className="no">{props.no}</div>
          <div className="title--sub-black" style={{ textAlign: "left" }}>
            {props.title}
          </div>
        </div>
        <p className="utils-margin-bottom-3-rem border-test">{props.info}</p>
      </div>

      <div className="step__box--btn border-test">
        <div className="border-test">READ MORE</div>
      </div>
    </div>
  );
}
