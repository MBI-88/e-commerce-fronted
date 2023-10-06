"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Form } from "../interfaces/signup";
// import { useSignup } from "@/app/pages/signup/hook/useSignup";
import { useAuthStore } from "@/app/store/auth";
import { Signup } from "../service/serviceSignup";
import { alertGoingGetCode } from "../../helpers/alerts";
import { useRouter } from "next/navigation";
import { SendCodeToEmail } from "../service/serviceCodeToEmail";
import { Spinner } from "@nextui-org/react";



function FormSignup() {


 //!usar funcion del estado global
  const setCode_id = useAuthStore((state) => state.setCode_id);  
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  //!hook form 
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm<Form>();
  
 

  //? SUBMIT DEL USER
  const onSubmit: SubmitHandler<Form> = async (data) => {
    const pass = getValues("password");
    const passwordRepeat = getValues("matchpass");

    if (pass !== passwordRepeat) {
      alert("paswords not match");
      return;
    }
    //evitar enviar  el matchpass (passwordRepeat)
    const { matchpass, ...dataSend } = data;
    console.log(dataSend);

    try {
      setIsLoading(true);

      const { code, code_id, email } = await Signup(dataSend);
      setIsLoading(true);

      console.log(code, code_id, email);
      //actualiozo el estado global para code_id
      setCode_id(code_id);

      if (code) {
        //mensaje de q va a ser redirigido
        alertGoingGetCode();

        //redirigir la vista al input code
        router.push("/pages/confirm_code");
        //recibirr codgo y email y  enviarlo al backend de next para q este lo envie por gmail
        const res = await SendCodeToEmail({ code, email });
        //si todo ok mostrar mensaje de q vaya a revisar el correo
        console.log(res);
      }
    } catch (error) {
      console.log(error);
      // alertError(error)
    } finally {
      setIsLoading(false);
    }
  }; //? FIN DE FUNCION SUBMIT

  return (
    <form className="max-w-xs md:max-w-sm my-12 mx-auto">
      {/* correo */}
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
        {errors.email && <span className="text-red-600 text-xs">errors.email.message</span>}
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
        {errors.password && <span className="text-red-600 text-xs">`La contraseña debe tener al menos 8 caracteres y maximo 12 `</span>  }
      </div>
      {/* confirm pass */}
      <div className="mb-6">
        <label
          htmlFor="confirm_password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirma Contrasena
        </label>
        <input
          type="password"
          id="confirm_password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("matchpass", { required: true })}
        />
      </div>
      {/* username */}
      <div className="mb-6">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Nombre de Usuario
        </label>
        <input
          type="text"
          id="username"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("username", {
            required: true,
            minLength: {
              value: 5,
              message: "El usuario debe tener al menos 5 caracteres.",
            },
          })}
        />
        {errors.username && <span className="text-red-600 text-xs">errors.username.message</span>}
      </div>
      {/* telefono */}
      <div className="mb-6">
        <label
          htmlFor="tel"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Telefono
        </label>
        <input
          type="string"
          id="tel"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          {...register("tel", {
            required: "El número de teléfono es requerido.",
            pattern: {
              value: /^\+(?:[0-9] ?){6,14}[0-9]$/,
              message:
                "El número de teléfono no tiene un formato válido.Recuerde tamb incluir el codigo d su pais ,ej: +53",
            },
          })}
        />
        {errors.tel && <span className="text-red-600 text-xs">errors.tel.message</span>}
      </div>
      {/* checkbox */}
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="terms"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        {/* label checbox */}
        <label
          htmlFor="terms"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Estoy de Acuerdo con los{" "}
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-500"
          >
            Terminos y condiciones
          </a>
        </label>
      </div>

      {/* boton */}
      <button
        disabled={isLoading}
        // type="submit"
        onClick={handleSubmit(onSubmit)}
        className="text-white bg-blue-700 disabled:bg-blue-300 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Confirmar
      </button>

      {/* cargando ... */}
      {isLoading && (
        <div className="mt-4 text-center">
          {" "}
          <Spinner />
        </div>
      )}
    </form>
  );
}

export default FormSignup;
