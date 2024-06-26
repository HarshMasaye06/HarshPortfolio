"use client";

import { useSwiper } from "swiper/react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const SliderButtonsCustom = () => {
  const swiper = useSwiper();
  return (
    <div className=" flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none ">
      <button
        className=" bg-accent hover:bg-accent-hover text-primary text-[25px] h-[40px] w-[44px] rounded-[0.25rem] flex justify-center items-center transition-all "
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <MdKeyboardArrowLeft />
      </button>
      <button
        className=" bg-accent hover:bg-accent-hover text-primary text-[25px] h-[40px] w-[44px] rounded-[0.25rem] flex justify-center items-center transition-all "
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <MdKeyboardArrowRight />
      </button>
    </div>
  );
};

export default SliderButtonsCustom;
