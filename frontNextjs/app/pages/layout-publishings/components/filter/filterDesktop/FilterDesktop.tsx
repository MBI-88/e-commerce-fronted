'use client'
import React from "react";

function FilterDesktop() {
  return (
    <>
      
      <form
        
        className=" w-full  max-w-xs p-4 overflow-y-auto bg-white-500 dark:bg-gray-800"
      >
        {/* overflow-y-auto transition-transform -translate-x-full */}
        {/* tabindex="-1" aria-labelledby="drawer-label" */}

        {/* <h5
          id="drawer-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          Apply filters
        </h5> */}
       

        <div className="flex flex-col justify-between flex-1">
          <div className="space-y-6">
            {/* <!-- Categories --> */}
            <div className="space-y-2">
              <h6 className="text-base font-medium text-black dark:text-white">
                Categories
              </h6>

              <div className="flex items-center">
                <input
                  id="tv"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />

                <label
                  htmlFor="tv"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  TV, Audio-Video
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="desktop"
                  type="checkbox"
                  value=""
                  checked
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />

                <label
                  htmlFor="dektop"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Desktop PC
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="gaming"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />

                <label
                  htmlFor="gaming"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Gaming
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="monitors"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />

                <label
                  htmlFor="monitors"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Monitors
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="laptops"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />

                <label
                  htmlFor="laptops"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Laptops
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="console"
                  type="checkbox"
                  value=""
                  checked
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />

                <label
                  htmlFor="console"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Console
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="tablet"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />

                <label
                  htmlFor="tablet"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Tablets
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="foto"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />

                <label
                  htmlFor="foto"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Foto
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="fashion"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />

                <label
                  htmlFor="fashion"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Fashion
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="books"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />

                <label
                  htmlFor="books"
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Books
                </label>
              </div>

              <a
                href="#"
                className="flex items-center text-sm font-medium text-primary-600 dark:text-primary-500 hover:underline"
              >
                View all
              </a>
            </div>

            {/* <!-- Prices --> */}
            <div className="space-y-2">
              <h6 className="text-base font-medium text-black dark:text-white">
                Prices
              </h6>
              {/* <div className="flex items-center justify-between col-span-2 space-x-3"> */}
              <div >

                <div className="w-full">
                  <label
                    htmlFor="min-experience-input"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    From
                  </label>

                  <input
                    type="number"
                    id="price-from"
                    value="300"
                    min="1"
                    max="10000"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder=""
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="price-to"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    To
                  </label>

                  <input
                    type="number"
                    id="max-experience-input"
                    value="3500"
                    min="1"
                    max="10000"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder=""
                    required
                  />
                </div>
              </div>
            </div>

            {/* <!-- Rating --> */}
            
          
          </div>

          {/* <div className="bottom-0 left-0 flex justify-center w-full pb-4 mt-6 space-x-4 md:px-4 md:absolute">
            <button
              type="submit"
              className="w-full px-5 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-700 dark:hover:bg-primary-800 dark:focus:ring-primary-800"
            >
              Apply filters
            </button>
            <button
              type="reset"
              className="w-full px-5 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Clear all
            </button>
          </div> */}
        </div>
      </form>
    </>
  );
}

export default FilterDesktop;
