"use client";
import { useAuthStore } from "@/app/store/auth";
import { DataCode } from "@/app/interfaces/confirm_code";
import { useState } from "react";
import { useServideCode } from "../hook/useServiceCode";
import { Button, Input } from "@nextui-org/react";

const FormConfirmCode = () => {


  //!!custom hook
  const { sendCode, isLoading } = useServideCode();
  //!!este recibe el codigo del input
  const [codigo, setCodigo] = useState<string>("");

  //!id del code
  const code_id = useAuthStore((state) => state.code_id);


  //!seguimiento al input
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodigo(event.target.value);
  };



  //!enviar 
  const handleSubmit = async () => {
    // console.log(codigo,typeof Number(codigo))
    const code: number = Number(codigo);

    const data: DataCode = {
      code: code,
      code_id: code_id,
    };
     //invoco funcion q viene del hook pa enviar el codigo
    await sendCode(data);
  };





  return (
    <>
      <div className="mt-20 mx-auto max-w-[240px]">
        <div>
          <Input
            type="email"
            variant="underlined"
            label="Confirmar Codigo"
            placeholder="Escribe el codigo"
            onChange={handleChange}
          />
          <div className="mt-4 flex justify-between">
            <Button disabled={isLoading} color="primary">
              Reenviar
            </Button>
            <Button
              disabled={isLoading}
              onClick={handleSubmit}
              color="primary"
              // isLoading
              variant="shadow"
            >
              Aceptar
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormConfirmCode;
