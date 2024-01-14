import React from "react";

export default function Contact() {
  return (
    <div className="contact-section">
      <div className="border-test">
        <div className="container utils-center-content border-test">
          <h1 className="title--main-white utils-margin-bottom-6-rem">
            Contact Us
          </h1>
          <div className="contact__text-box border-test">
            <div className="contact__info border-test">
              <div className="">
                <h3 className="">Email: info@everesttours.com</h3>
                <h3 className="">Phone: +1 (555) 123-4567</h3>
                <h3 className="">Address: 456/12 Kathmandu, Nepal</h3>
              </div>
              <div className="">
                <p className="">
                  Have questions or ready to start your Everest adventure? Reach
                  out to us! Our team at Everest Mountain Tours is here to
                  assist you every step of the way.
                </p>
              </div>
            </div>
            <div className="contact__form border-test">
              <form action="#" className="contact__form--group">
                <input
                  type="text"
                  className="contact__form--input"
                  placeholder="Enter Your Name"
                  required
                />
                <input
                  type="email"
                  className="contact__form--input"
                  placeholder="Enter Your Email"
                  required
                />
                <textarea
                  className="contact__form--input"
                  name="message"
                  id="message"
                  rows="16"
                  placeholder="Enter Your Message"
                  required
                ></textarea>
                <button type="submit" className="btn">
                  SEND
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
