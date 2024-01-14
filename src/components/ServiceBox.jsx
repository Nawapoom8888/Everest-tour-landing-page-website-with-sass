import React from "react";

export default function ServiceBox(props) {
  return (
    <div className="service__box-list--item">
      <div
        className="utils-margin-bottom-6-rem composition--white"
        style={{
          backgroundImage: `url(../../public/images/${props.img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "35rem",
        }}
      />
      <div className="title--sub-white" style={{ textAlign: "left" }}>
        {props.title}
      </div>
      <p className="utils-margin-bottom-3-rem">{props.info}</p>
      <button className="btn">EXPLORE</button>
    </div>
  );
}
