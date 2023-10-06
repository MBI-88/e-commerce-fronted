'use client'
import Banner from './pages/home/components/banner/Banner';
import Hilo from './pages/home/components/hilo/Hilo';
import Promo from './pages/home/components/promo/Promo';
import Newsletter from './pages/home/components/newsletter/Newsletter';
import Brands from './pages/home/components/brands/Brands';
import Cube from "./pages/home/components/cube/EffectCube"
import Populars from './pages/home/components/populars_hilo/PopularsGeneralHilo';
import PopularsByCategory from './pages/home/components/populars_category/PopularsByCategory';
import ScrollUpButton from './pages/home/components/backtotop/backtotop';


export default function Home() {





  return (


 <>
 <Hilo />
 <Promo/>  {/**promo tiene a carrusel y a feature */}
  <PopularsByCategory/>
  <Banner/>
  <Cube/>
  <Populars/>

  <Brands/>
  <Newsletter/>
  <ScrollUpButton/>

   


</>
   

  )
}
