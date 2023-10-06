"use client";
export default function FormRegister() {
  return (
    <>
    {/* <div className="h-screen bg-cover bg-center bg-[url('/img/hero-pattern.png')]">
      style={{backgroundImage:"url('/img/hero-signup.png'))"}} */}
      
     <div className="h-screen bg-gradient-to-r from-cyan-500 to-blue-500">

    </div>

    </>
  );
}

//  <section className="bg-gray-50 dark:bg-gray-900">
//         <div className="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
         
//           <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
//             <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
//               <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//                 Crea una Cuenta{" "}
//               </h1>

//               <form className="space-y-4 md:space-y-6" action="#">
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Correo
//                   </label>

//                   <input
//                     type="email"
//                     id="email"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     placeholder="name@flowbite.com"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="password"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Contrasena
//                   </label>
//                   <input
//                     type="password"
//                     name="password"
//                     id="password"
//                     placeholder="••••••••"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="confirm-password"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Confirmar Contrasena{" "}
//                   </label>
//                   <input
//                     type="confirm-password"
//                     name="confirm-password"
//                     id="confirm-password"
//                     placeholder="••••••••"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <label
//                     htmlFor="username"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Nombre de Usuario
//                   </label>
//                   <input
//                     type="text"
//                     id="username"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required
//                   />
//                 </div>
//                 <div className="mb-6">
//                   <label
//                     htmlFor="tel"
//                     className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//                   >
//                     Telefono
//                   </label>
//                   <input
//                     type="number"
//                     id="tel"
//                     className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                     required
//                   />
//                 </div>

//                 <div className="flex items-start">
//                   <div className="flex items-center h-5">
//                     <input
//                       id="terms"
//                       aria-describedby="terms"
//                       type="checkbox"
//                       className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
//                       required
//                     />
//                   </div>
//                   <div className="ml-3 text-sm">
//                     <label
//                       htmlFor="terms"
//                       className="font-light text-gray-500 dark:text-gray-300"
//                     >
//                       Acepto los{" "}
//                       <a
//                         className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                         href="#"
//                       >
//                         Terminos y Condiciones{" "}
//                       </a>
//                     </label>
//                   </div>
//                 </div>
//                 <button
//                   type="submit"
//                   className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
//                 >
//                   Crear una cuenta{" "}
//                 </button>
//                 <p className="text-sm font-light text-gray-500 dark:text-gray-400">
//                   Ya tienes una cuenta?{" "}
//                   <a
//                     href="#"
//                     className="font-medium text-primary-600 hover:underline dark:text-primary-500"
//                   >
//                     Iniciar sesion aqui{" "}
//                   </a>
//                 </p>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section> 