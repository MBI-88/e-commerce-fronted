import { QueryFunctionContext } from "@tanstack/react-query";
// import { PopularsCat } from "../../../interfaces/publishings";
const domain = process.env.NEXT_PUBLIC_FIBER_DOMAIN;



//services
async function fetchPopularsCategory (ctx:QueryFunctionContext){
  const [_,category]=ctx.queryKey
 
 const response = await fetch(`http://localhost:8000/publishings/top9-category/${category}?start_date=2023-07-07&end_date=2025-08-26`);
 const data = await response.json();
  return data.top9
 
 }

 export default fetchPopularsCategory
