import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

export default function OurGuideBox(props) {
  return (
    <div className="ourGuide__box">
      <img
        src={`../../images/${props.imgURL}`}
        alt="guide-profile"
        className="ourGuide__box--bg"
      />
      <div className="ourGuide__box--info border-test">
        <h2 className="text-grey-white">{props.name}</h2>
        <p className="text-grey-white utils-margin-bottom-3-rem">
          {props.role}
        </p>
        <h1 className="ourGuide__box--social text-grey-white">
          <FaFacebookF className="border-test" />
          <FaInstagram className="border-test" />
          <FaLinkedinIn className="border-test" />
        </h1>
      </div>
    </div>
  );
}
