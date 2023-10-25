import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

interface ModalViewContentProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ModalViewContent(propsModal: ModalViewContentProps) {
  return (
    <>
      <Modal isOpen={propsModal.isOpen} onClose={propsModal.onClose}>
        <ModalContent>
          <ModalHeader>Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Conteudo</ModalBody>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
