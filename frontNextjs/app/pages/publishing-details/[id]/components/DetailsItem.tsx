"use client";
import { FaRegStar, FaStar } from "react-icons/fa6";
import Image from "next/image";
import { Button, Input } from "@nextui-org/react";
import {
  PopularsCat,
  Publishings,
} from "@/app/pages/home/interfaces/publishings";
import Populars from "@/app/pages/home/components/populars_hilo/PopularsGeneralHilo";
import React from "react";

function DetailsItem({
  category,
  subcategory,
  created_at,
  product_name,
  description,
  price,
  stock,
  Owner,
}: Publishings) {
  return (
    <>
      {/* <div className="min-h-screen flex flex-col md:flex-row justify-center items-center dark:text-white  bg-slate-100 dark:bg-black">
        <div>
          <span>{category}/</span>
          <span>{subcategory}</span>
          <h5>
            con estos dos de arriba hagoo el TAbs(de next ui) :
            tecnologia/Subcategoria
          </h5>
          <p>convertir a fecha con daysjs =---{created_at} </p>
          <Image
            src={`http://localhost:8000${publishing.image_1}`}
            fill={true}
            alt="image post"
          />
          <p>nombre del prod: {product_name}</p>
          <p>description: {description}</p>
          <p>precio:{price}</p>
          <p>stock:{stock}</p>
          <h2>El que lo Anuncio:</h2>
          <p>username :{Owner.username}</p>
          <p>tel :{Owner.tel}</p>
          <p>email :{Owner.email}</p>
        </div>
      </div> */}
      <section className="grid md:grid-cols-2 gap-4 h-1/2 bg-gray-100">
        <div className="place-self-center">
          <Image
            src="/img/item_img.jpg"
            alt="producto"
            width={450}
            height={450}
          />
          <div className="flex ">
            <Image
              src="/img/item_img.jpg"
              alt="producto"
              width={150}
              height={150}
            />
            <Image
              src="/img/item_img.jpg"
              alt="producto"
              width={150}
              height={150}
            />
            <Image
              src="/img/item_img.jpg"
              alt="producto"
              width={150}
              height={150}
            />
          </div>
        </div>

        <div className="self-center place-self-center">
          <h1 className="mb-3 text-4xl ">{product_name}</h1>
          <h2 className="mb-3 text-2xl">{description}</h2>
          <div className="flex">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <div className="text-2xl font-bold text-blue-800 dark:text-white mt-8 mb-8">
            ${price}
          </div>
          <form className="flex items-center mb-3">
            <Input
              className="w-24 mr-3"
              type="number"
              placeholder="0"
              labelPlacement="outside"
              startContent={
                <div className="pointer-events-none flex items-center">
                  <span className="text-default-400 text-lg">QTY</span>
                </div>
              }
            />
            <Button color="primary" variant="shadow" size="lg" radius="full">
              ADD TO CART
            </Button>
          </form>
          <p>Promotions: Free shiping on orders over $75</p>
        </div>
      </section>

      <section>{/*  <Populars /> */}</section>
    </>
  );
}

export default DetailsItem;
