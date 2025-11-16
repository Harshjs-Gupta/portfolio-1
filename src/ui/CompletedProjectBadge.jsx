import React from "react";
import AnimatedNumbers from "react-animated-numbers";
import { project } from "../Data";

function CompletedProjectBadge() {
  return (
    <div className="uppercase absolute bottom-[5%] right-[0] sm:bottom-[12%] sm:right-[6%] lg:bottom-[5%] border-[3px] border-solid border-borderColor bg-containerColor sm:shadow-[5px_5px_rgba(0,0,0,0.2)] dark:sm:shadow-[5px_5px_rgba(0,0,0,0.3)] shadow-[5px_5px_rgba(0,0,0,0.3)] dark:shadow-[5px_5px_rgba(255,255,255,0.3)] pl-[5px] xs:pl-[10px] sm:pl-[20px] w-auto sm:h-[82px] rounded-[82px] flex items-center z-[1]">
      <span className="w-[30%] text-titleColor font-[700] text-center text-[30px] sm:text-[40px]">
        <AnimatedNumbers
          animateToNumber={project.length}
          locale="en"
          configs={[
            { mass: 1, tension: 220, friction: 100 },
            { mass: 1, tension: 180, friction: 130 },
            { mass: 1, tension: 280, friction: 90 },
            { mass: 1, tension: 180, friction: 135 },
            { mass: 1, tension: 260, friction: 100 },
            { mass: 1, tension: 210, friction: 180 },
          ]}
        />
      </span>

      <span className="ml-[10px] sm:ml-0 text-[10px] sm:text-[15px] leading-[1.5em] font-[700] text-titleColor">
        Completed <span className="text-primaryColor">Projects</span>
      </span>
    </div>
  );
}

export default CompletedProjectBadge;
