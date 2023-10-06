"use client";

import Item from "../populars_category/components/Item";
import styles from "./styles/populars.module.css";
import { useFetchPopularsGeneral } from "./hooks/useFetchPopularsGeneral";
import SkeletonCard from "@/app/components/skeleton/SkeletonCard";
import { Http2ServerRequest } from "http2";

const Populars = () => {


  const { data, isLoading, isError } = useFetchPopularsGeneral();

   console.log(data)






  return (
    <section className={styles.maylikeWrapper}>
      <p className="text-center mb-16 text-3xl md:text-5xl font-bold">
        Productos mas Populares
      </p>

      {isLoading ? (
        <>
          <div className={styles.marquee}>
            <div className={styles.track}>
              {" "}
              {Array.from(new Array(9)).map((_, index) => (
                <SkeletonCard key={index} />
              ))}
            </div>
          </div>{" "}
        </>
      ) : isError ? (
        <h2>error</h2>
      ) : data.length != 0 ? (
        <>
          {/* <div className="p-2 mx-auto my-12 flex justify-center flex-wrap gap-4 "> */}
          <div className={styles.marquee}>
            <div className={styles.track}>
              {data?.map((item: any) => (
                <Item
                  key={item.Publishings.publishing_id}
                  {...item.Publishings}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <h2 className="text-center font-bold my-14">
          No hay publishings en esta categoria
        </h2>
      )}
    </section>
  );
};

export default Populars;
