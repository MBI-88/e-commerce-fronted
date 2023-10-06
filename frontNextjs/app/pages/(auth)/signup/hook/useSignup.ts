// 'use client'
// import { useState } from "react";
// import { TxSignup } from "../interfaces/signup";
// import { Signup } from "../service/serviceSignup";
// import { useRouter } from "next/navigation";
// import { SendCodeToEmail } from "../service/serviceCodeToEmail";
// import { alertGoingGetCode } from "../helpers/alerts";


// export const useSignup = () => {

//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [code_ref,setCode_ref]=useState<number>(0)




//   const signup = async (payload: TxSignup) => {
//     setIsLoading(true);

//     try {

//       const {code,code_id,email}= await Signup(payload);
//       console.log(code, code_id,email);
//       console.log('recibo code_id del backend ,paso 1')
     


      
//       if (code) {
//         alertGoingGetCode()
        
//         setCode_ref(code_id)   
//         console.log('actualizo el estado code_ref para poder exportarlo ,paso 2')

//       console.log(code_ref)

//         //redirigir la vista al input code
//         router.push("/pages/confirm_code")

      
//         //recibirr codgo y email y  enviarlo al backend de next para q este lo envie por gmail

//         const res = await SendCodeToEmail({ code, email})
//         //si todo ok mostrar mensaje de q vaya a revisar el correo
       
//         console.log(res)
//         ;

//       }//else con mensaje ha ocurrido un error



//     } catch (error) {
//       console.log(error)

//     } finally {
//       setIsLoading(false);


//     }


//   };

//   return { signup, isLoading ,code_ref};
// };
