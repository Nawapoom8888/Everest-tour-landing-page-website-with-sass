import React from "react";

export default function About() {
  return (
    <div className="about border-test">
      <div className="container utils-center-content border-test">
        <div className="title--main-black utils-margin-top-12-rem utils-margin-bottom-6-rem border-test">
          About Us
        </div>
        <div className="about__text-box utils-margin-bottom-12-rem border-test">
          <div className="border-test col-1">
            <div className="border-test">
              Welcome to Everest Mountain Tours, where adventure meets
              awe-inspiring landscapes, and every journey is a chapter in the
              exploration of the Himalayas.
            </div>
            <div className="border-test">
              Established with a passion for mountaineering and a love for the
              unique Sherpa culture, we take pride in curating exceptional
              experiences for travelers seeking the thrill of the world's
              highest peaks.
            </div>
          </div>
          <div className="border-test col-2">
            At Everest Mountain Tours, our seasoned guides prioritize safety and
            enjoyment, blending expertise with a commitment to sustainable
            tourism. Explore Everest with customizable packages, inviting you on
            a quest to discover its majesty and create lasting memories.
            <div className="border-test">
              <button className="btn">READ MORE</button>
            </div>
          </div>
        </div>

        <div className="about__gallery border-test">
          <div className="about__gallery--img1" />

          <div className="about__gallery--text-box-1 border-test">
            <div className="title--sub-black" style={{ textAlign: "left" }}>
              We Are Expert Guidance!
            </div>
            <p>
              Choose us for seasoned guides prioritizing safety, ensuring a
              seamless and memorable Everest adventure with unparalleled
              expertise.
            </p>
          </div>

          <div className="about__gallery--img2" />

          <div className="about__gallery--text-box-2 border-test">
            <div className="title--sub-black" style={{ textAlign: "left" }}>
              Sustainable Exploration
            </div>
            <p>
              Opt for Everest Mountain Tours to contribute to sustainable
              tourism, as we are dedicated to fostering a harmonious
              relationship between nature and exploration, leaving a positive
              impact on the pristine beauty of the Himalayas.
            </p>
          </div>

          <div className="about__gallery--img3" />

          <div className="about__gallery--bg-box-1" />

          <div className="about__gallery--bg-box-2" />

          <div className="about__gallery--img4" />
        </div>
      </div>
    </div>
  );
}
