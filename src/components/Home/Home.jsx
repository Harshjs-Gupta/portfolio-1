import React from "react";
import { Link } from "react-scroll";
import shapeOne from "../../assets/shape-1.png";
import shapeTwo from "../../assets/shape-2.png";

import { FaTwitter, FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";
import ExperienceBadge from "../../ui/ExperienceBadge";
import CompletedProjectBadge from "../../ui/CompletedProjectBadge";
import ProfileImg from "../../ui/ProfileImg";
import SocialAccounts from "../../ui/SocialAccounts";

const Home = () => {
  return (
    <section
      className="flex px-8 sm:px-4 pt-[160px] sm:pt-[200px] lg:pt-[165px] justify-center bg-gradient-180 from-bgColor to-bgColorAlt overflow-x-hidden pb-[180px] sm:pb-[0px] dark:from-bgColorDark dark:to-bgColorDark scrollbar-hide"
      id="home"
    >
      <div className="grid items-center min-h-screen grid-rows-flow-2 xs:gap-20 sm:gap-28 lg:grid-cols-2 3xl:gap-96">
        {/* left side */}
        <div className="relative top-[15%] sm:top-[-8%] p-3 w-full text-white grid gird-rows-flow-6 gap-2 order-2 lg:order-1">
          <p className="uppercase tracking-[0.05em] leading-[1.7] font-[700] text-titleColor dark:text-textColorDark flex items-center justify-center sm:justify-start">
            Hello,
            <span className="block text-large text-primaryColor">
              &nbsp;My Name Is
            </span>
          </p>

          <h1 className="uppercase tracking-[0.05em] text-h2Size sm:text-[70px] font-[700] flex sm:items-start justify-center items-center drop-shadow-textShadow leading-[1.2] mt-[15px] flex-col gap-2 sm:gap-0">
            <span className="text-primaryColor">Harsh&nbsp;&nbsp;K.&nbsp;</span>
            <span>Gupta</span>
          </h1>

          <p className="font-[700] leading-[1.7] flex items-center justify-center sm:justify-start">
            <span className="text-small tracking-[0.05em] uppercase text-titleColor dark:text-textColorDark">
              I am
            </span>
            <b className="font-[Caveat] text-h2Size ml-[10px] text-titleColor dark:text-titleColorDark">
              Frontend Developer
            </b>
          </p>

          <p className="text-large max-w-[520px] my-[40px] leading-[1.7] text-textColor dark:text-textColorDark font-[Comfortaa] font-[700] flex items-center text-center sm:text-left">
            I am a frontend developer with a passion for creating
            high-performance and visually appealing user interfaces.
          </p>
          {/* Social Account */}
          <SocialAccounts />
          <div className="flex gap-[70px] font-[700] uppercase tracking-[0.05em] items-center justify-center mx-[-40px] sm:mx-0 sm:justify-start">
            <a
              href="/HarshGuptaResume.pdf"
              download="Harsh_Gupta_Resume.pdf"
              target="_blank"
              className='text-titleColor dark:text-titleColorDark text-tiny grid place-items-center border-[2px] border-solid border-borderColor dark:border-borderColorDark p-[20px] rounded-[56px] shadow-[5px_5px_rgba(0,0,0,0.2)] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] relative before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[0] hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100'
            >
              <span className="z-[1]">Download CV</span>
            </a>
            <Link
              to="skills"
              spy={true}
              hashSpy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className='cursor-pointer text-titleColor dark:text-titleColorDark text-tiny grid place-items-center p-[20px] relative before:content-[""] before:absolute before:top-[50%] before:left-[-62%] before:translate-y-[-50%] before:w-[40px] before:h-[2px] before:bg-borderColor dark:before:bg-borderColorDark hover:text-primaryColor dark:hover:text-primaryColor '
            >
              My Skills
            </Link>
          </div>
        </div>
        {/* right side */}
        <div className="relative top-0 sm:-top-24 right-0 sm:translate-y-[-9%] rounded-full lg:order-2">
          <ProfileImg />
          {/* Experience */}
          <ExperienceBadge />
          {/* Project completed */}
          <CompletedProjectBadge />
          <img
            className="absolute dark:invert-[1] dark:opacity-[0.6] w-[221px] h-[211px] top-[-6%] right-[6%] z-[-1] "
            src={shapeOne}
            alt="shape1 for design hero img"
          />
          <img
            className="absolute dark:invert-[1] dark:opacity-[0.6] w-[141px] h-[141px] bottom-[8%] left-[-16%] z-[-1]"
            src={shapeTwo}
            alt="shape2 for design hero img"
          />
          <img
            className="absolute dark:invert-[1] dark:opacity-[0.6] w-[141px] h-[141px] bottom-0 right-[-2%] z-[-1]"
            src={shapeTwo}
            alt="shape3 for design hero img"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
