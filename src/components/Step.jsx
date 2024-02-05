import React from "react";
import StepBox from "./StepBox";

export default function Step() {
  return (
    <div className="step-section border-test">
      <div className="bg-video">
        <video className="bg-video__content" autoPlay loop muted>
          <source src="../../videos/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag!
        </video>
      </div>

      <div className="container utils-center-content border-test">
        <h1 className="title--main-black utils-margin-bottom-6-rem">
          3 Easy-Step To Join With Us
        </h1>
        <div className="step-list">
          <StepBox
            no="1"
            title="Explore Packages"
            info="Discover your ideal Everest adventure from our diverse range of packages, tailored to your preferences and duration."
          />
          <StepBox
            no="2"
            title="Contact Our Team"
            info="Connect with our knowledgeable team for personalized assistance, answering questions and helping you fine-tune your Everest itinerary."
          />
          <StepBox
            no="3"
            title="Secure Your Spot"
            info="Confirm your booking confidently, knowing our team is dedicated to ensuring your Everest journey is seamless and unforgettable."
          />
        </div>
      </div>
    </div>
  );
}

/*

Explore Packages:
Browse our diverse range of Everest adventures, from trekking to helicopter tours. Find the perfect match for your preferences and duration, ensuring a customized experience.

Contact Our Team:
Reach out to our knowledgeable team for personalized assistance. We're here to answer your questions, provide additional details, and help you tailor your itinerary to create the ultimate Everest journey.

Secure Your Spot:
Once you've chosen your adventure and fine-tuned the details, confirm your booking securely. Embark on your Everest experience with confidence, knowing our team is dedicated to making your journey unforgettable. */
