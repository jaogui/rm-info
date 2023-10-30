import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Box,
  Badge,
  Text,
} from "@chakra-ui/react";
import { CharacterData } from "../../data/hooks/ContextData";
import TextBadge from "./TextBadge";

interface ModalViewContentProps {
  isOpen: boolean;
  onClose: () => void;
  characterData: CharacterData;
}

export function ModalViewContent(propsModal: ModalViewContentProps) {
  return (
    <>
      {propsModal.characterData !== null ? (
        <Modal
          isOpen={propsModal.isOpen}
          onClose={propsModal.onClose}
          size="sm"
          scrollBehavior="inside"
        >
          <ModalContent
            className="modalClass"
            position="absolute"
            right={0}
            h="full"
            height="full"
            boxShadow="2xl"
            borderRadius="lg"
            border="3px solid #56d3e9ae"
          >
            <ModalHeader>
              <ModalCloseButton left="0.5" />
            </ModalHeader>
            <ModalBody>
              <Box display="flex" flexDirection="column" gap="20px" p="10px">
                <div className="flex flex-col gap-2">
                  <Text display="flex" gap="5px" alignItems="center">
                    <Badge fontSize={15} colorScheme="">
                      {propsModal.characterData.name}
                    </Badge>
                  </Text>
                  <Image
                    src={propsModal.characterData.image}
                    boxSize="200px"
                    boxShadow="lg"
                    borderRadius={"2xl"}
                    height="200px"
                    alt="photo character"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <TextBadge
                    labelBadge="Specie"
                    infoText={propsModal.characterData.species}
                    colorBadge="purple"
                  />
                  <TextBadge
                    labelBadge="Gender"
                    infoText={propsModal.characterData.gender}
                    colorBadge="green"
                  />
                  <TextBadge
                    labelBadge="Location"
                    infoText={propsModal.characterData?.location?.name}
                    colorBadge="purple"
                  />
                  <TextBadge
                    labelBadge="Origin"
                    infoText={propsModal.characterData?.origin?.name}
                    colorBadge="green"
                  />
                  {propsModal.characterData.type ? (
                    <TextBadge
                      labelBadge="Type"
                      infoText={propsModal.characterData?.type}
                      colorBadge="purple"
                    />
                  ) : null}
                  <TextBadge
                    labelBadge="Status"
                    infoText={propsModal.characterData.status}
                    colorBadge="yellow"
                  />
                </div>
              </Box>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      ) : (
        <p>não encontrado dados do modal</p>
      )}
    </>
  );
}
