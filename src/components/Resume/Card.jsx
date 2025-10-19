import React, { useState } from "react";

const Card = ({ title, subtitle, date, description, category }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="resume__item border-b-[2px] border-b-solid border-b-borderColor dark:border-b-borderColorDark ">
      <div className="resume__header" onClick={() => setShowInfo(!showInfo)}>
        <h3 className="resume__subtitle text-titleColor dark:text-titleColorDark">
          {title}
        </h3>
        <span className="resume__icon dark:bg-titleColorDark dark:text-bgColorDark bg-titleColor text-bgColorAlt">
          {showInfo ? "-" : "+"}
        </span>
      </div>
      <div
        className={`${
          showInfo ? "show-content" : ""
        } resume__content text-titleColor overflow-y-scroll scrollbar-hide dark:text-titleColorDark`}
      >
        <div className="resume__date-title">
          <h3 className="resume__title text-titleColor dark:text-titleColorDark">
            {subtitle}
          </h3>
          <span className="resume__date text-cs text-titleColor dark:text-titleColorDark">
            {date}
          </span>
        </div>

        {category === "experience" ? (
          <div className="resume__desc text-textColor dark:text-textColorDark ">
            {description[0]
              .trim()
              .split("●")
              .filter(Boolean)
              .map((point, i) => (
                <p key={i}>● {point.trim()}</p>
              ))}
          </div>
        ) : (
          <div className="resume__desc text-textColor dark:text-textColorDark">
            <p>{description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
