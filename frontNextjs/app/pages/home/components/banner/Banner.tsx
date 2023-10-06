"use client";

// import style from "./styles/banner.module.css";

import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [timeLeft, setTimeLeft] = useState(3600); // 3600 segundos (1 hora)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [timeLeft]);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <section
      className="bg-cover bg-center bg-slate-200 dark:bg-gray-700 mt-4 relative"
      style={{
        backgroundImage:
          'url("https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png")',
      }}
    >
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        {/* parte izquierda (textos) */}
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Herramienta de pagos para empresas de software
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Desde el proceso de pago hasta la conformidad tributaria global, las empresas de todo el mundo utilizan Flowbite para simplificar su gestión de pagos.
          </p>
          <div className="flex flex-col lg:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 mb-3 lg:mb-0 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Empezar
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white rounded-lg bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 ml-0 lg:ml-3"
            >
              Hablar de Ventas
            </a>
          </div>
        </div>

        {/* parte derecha(imagen) */}
        <div className="hidden lg:block lg:col-span-5 lg:flex">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
          />
        </div>

        {/* Contador de tiempo de oferta */}
        <div className="absolute bottom-0 left-0 right-0 text-center p-4 bg-white text-black bg-opacity-75 lg:static lg:mt-0 lg:col-span-5 lg:flex lg:items-center lg:justify-end">
          <p className="text-xl font-semibold">
            Oferta termina en: {hours} horas {minutes} minutos {seconds} segundos
          </p>
        </div>
      </div>
    </section>
  );
};

export default Banner;
