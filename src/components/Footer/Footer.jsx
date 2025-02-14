import React from "react";

import {
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaFacebookSquare,
  FaYoutube,
  FaGithub,
  FaEnvelope,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Footer.css";
import Ballpit from "../Contact/ballPit";

export default function Footer() {
  return (
    <>
      <footer
        className="footer justify-center -z-20 bg-gradient-180 from-bgColor to-bgColor dark:bg-gradient-0 dark:from-bgColorDark dark:bg-bgColorAltDark px-[5%] sm:px-[2%] 2xl:px-[17%]"
        aria-labelledby="footer-heading"
      >
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl">
          {/* Footer Section Two */}
          <div className="border-t-2 border-[rgba(0,0,0,0.1)] dark:border-[rgba(255,255,255,0.05)] grid lg:grid-cols-3 text-center gap-8 py-16 lg:gap-0  ">
            {/* Socials icons */}
            <div className="flex justify-center lg:justify-start ">
              <div className="flex gap-[20px] ">
                <a
                  href="https://x.com/harshgupta_js"
                  className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] "
                >
                  <FaTwitter className="text-titleColor dark:text-titleColorDark hover:text-primaryColor dark:hover:text-primaryColor" />
                </a>
                <a
                  href="https://www.linkedin.com/in/harsh-gupta-b56a63265/"
                  className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] "
                >
                  <FaLinkedinIn className="text-titleColor dark:text-titleColorDark hover:text-primaryColor dark:hover:text-primaryColor" />
                </a>
                <a
                  href="https://github.com/Harshjs-Gupta"
                  className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor "
                >
                  <FaGithub className="text-titleColor dark:text-titleColorDark hover:text-primaryColor dark:hover:text-primaryColor" />
                </a>
              </div>
            </div>

            <div className="flex justify-center uppercase tracking-[0.05em] text-titleColor dark:text-titleColorDark">
              &copy; 2025&nbsp;{" "}
              <span className="text-primaryColor">imharsh</span>. All Rights
              Reserved
            </div>

            <div className="uppercase tracking-[0.05em] text-titleColor dark:text-titleColorDark flex justify-center lg:justify-end">
              Developed By&nbsp;{" "}
              <span className="text-primaryColor">Harsh Gupta</span>
            </div>
          </div>
        </div>
      </footer>
      <div
        style={{
          position: "absolute",
          minHeight: "400px",
          maxHeight: "400px",
          width: "100%",
        }}
      >
        <Ballpit
          count={200}
          gravity={0.7}
          friction={0.8}
          wallBounce={0.95}
          followCursor={true}
        />
      </div>
    </>
  );
}
