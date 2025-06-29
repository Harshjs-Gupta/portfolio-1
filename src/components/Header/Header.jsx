import React, { useState, useEffect } from "react";
import { links } from "../../Data";
import { Link, animateScroll } from "react-scroll";
import { scrollToTop } from "react-scroll/modules/mixins/animate-scroll";

import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsMoon, BsSun } from "react-icons/bs";

import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  // const [theme, setTheme] = useState('light-theme');

  const scrollTop = () => {
    animateScroll.scrollToTop();
  };

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", showMenu);
  }, [showMenu]);

  // Icons
  const sunIcon = document.querySelector(".sun");
  const moonIcon = document.querySelector(".moon");

  //Theme Vars
  const userTheme = localStorage.getItem("theme");
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

  // Icon Toggling
  const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
  };

  // Initial Theme check
  const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
      document.documentElement.classList.add("dark");
      // moonIcon.classList.add('display-none');
      return;
    }
    // sunIcon.classList.add('display-none');
  };

  // Manual Theme Switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      iconToggle();
      return;
    }

    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
  };

  // call theme switch on clicking buttons
  // sunIcon.addEventListener('click', () => {themeSwitch()});
  // moonIcon.addEventListener('click', () => {themeSwitch()});

  // invoke theme check on in initial load
  themeCheck();

  return (
    <header
      className={`${
        scrollNav ? "scroll-header" : ""
      } header bg-bgColor dark:bg-bgColorDark`}
    >
      <nav className="nav">
        <Link
          to="/"
          onClick={scrollTop}
          className="nav__logo capitalize tracking-[0.05em] dark:text-titleColorDark text-titleColor"
        >
          My Portfolio
        </Link>
        <div
          className={`${
            showMenu ? "nav__menu show-menu" : "nav__menu"
          } bg-bgColor dark:bg-bgColorDark `}
        >
          <div className="nav__data">
            {/* Menu Items */}
            <ul className="nav__list">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav__item" key={index}>
                    <Link
                      className={`${
                        document.documentElement.classList.contains("dark")
                          ? "nav__link__dark"
                          : "nav__link"
                      } uppercase tracking-[0.05em]`}
                      to={path}
                      spy={true}
                      hashSpy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setShowMenu(!showMenu)}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            {/* Menu Social Buttons */}
            <div className="flex gap-[20px] mb-[30px] ">
              <a
                href="https://x.com/harshgupta_js"
                className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-titleColorDark dark:hover:text-primaryColor hover:animate-bounce"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com/in/harsh-gupta-js/"
                className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-titleColorDark dark:hover:text-primaryColor hover:animate-bounce"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/Harshjs-Gupta"
                className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-titleColorDark dark:hover:text-primaryColor hover:animate-bounce"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        <div className="nav__btns">
          <div className="theme_toggler text-textColor dark:text-textColorDark">
            <BsMoon
              className="w-5 h-5 cursor-pointer moon"
              id="moon"
              onClick={() => {
                themeSwitch();
              }}
            />
            <BsSun
              className="w-5 h-5 cursor-pointer sun display-none"
              id="sun"
              onClick={() => {
                themeSwitch();
              }}
            />
          </div>

          <div
            className={`${
              showMenu ? "nav__toggle animate-toggle" : "nav__toggle"
            }  `}
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="bg-textColor dark:bg-textColorDark"></span>
            <span className="bg-textColor dark:bg-textColorDark"></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
