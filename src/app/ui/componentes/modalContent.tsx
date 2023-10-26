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
      <Modal
        isOpen={propsModal.isOpen}
        onClose={propsModal.onClose}
        size="xs"
        scrollBehavior="inside"
      >
        <ModalContent
          className="modalClass"
          position="absolute"
          right={0}
          h="full"
          height="full"
          boxShadow="2xl"
          borderRadius="3xl"
          border="ActiveBorder"
        >
          <ModalHeader>
            <ModalCloseButton left="0.5" />
          </ModalHeader>
          <ModalBody py="5">Conteudo</ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
