'use client'
import { useState } from "react";
import { RxLogin } from "../../signin/interfaces/login";
import { SendCode } from "../service/serviceCheckCode";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/app/store/auth";
import { getUser } from "@/app/services/serviceGetUser";
import { DataCode } from "@/app/interfaces/confirm_code";
import { alertWelcome } from "../../helpers/alerts";






export const useServideCode = () => {


  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);



  const sendCode = async (payload: DataCode) => {
    console.log(payload)


    setIsLoading(true);

    try {


      //este codigo tambien tengo q enviarlo con email ,ese email lo obtengo del store
      const response: RxLogin = await SendCode(payload);
      //debo recibir el tokeny el user_id para desp refetch de su data user
      console.log(response);

      if (response.session_token) {

        //guardar token en el statdo
        //obtener el user data / fetchh paraa y setProfile
        await getUser(response.user_id, response.session_token)
        .then((userData) => {
          setToken(response.session_token)   //hacerlo pero con el store de zuztand
          setProfile(userData);
          alertWelcome()

          router.push('/pages/profile')
          console.log(userData);
          //manejo el error
        }).catch((error) => {
          console.error('Error al obtener el usuario:', error);
        });




      }




    } catch (error: any) {
      console.log(error.message)


    } finally {
      setIsLoading(false);


    }


  };

  return { sendCode, isLoading };
};
