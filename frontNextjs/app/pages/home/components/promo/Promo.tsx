
'use client'
// import style from './styles/promo.module.css'
import Carousel from "../carousel/Carousel";
import Feature from "../feature/Feature";

const Promo = () => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-5  md:mx-auto md:gap-x-12 md:my-24 max-w-5xl" >
     
      
        <Carousel />
     
        <Feature />
      
    </div>


  )


}


export default Promo;