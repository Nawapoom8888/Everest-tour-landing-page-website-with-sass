import React from "react";
import TestimonialBox from "./TestimonialBox";

export default function Testimonial() {
  return (
    <div className="testimonial-section border-test">
      <div className="container utils-center-content border-test">
        <h1 className="title--main-white utils-margin-bottom-6-rem">
          Feedback From Our Client
        </h1>
        <div className="testimonial-section__box-list utils-flex-center-row">
          <TestimonialBox
            imgURL="client-01.avif"
            name="Samantha Johnson"
            nationality="United States"
            message="Unforgettable journey to Everest Base Camp with Everest Mountain Tours. The guides were knowledgeable, the scenery was breathtaking, and every step was a testament to their commitment to safety."
          />
          <TestimonialBox
            imgURL="client-02.avif"
            name="Isabella Rossi"
            nationality="Italy"
            message="The helicopter tour of Everest was simply spectacular! A surreal experience that allowed me to witness the grandeur of the Himalayas. Everest Mountain Tours exceeded my expectations."
          />
          <TestimonialBox
            imgURL="client-03.avif"
            name="Erik Muller"
            nationality="Germany"
            message="Summiting Everest was a dream fulfilled. Everest Mountain Tours' meticulous planning and the guidance of their experienced team made this challenging expedition an incredible and rewarding achievement."
          />
          <TestimonialBox
            imgURL="client-04.avif"
            name="Rajesh Patel"
            nationality="India"
            message="Exceptional service and attention to detail. Everest Mountain Tours' commitment to sustainable tourism resonated with me. The Everest Base Camp trek was a cultural immersion, and I felt well-supported throughout."
          />
        </div>
      </div>
    </div>
  );
}
