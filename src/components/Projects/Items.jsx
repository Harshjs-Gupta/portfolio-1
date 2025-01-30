import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import shapeTwo from "../../assets/shape-2.png";
import { motion } from "framer-motion";

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((projectItem) => {
        const { id, img, category, title, description, url, sourceUrl } =
          projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="portfolio__items grid grid-flow-rows-5 bg-containerColor dark:bg-containerColorDark overflow-hidden text-left relative p-[30px] rounded-[20px] border-bgColorDark dark:border-bgColor border-2 border-solid dark:border-2 dark:border-solid"
            key={id}
          >
            <div className="rounded-[18px] overflow-hidden">
              <img
                src={img}
                alt="portfolioImg"
                className="portfolio__img h-[150px] sm:h-[180px] w-full object-cover align-middle transition-all duration-500 ease-[cubic-bezier(0.3,0,0.3,1)] "
              />
            </div>

            <span className="text-primaryColor text-largest font-[700] mb-[5px] block uppercase tracking-[0.05em] mt-[30px]">
              {category}
            </span>
            <h3 className="text-largest text-titleColor dark:text-titleColorDark font-[700]">
              {title}
            </h3>
            <p className="flex my-[30px] text-textColor dark:text-textColorDark">
              {description}
            </p>

            <div className="flex flex-col w-3/5 gap-4">
              <a
                href={url}
                target="_blank"
                rel="noopener"
                className='btn__start flex items-center justify-around w-full text-titleColor dark:text-titleColorDark text-normal gap-2 border-[2px] border-solid border-borderColor dark:border-borderColorDark py-[12px] px-[16px] rounded-[56px] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] shadow-[5px_5px_rgba(0,0,0,0.3)] relative bg-white dark:bg-titleColor before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[1] hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100'
              >
                <span className="z-[1] text-titleColor dark:text-titleColorDark font-[Jost] font-[700]">
                  See&nbsp;
                  <span className="text-primaryColor">Project</span>
                </span>
                <CgWebsite className="z-[2] w-6 h-6 text-titleColor dark:text-titleColorDark" />
              </a>
              <a
                href={sourceUrl}
                target="_blank"
                rel="noopener"
                className='btn__start flex items-center justify-around w-full text-titleColor dark:text-titleColorDark text-normal gap-2 border-[2px] border-solid border-borderColor dark:border-borderColorDark py-[12px] px-[16px] rounded-[56px] dark:shadow-[5px_5px_rgba(255,255,255,0.1)] shadow-[5px_5px_rgba(0,0,0,0.3)] relative bg-white dark:bg-titleColor before:content-[""] before:absolute before:inset-[2px] before:bg-primaryColor before:rounded-[56px] before:scale-[0.3] before:blur-[10px] before:opacity-0 before:transition-all before:duration-[0.6s] before:ease-[cubic-bezier(0.3,0,0.3,1)] before:z-[1] hover:before:scale-[1] hover:before:blur-0 hover:before:opacity-100'
              >
                <span className="z-[1] text-titleColor dark:text-titleColorDark font-[Jost] font-[700]">
                  See&nbsp;
                  <span className="text-primaryColor">Github</span>
                </span>
                <AiFillGithub className="z-[2] w-[26px] h-[26px] text-titleColor dark:text-titleColorDark" />
              </a>
            </div>
            <img
              src={shapeTwo}
              alt="shape for design service cards"
              className="absolute right-[-24px] bottom-[-24px] w-[141px] h-[141px] dark:invert-[1] dark:opacity-[0.6]"
            />
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
