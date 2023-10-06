import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

// import './styles.css';
import styles from "./styles/effectCube.module.css";

// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import images from "./images";

export default function App() {
  return (
    <div className="mt-44">
      <h2 className="text-center font-bold mb-14 text-2xl">
        Vendendores mas Populares
      </h2>
      <div>
        <Swiper
          effect={"cube"}
          grabCursor={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          watchSlidesProgress={true}
          pagination={true}
          autoplay={true}
          modules={[EffectCube, Pagination, Autoplay]}
          // autoplay={{
          //   delay: 3000,

          // }}
          className={styles.swiper}
        >
          {images.map((img) => (
            <SwiperSlide key={img.alt}>
              <img src={img.src} alt={img.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
