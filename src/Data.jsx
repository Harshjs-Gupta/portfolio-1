import ezzyShop from "./assets/ezzyshop.png";
import pixelMind from "./assets/pixelMind1.png";
import chattify from "./assets/chattify.png";
import portfolio from "./assets/portfolio.png";

export const links = [
  {
    name: "Home",
    path: "home",
  },
  {
    name: "Services",
    path: "services",
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

export const skill = [
  {
    id: 1,
    name: "HTML5",
    percentage: 99,
    description:
      "Hypertext Markup Language (HTML) is the standard markup language used to create web pages and web applications.",
  },

  {
    id: 2,
    name: "JavaScript",
    percentage: 90,
    description:
      "JavaScript is a scripting language used for creating dynamic web pages and web applications.",
  },

  {
    id: 3,
    name: "React.js",
    percentage: 85,
    description:
      "A popular JavaScript library for building user interfaces, React is used to create dynamic and responsive web applications.",
  },

  {
    id: 4,
    name: "Next.js",
    percentage: 75,
    description:
      "Next.js is a React-based framework for building server-side rendered and statically generated web applications.",
  },

  {
    id: 5,
    name: "TypeScript",
    percentage: 75,
    description:
      "TypeScript is a superset of JavaScript that adds optional static typing and other features to the language.",
  },

  {
    id: 6,
    name: "Tailwind CSS",
    percentage: 80,
    description:
      "Tailwind CSS is a utility-first CSS framework that provides developers with a set of pre-built CSS classes for styling web applications.",
  },

  {
    id: 7,
    name: "Git",
    percentage: 80,
    description:
      "Git is a widely used version control system that is essential for collaborative development and project management. ",
  },
  {
    id: 8,
    name: "RESTful API",
    percentage: 90,
    description:
      "RESTful API is an interface that two computer systems use to exchange information securely over the internet.",
  },

  {
    id: 9,
    name: "Sass",
    percentage: 75,
    description:
      "Sass is a CSS preprocessor that allows developers to write CSS in a more concise and structured way.",
  },

  {
    id: 10,
    name: "Framer Motion",
    percentage: 85,
    description:
      "Framer Motion is a popular Animation library that provides developers a lost of animations and transitions to enhance the user experience.",
  },

  {
    id: 11,
    name: "Redux",
    percentage: 80,
    description:
      "Redux is a predictable state container for JavaScript apps, used to manage the state of complex applications.",
  },

  {
    id: 12,
    name: "Zustand",
    percentage: 85,
    description:
      "Zustand is a small, fast and scalable status management solution. Its state management is centralized and action-based.",
  },
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
    url: "http://imankhaki.netlify.app/",
    sourceUrl: "https://github.com/khakiiman/portfolio",
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

  {
    id: 5,
    title: "Fresher",
    subtitle: "Frontend Developer",
    date: "2022 - PRESENT",
    description:
      " I am currently working as a frontend developer, where I am responsible for developing and maintaining websites using React.js, Next.js, and other frontend technologies.",
    category: "experience",
  },

  {
    id: 6,
    title: "Coming Soon...",
    subtitle: "Coming Soon...",
    date: "000 - 0000",
    description: "Coming Soon....",
    category: "experience",
  },

  {
    id: 7,
    title: "Coming Soon...",
    subtitle: "Coming Soon...",
    date: "000 - 0000",
    description: "Coming Soon....",
    category: "experience",
  },

  {
    id: 8,
    title: "Coming Soon...",
    subtitle: "Coming Soon...",
    date: "000 - 0000",
    description: "Coming Soon....",
    category: "experience",
  },
];
