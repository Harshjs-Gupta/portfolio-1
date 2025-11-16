import React, { useState } from "react";

const List = ({ list, filterItems }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex justify-center overflow-x-scroll overflow-y-hidden scrollbar-hide gap-[20px] sm:gap-[40px] mb-[60px]">
      {list.map((category, index) => {
        return (
          <button
            className={`${
              active === index
                ? 'text-primaryColor before:w-[40px] text-[8px] sm:text-large font-[700] relative transition-all duration-700 ease-[cubic-bezier(0.3,0,0.3,1)] uppercase tracking-[0.05em] before:content-[""] before:h-[2px] before:max-w-[60%] before:bg-primaryColor before:absolute before:bottom-[-12px] before:left-0 before:transition-all before:duration-[400ms] before:ease-[cubic-bezier(0.3,0,0.3,1)] hover:before:w-[40px]'
                : 'text-titleColor dark:text-titleColorDark text-tiny sm:text-large font-[700] relative transition-all duration-700 ease-[cubic-bezier(0.3,0,0.3,1)] uppercase tracking-[0.05em] before:content-[""]before:w-[0px] before:h-[2px] before:max-w-[60%] before:bg-primaryColor before:absolute before:bottom-[-12px] before:left-0 before:transition-all before:duration-[400ms] before:ease-[cubic-bezier(0.3,0,0.3,1)] hover:before:w-[40px]'
            }`}
            key={index}
            onClick={() => {
              setActive(index);
              filterItems(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default List;
