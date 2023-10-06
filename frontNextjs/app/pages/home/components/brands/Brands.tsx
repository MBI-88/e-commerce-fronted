import Svg1 from "./Svg1";
import Svg2 from "./Svg2";
import Svg3 from "./Svg3";
import Svg4 from "./Svg4";
import Svg5 from "./Svg5";
import Svg6 from "./Svg6";
import styles from "./styles/brands.module.css";

const Brands = () => {
  return (
    <section className="bg-white dark:bg-gray-900 my-14 p-6">
      <div className="py-8 md:pt-24 pb-4 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-24 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          You’ll be in good company
        </h2>
        <div className=" text-gray-500 dark:text-gray-400 text-3xl">
          <div className={styles.marquee}>
            <div className={styles.track}>
              <Svg1 />

              <Svg2 />
              <Svg3 />
              <Svg4 />
              <Svg5 />
              <Svg6 />
              <Svg1 />

              <Svg2 />
              <Svg3 />
              <Svg4 />
              <Svg5 />
              <Svg6 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
