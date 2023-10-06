import {create} from 'zustand'
import { persist } from 'zustand/middleware'


type State= {
  token:string,
  profile:any
  isAuth:boolean
  code_id:number
}


type Actions={
  setToken:(token:string)=> void
  setCode_id:(code_id:number)=>void
  logout:()=>void
  setProfile:(profile:any)=> void
}

export const  useAuthStore = create(persist<State & Actions>(
   
  (set)=>({

    token:' ',
    code_id:100,
    profile:null,
    isAuth:false,

    setCode_id:(code_id)=> set((state)=>({code_id:code_id})),

    setToken:(token:string)=> set((state)=>({token:token, isAuth:true})),

    setProfile:(profile:any)=>set((state)=>({profile:profile})),

    logout:()=>               set((state) => ({isAuth:false,token:'',profile:null}))
    
    
    
    }),
    {
      name:'auth'
    }
))