"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import { useFetchPopularsCategory } from "./hooks/usePopularsCategory";
import Item from "./components/Item";
import SkeletonCard from "@/app/components/skeleton/SkeletonCard";
import { useRouter } from "next/navigation";

function PopularsByCategory() {

  const router= useRouter()

  const [selectedCategory, setSelectedCategory] =useState<string>("Technology");
  // const [selectedSubCategory, setSelectedSubCategory] = useState<string>("");

  const {
    data: top9,
    isLoading,
    isError,
    refetch,
  } = useFetchPopularsCategory(`${selectedCategory}`);
  // console.log(top9);

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  // const handleSubCategoryChange = (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   setSelectedSubCategory(event.target.value);
  // };

  useEffect(() => {
    refetch();
  }, [selectedCategory,
    //  selectedSubCategory,
      refetch]);

  return (
    <section className="my-14  max-w-5xl  mx-auto">
      <h2 className="text-center my-4 text-3xl md:text-5xl font-bold">
        Productos mas Populares por Categoria
      </h2>

      <label
        htmlFor="categories"
        className="block text-center my-8 text-md font-medium text-gray-900 dark:text-white"
      >
        Selecciona una categoria
      </label>
      <select
        value={selectedCategory}
        onChange={handleCategoryChange}
        id="categories"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[400px] mx-auto my-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {/* <option selected>Selecciona una categoria</option> */}
        <option selected value="Technology">
          Tecnologia
        </option>
        <option value="Fashion">Moda</option>
        <option value="Services">Servicios </option>
      </select>

      {/* <select
        value={selectedSubCategory}
        onChange={handleSubCategoryChange}
        id="categories"
        className="bg-gray-50 border  w-[400px] mx-auto border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {selectedCategory === "Technology" && (
          <>
            <option value="Smartphone">Smartphone</option>
            <option value="Laptop">Laptop</option>
          </>
        )}

        {selectedCategory === "Fashion" && (
          <>
            <option value="Ropa">Ropa</option>
            <option value="Zapatos">Zapatos</option>
          </>
        )}

        {selectedCategory === "Services" && (
          <>
            <option value="Teacher">Profesor</option>
            <option value="Drive">Chofer</option>
          </>
        )}
      </select> */}







      {isLoading ? (
        <>
          <div className="p-2 mx-auto my-12 flex justify-center md:justify-start flex-wrap gap-4 ">
            {Array.from(new Array(9)).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
          </div>
        </>
      ) : isError ? (
        <h2>error</h2>
      ) : top9.length != 0 ? (
        <>
          <div className="p-2 mx-auto my-12 flex justify-center md:justify-start flex-wrap gap-4 ">
            {top9?.map((item: any) => (
              //   <span>{item.count}</span>
              //   <span>{item.Publishings.description}</span>
              //   <span>{item.Publishings.Owner.username}</span>
              // </div>
              <Item
                key={item.Publishings.publishing_id}
                {...item.Publishings}
              />
            ))}
          </div>
        </>
      ) : (
        <h2 className="text-center font-bold my-14">
          No hay publishings en esta categoria
        </h2>
      )}

      <div className="flex justify-center">
        <Button color="primary" variant="shadow" size="lg" onClick={()=>router.push('/pages/layout-publishings')}>
          Obtener Todos los productos{" "}
        </Button>
      </div>
    </section>
  );
}

export default PopularsByCategory;
