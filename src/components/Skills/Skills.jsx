import React from "react";
import { feSkills, userInterface, tools } from "../../Data";

const Skills = () => {
  return (
    <section
      className="pb-[220px] pt-4 bg-gradient-180 from-bgColor to-bgColor dark:bg-gradient-180 dark:from-bgColorAltDark dark:to-bgColorAltDark sm:px-[5%] 2xl:px-[17%]"
      id="skills"
    >
      <h2 className="uppercase pb-5 tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-titleColor dark:text-titleColorDark text-center">
        My Skills
      </h2>
      <div className="flex flex-col gap-3">
        <span className="font-semibold uppercase">Frontend Development</span>
        <div className="flex flex-wrap gap-3">
          {feSkills.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-2 p-2 rounded-lg bg-bgColorAlt dark:bg-bgColorAltDark"
            >
              <span className="text-sm font-semibold">{item.name}</span>
              {item.svg ? (
                <img src={item.svg} alt={item.name} className="w-20 h-20" />
              ) : (
                <div className="w-6 h-6 bg-[#f7df1e] rounded-full"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-10">
        <div className="flex flex-col gap-3 pt-10">
          <span className="font-semibold uppercase">User Interface</span>
          <div className="flex flex-wrap gap-3">
            {userInterface.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center gap-2 p-2 rounded-lg bg-bgColorAlt dark:bg-bgColorAltDark"
              >
                <span className="text-sm font-semibold">{item.name}</span>
                {item.svg ? (
                  <img src={item.svg} alt={item.name} className="w-20 h-20" />
                ) : (
                  <div className="w-6 h-6 bg-[#f7df1e] rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-10">
          <span className="font-semibold uppercase">Other Skills</span>
          <div className="flex flex-wrap gap-3">
            {tools.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center gap-2 p-2 rounded-lg bg-bgColorAlt dark:bg-bgColorAltDark"
              >
                <span className="text-sm font-semibold">{item.name}</span>
                {item.svg ? (
                  <img src={item.svg} alt={item.name} className="w-20 h-20 " />
                ) : (
                  <div className="w-6 h-6 bg-[#f7df1e] text-[#0361a069] rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
