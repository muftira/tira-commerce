import React, { useState } from "react";
import { dataSlider } from "./dataSlider";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function Slider() {
  const [current, setCurrent] = useState(0);
  const length = dataSlider.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  if (!Array.isArray(dataSlider) || dataSlider.length <= 0) {
    return null;
  }

  const moveDot = (index) => {
    setCurrent(index)
  }
//   setTimeout(() => {
//     if(current === length - 1) {
//         setCurrent(0)
//     } else {
//         setCurrent(current + 1)
//     }
//   }, 5000);
  return (
    <div className="w-full flex justify-center items-center overflow-hidden relative cursor-pointer">
      <AiOutlineLeft
        className="absolute left-0 top-[50%] cursor-pointer sm:text-[30px] text-[10px]"
        color="white"
        
        onClick={prevSlide}
      />
      <AiOutlineRight
        className="absolute right-0 top-[50%] cursor-pointer sm:text-[30px] text-[10px]"
        color="white"
        
        onClick={nextSlide}
      />
      <div className="flex w-full absolute justify-center items-center bottom-[10%] space-x-2">
      {Array.from({ length: 2 }).map((item, index) => (
        <div
        onClick={() => moveDot(index)}
          className={
            current === index
              ? "sm:w-[10px] sm:h-[10px] w-[5px] h-[5px] rounded-full bg-button"
              : "sm:w-[10px] sm:h-[10px] w-[5px] h-[5px] rounded-full bg-white"
          }
        ></div>
      ))}
      </div>
      {dataSlider.map((slide, idx) => {
        return (
          <div key={idx}>
            {idx === current && (
              <img className="w-full" src={slide.img} alt="" />
            )}
          </div>
        );
      })}
      
      
    </div>
  );
}

export default Slider;
