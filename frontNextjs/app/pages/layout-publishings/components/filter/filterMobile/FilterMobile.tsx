"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";

import React from "react";
import { BsFilterRight } from "react-icons/bs";

function FilterMobile() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>

    <div className="w-full h-12 border-1 border-slate-300 flex items-center justify-end">
    <Button variant="light"
        onPress={onOpen}
        className="text-3xl"
        // className="text-gray-600 dark:text-gray-400 bg-#FFF p-0 items-start hover:underline text-base"
      >
        <BsFilterRight />
      </Button>


    </div>
     

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="bottom"
        scrollBehavior="inside"
        size="full"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Hacer un filtro
              </ModalHeader>
              <ModalBody>
                <p>seccion 1</p>
                <p>seccion 2</p>
                <p>seccion 3</p>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
                <Button color="primary" onPress={onClose}>
                  Aceptar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default FilterMobile;
