import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  console.log(isNavOpen);

  return (
    <div className="header border-test">
      <div className="container">
        <div className="navbar border-test">
          <div className="navbar__brand-logo">Everest</div>
          <div className="navbar__menu">
            <div
              className={`navbar__menu--background${
                isNavOpen ? "-open" : "-close"
              }`}
            >
              <div className="close-icon">
                <IoClose onClick={() => setIsNavOpen((prev) => !prev)} />
              </div>
              <ul className="navbar__menu--list border-test">
                <li className="">About</li>
                <li className="">Activities</li>
                <li className="">Step</li>
                <li className="">Guide</li>
                <li className="">Testimonial</li>
                <li className="">Contact</li>
              </ul>
            </div>
            <div
              className="navbar__menu--btn"
              onClick={() => setIsNavOpen((prev) => !prev)}
            >
              <LuMenu className="menu__icon" />
            </div>

            {isNavOpen && (
              <div
                className="backdrop"
                onClick={() => setIsNavOpen((prev) => !prev)}
              />
            )}
          </div>
        </div>

        <div className="header__hero border-test">
          <div className="hero__text-box border-test">
            <div className="heading--main-white utils-margin-bottom-3-rem border-test">
              Explore Everest Mountain With Our Tours
            </div>

            <div className="heading--sub-white border-test">
              Everest Adventures Awaits! Discover safety, sustainability, and
              customizable experiences with Everest Mountain Tours.
            </div>

            <div className="hero__social-media-list border-test">
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
              <FaDiscord />
            </div>

            <div className="hero__register-btn border-test btn-hover">
              <span>Register Now</span>
              <span>
                <IoIosArrowRoundForward className="hero__register-btn--arrow" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
