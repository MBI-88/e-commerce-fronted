import React from "react";
import FilterDesktop from "./components/filter/filterDesktop/FilterDesktop";
import Publishings from "./components/publishings/Publishings";
import FilterMobile from "./components/filter/filterMobile/FilterMobile";
import ScrollUpButton from "../home/components/backtotop/backtotop";


function LayoutPublishings() {

return (

    <>
    <div className="md:flex md:min-h-screen">
      {/* Filtro */}
      <div className="md:w-1/5 hidden md:block">
        <div className="md:fixed top-14  left-0 z-40">
          <FilterDesktop />
        </div>
      </div>

      {/* Filtro para pantallas móviles */}
      <div className="md:hidden w-full">
        <FilterMobile />
      </div>

      {/* Publicaciones */}
      <div className="md:w-3/4 md:pl-8">
        <Publishings />
      </div>
    </div>

      {/* Boton BackToTop */}
      < ScrollUpButton />
    </>
  );
}

export default LayoutPublishings;
