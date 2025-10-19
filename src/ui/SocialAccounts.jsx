import { FaGithub, FaLinkedin, FaMedium, FaTwitter } from "react-icons/fa";

function SocialAccounts() {
  return (
    <div className="flex gap-[20px] mb-[30px] ">
      <a
        href="https://x.com/harshgupta_js"
        target="_blank"
        className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-titleColorDark dark:hover:text-primaryColor hover:animate-bounce"
      >
        <FaTwitter />
      </a>
      <a
        href="https://www.linkedin.com/in/harsh-gupta-js/"
        target="_blank"
        className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-titleColorDark dark:hover:text-primaryColor hover:animate-bounce"
      >
        <FaLinkedin />
      </a>

      <a
        href="https://github.com/Harshjs-Gupta"
        target="_blank"
        className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-titleColorDark dark:hover:text-primaryColor hover:animate-bounce"
      >
        <FaGithub />
      </a>
      <a
        href="https://medium.com/@harsh-gupta-js"
        target="_blank"
        className="text-titleColor text-h5Size transition-all duration-75 ease-[cubic-bezier(0.3,0,0.3,1)] hover:text-primaryColor dark:text-textColorDark dark:hover:text-primaryColor hover:animate-bounce"
      >
        <FaMedium />
      </a>
    </div>
  );
}
export default SocialAccounts;
