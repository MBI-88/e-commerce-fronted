"use client";
import React, { useReducer, useState } from "react";
import { useRouter } from "next/navigation";

import { useForm, SubmitHandler } from "react-hook-form";
import { RxLogin, TxLogin } from "../interfaces/login";
import { Login } from "../service/serviceLogin";
// import { CustumeState } from "@/app/hooks/useWrapReducer";
import { getUser } from "@/app/services/serviceGetUser";
import { useAuthStore } from "@/app/store/auth";
import { alertWelcome } from "../../helpers/alerts";
import { Spinner } from "@nextui-org/react";
// import RestorePassword from "./restore";

type SummaryErrors = {
  message: string;
};

const FormSignin = () => {
  //store
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<TxLogin>();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  // const [summary, setSummary] = useState<SummaryErrors>()
  const [restore, setRestore] = useState<boolean>(false);
  // const [states, setStates] = useReducer(CustumeState, { loading: false, error: false })

  ///??????????????????handleForgotPasswordClick????????????????

  // const handleForgotPasswordClick = (event?: React.SyntheticEvent | Event) => {
  //     event?.preventDefault()
  //     setRestore(true)
  // }

  //? SUBMIT DEL USER
  const onSubmit: SubmitHandler<TxLogin> = async (data) => {
    try {
      setIsLoading(true);

      const response: RxLogin = await Login(data);
      console.log(response);

      if (response.session_token) {
        await getUser(response.user_id, response.session_token)
          .then((userData) => {
            setToken(response.session_token); //hacerlo pero con el store de zuztand
            setProfile(userData);
            alertWelcome();
            router.push("/pages/profile");
            console.log(userData);
            //manejo el error
          })
          .catch((error) => {
            console.error("Error al obtener el usuario:", error);
          });
      }
    } catch (error) {
      console.log(error);
      // alertError(error)
    } finally {
      setIsLoading(false);
    }
  }; //? FIN DE FUNCION SUBMIT

  return (
    <>
      {!restore ? (
        <form className="max-w-xs md:max-w-sm my-12 mx-auto">
          {/* email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Correo
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "El correo electrónico no tiene un formato válido.",
                },
              })}
            />
            {errors.email && (
              <span className="text-red-600 text-xs">errors.email.message</span>
            )}
          </div>
          {/* password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Contrasena
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              {...register("password", {
                required: true,
                minLength: 8,
                maxLength: 12,
                // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              })}
            />
            {errors.password && (
              <span className="text-red-600 text-xs">
                `La contraseña debe tener al menos 8 caracteres y maximo 12 `
              </span>
            )}
          </div>
          {/* boton */}
          <button
            onClick={handleSubmit(onSubmit)}
            disabled={isLoading}
            type="submit"
            className="text-white bg-blue-700             disabled:bg-blue-300
            hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Iniciar Sesion
          </button>
           {/* olvide password */}
          <div className="flex justify-center mt-6">
            <label
              htmlFor="forget"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Olvide la contrasena{" "}
            </label>
          </div>
          {/* cargando... */}
          {isLoading && (
            <div className="mt-4 text-center">
              {" "}
              <Spinner />
            </div>
          )}
        </form>
      ) : (
        // <RestorePassword setSummary={setSummary} setRestore={setRestore} states={states} setStates={setStates} />
        <h3>Comentado reset pass form</h3>
      )}
    </>
  );
};

export default FormSignin;
