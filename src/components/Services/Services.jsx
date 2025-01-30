import React from "react";
import { service } from "../../Data";
import { FaArrowRight } from "react-icons/fa";
import shapeTwo from "../../assets/shape-2.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";

import "./Services.css";

const Services = () => {
  SwiperCore.use([Autoplay]);
  return (
    <section
      className="pb-[50px] sm:pb-[220px] bg-gradient-180 from-bgColorAlt to-bgColor dark:bg-gradient-180 dark:from-bgColorDark dark:bg-bgColorAltDark px-[5%] sm:px-[4.5%] 2xl:px-[17%]"
      id="services"
    >
      <h2 className="uppercase tracking-[0.05em] text-[34px] sm:text-h1Size font-[700] text-center text-titleColor dark:text-titleColorDark ">
        What i do
      </h2>
      <p className="leading-[1.7] text-primaryColor uppercase text-smaller font-[700] mb-[60px] text-center">
        My
        <span className="font-[Caveat] text-titleColor dark:text-titleColorDark text-h3Size capitalize ml-[10px]">
          Services
        </span>
      </p>

      <Swiper
        className="text-center mySwiper"
        modules={[Autoplay, Pagination]}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          reverseDirection: true,
        }}
        spaceBetween={40}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          540: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }}
      >
        {service.map(({ name, title, description }, index) => {
          return (
            <SwiperSlide
              className="bg-containerColor border-bgColorDark border-2 border-solid dark:bg-containerColorDark dark:border-textColorDark dark:border-2 dark:border-solid py-[30px] px-[35px] rounded-[18px] overflow-hidden text-left"
              key={index}
            >
              <span className="uppercase tracking-[0.05em] text-titleColor dark:text-titleColorDark text-h5Size font-[700] mb-[65px] block">
                {name}
              </span>
              <h3 className="text-h5Size text-titleColor dark:text-titleColorDark mb-[15px] font-[700]">
                {title}
              </h3>
              <p className="min-h-[205px] sm:min-h-[175px] text-textColor dark:text-textColorDark">
                {description}
              </p>
              <img
                src={shapeTwo}
                alt="shape for design service cards"
                className="absolute right-[-24px] bottom-[-24px] w-[141px] h-[141px] dark:opacity-[0.6] dark:invert-[1]"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Services;
