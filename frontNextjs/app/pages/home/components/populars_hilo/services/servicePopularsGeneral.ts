// import { PopularsCat } from "../../../interfaces/publishings";
const domain = process.env.NEXT_PUBLIC_FIBER_DOMAIN;



//services
async function fetchPopularsGeneral (){
 
 
 const response = await fetch(`${domain}/publishings/top9`);
 console.log(response)
 const data = await response.json();
 console.log(data)
  return data.top9
 
 }

 export default fetchPopularsGeneral