"use client";
import React, { useRef, useState } from "react";
import CATEGORIES from "../helpers/categories";
import { useForm, SubmitHandler } from "react-hook-form";
// import { FormAddPost } from "../interfaces/formAddPost";
import TechnologyFields from "./TechnologyFields";
import FashionFields from "./FashionFields";
import ServicesFields from "./ServicesFields";
import { useAuthStore } from "@/app/store/auth";
import { AddPost } from "../services/serviceAddPost";
import { useRouter } from "next/navigation";
import { Button, Spinner } from "@nextui-org/react";
import { Form } from "../../(auth)/signup/interfaces/signup";

function AddForm() {




  
  const router = useRouter();

  const profile = useAuthStore((state) => state.profile);
  const isAuth = useAuthStore((state) => state.isAuth);

  const token = useAuthStore((state) => state.token);

  console.log(token);

  // console.log(profile);
  const userId = profile?.user_id;
  console.log("userId:", userId);

  const [isLoading, setIsLoading] = useState(false);
  //?imagen
  const [images, setImages] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedImages = e.target.files;
    if (selectedImages) {
      setImages((prevImages) => [...prevImages, ...Array.from(selectedImages)]);
    }
  };

  const handleRemoveImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  const handleClickFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  //!hook form
  const {
    handleSubmit,
    register,
    getValues,
    watch,
    formState: { errors },
  } = useForm();

  //! usar esto desp para configurar valores iniciales para los campos : defaultValue

  const selectedCategory = watch("category");
  // const os = watch("os");
  // console.log(os);









  //   //? SUBMIT
  const onSubmit = async (data: any, token: string) => {
    const fields: Record<string, any> = {
      product_name: data.product_name,
      userId: profile?.user_id,
      brand: data.brand,
      price: data.price,
      category: data.category,
      subcategory: data.subcategory,
      description: data.description,
      os: data.os,
      stock: data.stock,
      ram: data.ram,
      store: data.store,
      screen: data.screen,
      resolution: data.resolution,
      gpu: data.gpu,
      micro: data.micro,
      long: data.long,
      width: data.width,
      height: data.height,
      weight: data.weight,
    };

    const formData = new FormData();

    for (const key in fields) {
      if (fields.hasOwnProperty(key)) {
        const value = fields[key];
        console.log(`Agregando campo ${key}:`, value);
        formData.append(key, value);
      }
    }

    try {
      setIsLoading(true);
      const res = await AddPost(formData, token);
      console.log(res);
      //alerta exito

      //redirigir
      // router.push("/layout-publishings");
    } catch (error) {
      console.log(error);
      // alertError(error)
    } finally {
      setIsLoading(false);
    }
  };
  //? FIN DE FUNCION SUBMIT









  return (
    <section className="bg-white dark:bg-gray-900 min-h-screen">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Nuevo Anuncio
        </h2>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {/* PRODUCT  NAME */}
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product Name
              </label>
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type product name"
                {...register("product_name", {
                  required: true,
                })}
              />
            </div>
            {/* BRAND */}
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Brand
              </label>
              <input
                type="text"
                id="brand"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Product brand"
                {...register("brand", {
                  required: true,
                })}
              />
            </div>
            {/* PRECIO */}
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Price
              </label>
              <input
                type="number"
                id="price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="$2999"
                {...register("price", {
                  required: true,
                })}
              />
            </div>
            {/* SELECT CATEGORY */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Category
              </label>
              <select
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                {...register("category", {
                  required: true,
                })}
              >
                {/* <option selected="">Select category</option> */}
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.value}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
            {/* SELECT SUBCATEGORY */}
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                subcategory
              </label>
              <select
                id="subcategory"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                {...register("subcategory", {
                  required: true,
                })}
              >
                {/* <option selected="">Select subcategory</option> */}

                {selectedCategory == "Technology" &&
                  CATEGORIES[0].subcategory.map((sub) => (
                    <option key={sub.id} value={sub.value}>
                      {sub.name}
                    </option>
                  ))}
                {selectedCategory == "Fashion" &&
                  CATEGORIES[1].subcategory.map((sub) => (
                    <option key={sub.id} value={sub.value}>
                      {sub.name}
                    </option>
                  ))}
                {selectedCategory == "Services" &&
                  CATEGORIES[2].subcategory.map((sub) => (
                    <option key={sub.id} value={sub.value}>
                      {sub.name}
                    </option>
                  ))}
              </select>
            </div>

            {/* MORE FILEDS ADVANCED */}
            {selectedCategory === "Technology" && (
              <TechnologyFields register={register} />
            )}
            {selectedCategory === "Fashion" && <FashionFields />}
            {selectedCategory === "Services" && <ServicesFields />}

            {/* DESCRIPTION */}
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <textarea
                id="description"
                rows="8"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your description here"
              ></textarea>
            </div>
          </div>

          {/* imagenes */}
          <div>
            <input
              type="file"
              multiple
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
              ref={fileInputRef}
            />
            <Button
              // type="button"
              className="mt-8"
              color="primary"
              onClick={handleClickFileInput}
            >
              Añadir Imágenes
            </Button>
          </div>

          {/* <input type="file" name="image" ref={register} /> */}
          <div className="h-auto min-h-[200px] w-full p-4 border-black border-dashed  border-2 my-8 flex flex-col gap-4">
            {images.map((image, index) => (
              <div key={index} className="flex justify-between">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`Image ${index + 1}`}
                  width="150px"
                />
                <button
                  type="button"
                  className="remove-button"
                  onClick={() => handleRemoveImage(index)}
                >
                  Eliminar
                </button>
              </div>
            ))}
          </div>

          {/* BOTON */}

          <button
            disabled={isLoading}
            onClick={handleSubmit(onSubmit)}
            // type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Añadir Producto
          </button>

          {isLoading && (
            <div className="mt-4 text-center">
              <Spinner />{" "}
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

export default AddForm;
