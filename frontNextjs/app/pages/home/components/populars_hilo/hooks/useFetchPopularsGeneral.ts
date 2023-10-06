'use client'
import {  useQuery } from "@tanstack/react-query";
import fetchPopularsGeneral from "../services/servicePopularsGeneral";





//hook
export function useFetchPopularsGeneral(){


 return    useQuery(['populars'],fetchPopularsGeneral)
}