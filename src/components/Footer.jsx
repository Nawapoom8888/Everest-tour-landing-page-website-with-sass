import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer__text-box border-test">
        <p className="text-grey-white">
          “Climb mountains not so the world can see you, but so you can see the
          world.” <br /> ― David McCullough Jr.
        </p>
      </div>
      <div className="footer__social-box border-test">
        <FaFacebookF />
        <FaInstagram />
        <FaXTwitter />
        <FaDiscord />
      </div>
      <div className="footer__copyright border-test">
        <p className="text-grey-white">
          &copy; {currentYear} All rights reserved. By Nawapoom Panichwilai
        </p>
      </div>
    </div>
  );
}
