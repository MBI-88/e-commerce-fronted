"use client";
import style from "./styles/sponsor.module.css";
import React from "react";
import Marquee from "react-fast-marquee";

const Hilo = () => {
  return (
    <div className="h-12 bg-blue-600 w-full flex justify-center">
      <Marquee>
        <div className="flex items-center gap-x-36 text-xl  font-300 text-white">
          <span>
            {" "}
            Feliz día de las <span className="italic">
              Madres &hearts;
            </span>{" "}
          </span>
          <span className="font-bold  ">
            <span>&#9734;</span>OFERTAS ESPECIALES<span>&#9734;</span>
          </span>
          <span>Gastronomía</span>
          <span>Música y Sorpresas</span>
          <br />
          <br />
        </div>
      </Marquee>
    </div>
  );
};

export default Hilo;
