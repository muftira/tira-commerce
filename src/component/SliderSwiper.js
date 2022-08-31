import React, { useRef, useState } from "react";
import { dataSlider } from "./dataSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../../src/style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

SwiperCore.use([Autoplay])

export default function SliderSwiper() {
  return (
    <>
      <Swiper
        cssMode={true}
        autoplay={{delay : 5000}}
        slidesPerView={"auto"}
        navigation={false}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        loop={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {dataSlider.map((slide, index) => <SwiperSlide>
            <img src={slide.img} alt="" />
        </SwiperSlide>)}
      </Swiper>
    </>
  );
}
