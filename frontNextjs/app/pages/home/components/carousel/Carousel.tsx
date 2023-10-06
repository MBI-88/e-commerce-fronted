"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import styles from "./styles/carousel.module.css";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import images from "./images";

const Carousel = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    // <div className="max-w-md my-0 mx-auto">
    <div className="w-full md:col-span-3 mb-8 md:mb-0  ">
     {/* <div> */}
     <Swiper
        className="h-80 w-full"
        // style={{
        //   '--swiper-navigation-color': '#fff',
        //   '--swiper-pagination-color': '#fff',
        // }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        <SwiperSlide>
          {images.map((img) => (
            <img
              key={img.alt}
              className="block object-cover w-full h-full"
              // width={800}
              // height={200}
              alt={img.alt}
              src={img.src}
            />
          ))}
        </SwiperSlide>
      </Swiper>

      <Swiper
        //   onSwiper={(swiper) => {
        //     swiperRef.current = swiper
        // }}
        className="h-20 box-border py-2  bg-black"
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {images.map((img) => (
          <SwiperSlide key={img.alt}>
            <img
              className="block object-cover w-full h-full"
              alt={img.alt}
              src={img.src}
            />
          </SwiperSlide>
        ))}
      </Swiper>
     </div>
    // </div>
  );
};

export default Carousel;
