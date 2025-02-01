import React from "react";
import Card from "./Card";
import { cv } from "../../Data";

import "./Resume.css";

const Resume = () => {
  return (
    <section
      className="pb-[220px] bg-gradient-0 dark:bg-gradient-0 dark:from-bgColorAltDark dark:to-bgColorDark from-bgColor to-bgColor px-[10%] sm:px-[8%] 2xl:px-[17%]"
      id="resume"
    >
      <h2 className="uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center">
        Resume
      </h2>
      <p className="leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center">
        My
        <span className="font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]">
          Story
        </span>
      </p>

      <div className="grid gap-16 md:grid-cols-2">
        <div className="resume__group">
          <h3 className="text-center text-h4Size border-b-[2px] border-b-solid text-titleColor dark:text-titleColorDark border-b-borderColor dark:border-b-borderColorDark pb-[30px]">
            Education & Certificate
          </h3>
          <div className="resume__items">
            {cv.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div>
        {/* <div className='resume__group'>
          <h3 className='text-center text-h4Size border-b-[2px] border-b-solid text-titleColor dark:text-titleColorDark border-b-borderColor dark:border-b-borderColorDark pb-[30px]'>
            Experience
          </h3>
          <div className='resume__items'>
            {cv.map((val, id) => {
              if (val.category === 'experience') {
                return (
                  <Card
                    key={id}
                    title={val.title}
                    subtitle={val.subtitle}
                    date={val.date}
                    description={val.description}
                  />
                );
              }
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Resume;
