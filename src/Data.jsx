import ezzyShop from "./assets/ezzyshop.png";
import morphomind from "./assets/morphomind.png";
import pixelMind from "./assets/pixelMind1.png";
import chattify from "./assets/chattify.png";
import portfolio from "./assets/portfolio.png";
import dental from "./assets/dental.png";
import vibeshift from "./assets/vibeshift.png";
import html from "../public/html.svg";
import css from "../public/css.svg";
import tailwind from "../public/tailwind.svg";
import JavaScript from "../public/javascript.svg";
import next from "../public/next.svg";
import gsap from "../public/gsap.svg";
import react from "../public/react.svg";
import sass from "../public/sass.svg";
import git from "../public/git.svg";
import github from "../public/github.svg";
import redux from "../public/redux.svg";
import figma from "../public/figma.svg";
import jira from "../public/jira.svg";
import typescript from "../public/typescript1.svg";
import postman from "../public/postman.svg";

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
    name: "JavaScript",
    svg: JavaScript,
  },
  {
    id: 2,
    name: "TypeScript",
    svg: typescript,
  },

  {
    id: 3,
    name: "React.js",
    svg: react,
  },

  {
    id: 4,
    name: "Next.js",
    svg: next,
  },

  {
    id: 5,
    name: "Tailwind",
    svg: tailwind,
  },

  {
    id: 6,
    name: "Sass",
    svg: sass,
  },
  {
    id: 7,
    name: "Redux",
    svg: redux,
  },

  {
    id: 8,
    name: "GSAP",
    svg: gsap,
  },
  {
    id: 9,
    name: "HTML5",
    svg: html,
  },
  {
    id: 10,
    name: "CSS3",
    svg: css,
  },
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
    id: 1,
    name: "Git",
    svg: git,
  },
  {
    id: 2,
    name: "Github",
    svg: github,
  },
  {
    id: 3,
    name: "Jira",
    svg: jira,
  },
  {
    id: 4,
    name: "Postman",
    svg: postman,
  },
];

export const project = [
  {
    id: 1,
    img: portfolio,
    category: "Portfolio",
    title: "Developer Portfolio",
    description:
      "This Portfolio involves creating a visually appealing and user-friendly website that showcases the skills and portfolio of a frontend developer.",
    url: "hhttps://harsh-gupta-portfolio-dev.vercel.app/#projects",
    sourceUrl: "https://github.com/Harshjs-Gupta/portfolio-1",
  },
  {
    id: 2,
    img: pixelMind,
    category: "Landing",
    title: "PixelMind",
    description:
      "PixelMind is a landing page designed for removing the background of images. Here you can upload images and also enter image url it remove their background using AI technology and you also Download images.",
    url: "https://pixel-mind-dev.vercel.app/",
    sourceUrl: "https://github.com/Harshjs-Gupta/PixelMind",
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
    img: morphomind,
    category: "AI Featured",
    title: "Morpho Mind",
    description: `A multi-modal AI web application that allows users to generate text, images, and videos from prompts using advanced generative models, providing a seamless creative experience.`,
    url: "https://morpho-mind.vercel.app/",
    sourceUrl: "https://github.com/Harshjs-Gupta/MorphoMind",
  },
  {
    id: 5,
    img: chattify,
    category: "Chattify",
    title: "Chatting site",
    description:
      "Chattify is a chatting site where you can chat with your friends and family members. Here you can create your own room and chat with your friends.",
    url: "https://chattify2.vercel.app/",
    sourceUrl: "https://github.com/Harshjs-Gupta/Chattify2",
  },
  {
    id: 6,
    img: vibeshift,
    category: "VibeShift",
    title: "Mood Based UI",
    description:
      "A fun project to experiment with face detection technology in UI. It changes the UI based on the user's emotions.",
    url: "https://vibe-shift.vercel.app",
    sourceUrl: "https://github.com/Harshjs-Gupta/VibeShift",
  },
  {
    id: 7,
    img: dental,
    category: "Dental Clinic",
    title: "Dental Clinic Website",
    description:
      "It is a website for dental clinic where you see the type of dental treatment and also see the doctors and their details and book an appointment.",
    url: "https://sakthi-dental-clinic.vercel.app/",
    sourceUrl: "https://github.com/Harshjs-Gupta/Sakthi-Dental-Clinic",
  },
];

export const cv = [
  {
    id: 1,
    title: "Manipal University Jaipur",
    subtitle: "BCA. (Bachelor of Computer Application)",
    date: "2022 - 2025",
    description:
      "I completed my Bachelor of Computer Application at Manipal University Jaipur, where I studied programming, web development, and software engineering",
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
    title: "D.A.V Public Shool Kusunda",
    subtitle: "High School ",
    date: "2015 - 2022",
    description:
      "I completed my high school education at D.A.V Public School Kusunda, where I studied science and mathematics.",
    category: "education",
  },

  {
    id: 4,
    title: "Udemy Online Courses",
    subtitle: "Web Development and Frontend Development",
    date: "2022 - PRESENT",
    description:
      "I have completed several online courses on web development and design, including courses on React.js, Next.js, and JavaScript.",
    category: "education",
  },
  {
    id: 5,
    title: "Internship at Foxmula",
    subtitle: "Frontend Developer",
    date: "Nov 2024 - PRESENT",
    description: [
      `● Developed pixel-perfect, responsive web pages and reusable generic components from Figma designs, enhancing
UI/UX quality and accelerating the team’s development speed by enabling code reusability. 
● Collaborated closely with the backend team to integrate internal REST APIs and third-party services like Razorpay,
improving system reliability and reducing API response time by 20%.
● Participated in an Agile development environment using Jira for sprint planning and GitHub for version control, which
improved task tracking efficiency and reduced development cycle time.
● Tech Stack: React.js, Redux, Axios, SCSS, Context APIs, Material UI other npm packages.
`,
    ],
    category: "experience",
  },
];
