import React, { InputHTMLAttributes } from "react";
import {
  FieldValues,
  UseFormRegister,
  // useForm, // don't need this import
} from "react-hook-form";


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
 
  register: UseFormRegister<FieldValues>; // declare register props
}


function TechnologyFields({ register }: InputProps) {
  return (
    <>
    {/* OS */}
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Sistema Operativo
        </label>
        <input
          type="text"
          id="os"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Sistema operativo"
          {...register("os", {
            // required: true,
          })}
        />
      </div>
      {/* stock */}
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        stock
        </label>
        <input
          type="number"
          id="stock"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="$2999"
          {...register("stock", {
            // required: true,
          })}
        />
      </div>
      {/* ram */}
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        ram
        </label>
        <input
          type="number"
          id="ram"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="4"
          {...register("ram", {
            // required: true,
          })}
        />
      </div>
      {/* store */}
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        store
        </label>
        <input
          type="number"
          id="store"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="123"
          {...register("store", {
            // required: true,
          })}
        />
      </div>
      {/* screen */}
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        screen 
        </label>
        <input
          type="number"
          id="screen"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="120"
          {...register("screen", {
            // required: true,
          })}
        />
      </div>
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        resolution 
        </label>
        <input
          type="text"
          id="resolution"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="20px"
          {...register("resolution", {
            // required: true,
          })}
        />
      </div>
      {/* gpu */}
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        gpu
        </label>
        <input
          type="text"
          id="gpu"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="gpu"
          {...register("gpu", {
            // required: true,
          })}
        />
      </div>
      {/* micro */}
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        micro
        </label>
        <input
          type="text"
          id="micro"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="i5 6ta"
          {...register("micro", {
            // required: true,
          })}
        />
        {/* long */}
      </div>
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
       long
        </label>
        <input
          type="number"
          id="long"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="long"
          {...register("long", {
            // required: true,
          })}
        />
      </div>
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        width
        </label>
        <input
          type="number"
          id="width"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="44"
          {...register("width", {
            // required: true,
          })}
        />
      </div>
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        height
        </label>
        <input
          type="number"
          id="height"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="40"
          {...register("height", {
            // required: true,
          })}
        />
      </div>
      <div className="w-full">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        weight
        </label>
        <input
          type="number"
          id="weight"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="20"
          {...register("weight", {
            // required: true,
          })}
        />
      </div>
      
    </>
  );
}

export default TechnologyFields;


// in_offer


