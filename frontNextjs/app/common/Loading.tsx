import { Spinner } from "@nextui-org/react";
import React from "react";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Spinner label="Cargando..." color="primary" size="md" />
    </div>
  );
}
