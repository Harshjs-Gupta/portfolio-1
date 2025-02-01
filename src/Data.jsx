import ezzyShop from "./assets/ezzyshop.png";
import pixelMind from "./assets/pixelMind1.png";
import chattify from "./assets/chattify.png";
import portfolio from "./assets/portfolio.png";
import html from "../public/html.svg";
import css from "../public/css.svg";
import tailwind from "../public/tailwind.svg";
import JavaScript from "../public/javascript.svg";
import next from "../public/next.svg";
import gsap from "../public/gsap.svg";
import react from "../public/react.svg";
import sass from "../public/sass.svg";
import git from "../public/git.svg";
import redux from "../public/redux.svg";
import figma from "../public/figma.svg";
import typescript from "../public/typescript1.svg";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Skills",
    path: "skills",
  },
  {
    name: "Projects",
    path: "projects",
  },
  {
    name: "Resume",
    path: "resume",
  },
  {
    name: "Contact",
    path: "contact",
  },
];

export const service = [
  {
    id: 1,
    name: "Web Development",
    title: "Custom Development",
    description:
      "I can develop custom websites using the latest frontend technologies, such as React.js, Next.js, and JavaScript, to create fast and dynamic websites.",
  },
  {
    id: 2,
    name: "User Experience",
    title: "User Experience Design",
    description:
      "I can design user experiences that are intuitive, easy to use, and visually appealing, so your customers will keep coming back.",
  },
  {
    id: 3,
    name: "Web Optimization",
    title: "Speed Optimization",
    description:
      " I can optimize speed and performance of your website, so it loads quickly and efficiently, which can improve your search engine rankings and keep your customers engaged.",
  },
  {
    id: 4,
    name: "Web Maintenance",
    title: "Maintenance and Support",
    description:
      "I can provide ongoing maintenance and support for your website, including bug fixes, security updates, and content updates, so you can focus on growing your business.",
  },
  {
    id: 5,
    name: "Interactive Effects",
    title: "Animations and Effects",
    description:
      "Animations and interactive effects can make your website more engaging and memorable. I can create custom animations and effects using CSS, framer-motion and three.js to bring your website to life.",
  },
];

export const feSkills = [
  {
    id: 1,
    name: "HTML5",
    svg: html,
  },
  {
    id: 2,
    name: "CSS3",
    svg: css,
  },

  {
    id: 3,
    name: "JavaScript",
    svg: JavaScript,
  },

  {
    id: 4,
    name: "React.js",
    svg: react,
  },

  {
    id: 5,
    name: "Next.js",
    svg: next,
  },

  {
    id: 6,
    name: "Tailwind CSS",
    svg: tailwind,
  },

  {
    id: 7,
    name: "Git",
    svg: git,
  },

  {
    id: 8,
    name: "Sass",
    svg: sass,
  },

  {
    id: 9,
    name: "Redux",
    svg: redux,
  },
  // {
  //   id: 6,
  //   name: "TypeScript",
  //   svg: typescript,
  // },
];

export const userInterface = [
  {
    id: 1,
    name: "Figma",
    svg: figma,
  },
];

export const tools = [
  {
    id: 2,
    name: "Git",
    svg: git,
  },
  // {
  //   id: 1,
  //   name: "Visual Studio Code",
  //   // svg: vsCode
  // },
  // {
  //   id: 3,
  //   name: "Github",
  //   svg: github,
  // },
];

export const project = [
  {
    id: 1,
    img: pixelMind,
    category: "Landing",
    title: "PixelMind",
    description:
      "PixelMind is a landing page designed for removing the background of images. Here you can upload images and also enter image url it remove their background using AI technology and you also Download images.",
    url: "https://pixel-mind-dev.vercel.app/",
    sourceUrl: "https://github.com/Harshjs-Gupta/PixelMind",
  },

  {
    id: 2,
    img: portfolio,
    category: "Portfolio",
    title: "Developer Portfolio",
    description:
      "This Portfolio involves creating a visually appealing and user-friendly website that showcases the skills and portfolio of a frontend developer.",
    url: "hhttps://harsh-gupta-portfolio-dev.vercel.app/#projects",
    sourceUrl: "https://github.com/Harshjs-Gupta/portfolio-1",
  },

  {
    id: 3,
    img: ezzyShop,
    category: "Ecommerce",
    title: "EzzyShop",
    description:
      "EzzyShop is an e-commerce landing page designed for showcasing and promoting all products and services. Here you search aal products and add them into cart and buy them using dummy payment system.",
    url: "https://ezzy-shop-eight.vercel.app/",
    sourceUrl: "https://github.com/Harshjs-Gupta/EzzyShop",
  },

  {
    id: 4,
    img: chattify,
    category: "Chattify",
    title: "Chatting site",
    description:
      "Chattify is a chatting site where you can chat with your friends and family members. Here you can create your own room and chat with your friends.",
    url: "https://chattify2.vercel.app/",
    sourceUrl: "https://github.com/Harshjs-Gupta/Chattify2",
  },
];

export const cv = [
  {
    id: 1,
    title: "D.A.V Public Shool Kusunda",
    subtitle: "High School ",
    date: "2015 - 2022",
    description:
      "I completed my high school education at D.A.V Public School Kusunda, where I studied science and mathematics.",
    category: "education",
  },

  {
    id: 2,
    title: "D.A.V Public Shool Kusunda",
    subtitle: "+2 Commerce",
    date: "2020 - 2022",
    description:
      "I completed my +2 Commerce education at D.A.V Public School Kusunda, where I studied accounting, economics, and business studies.",
    category: "education",
  },

  {
    id: 3,
    title: "Manipal University Jaipur",
    subtitle: "BCA. (Bachelor of Computer Application)",
    date: "2022 - 2025",
    description:
      "I am currently pursuing a Bachelor of Computer Application at Manipal University Jaipur, where I am studying programming, web development, and software engineering",
    category: "education",
  },

  {
    id: 4,
    title: "Udemy Online Courses",
    subtitle: "Web Development and Design",
    date: "2022 - PRESENT",
    description:
      "I have completed several online courses on web development and design, including courses on React.js, Next.js, and JavaScript.",
    category: "education",
  },
];
