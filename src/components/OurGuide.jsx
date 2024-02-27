import React from "react";
import OurGuideBox from "./OurGuideBox";

export default function OurGuide() {
  return (
    <div className="ourGuide-section border-test">
      <div className="container utils-center-content border-test">
        <h1 className="title--main-black utils-margin-bottom-6-rem">
          Meet Our Guide
        </h1>
        <div className="ourGuide__box-list">
          <OurGuideBox
            imgURL="guide-01.avif"
            name="Raj Kapoor"
            role="Lead Guide"
          />
          <OurGuideBox
            imgURL="guide-02.avif"
            name="Ten Sherpa"
            role="Lead Guide"
          />
          <OurGuideBox
            imgURL="guide-03.avif"
            name="John Simmer"
            role="Lead Guide"
          />
        </div>

        <div className="ourGuide__text-box">
          <h2 className="title--sub-white">Message From Us</h2>
          <p className="">
            Welcome to Everest Mountain Tours! It's our pleasure to guide you
            through the awe-inspiring landscapes of the Himalayas. With a
            commitment to safety, sustainability, and personalized experiences,
            we invite you to embark on a journey that transcends boundaries and
            leaves you with lasting memories.
          </p>
          <br />
          <p className="">
            Whether you're trekking to Everest Base Camp, conquering the summit,
            or soaring above it all on a helicopter tour, our team is dedicated
            to ensuring your adventure is not only thrilling but also enriching.
            Join us, and together, let's explore the majesty of Everest.
          </p>
          <br />
          <p className="">
            Safe travels, <br />
            The Everest Mountain Tours Team
          </p>
        </div>
      </div>
    </div>
  );
}
