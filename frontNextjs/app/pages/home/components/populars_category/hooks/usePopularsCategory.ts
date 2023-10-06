'use client'
import {  useQuery } from "@tanstack/react-query";
import fetchPopularsCategory from "../services/servicePopularsCategory";





//hook
export function useFetchPopularsCategory(category:string){

  console.log(category)

 return    useQuery(['popularsCat',category],fetchPopularsCategory)
}