import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

export default function Login({ isOpen, onOpenChange }: any) {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-center">
              Login
            </ModalHeader>
            <ModalBody>
              <h1 className="text-center">Coming Soon</h1>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
