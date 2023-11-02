import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";
import { CharacterData } from "../../../data/hooks/ContextData";
import { ModalDetails } from "./ModalDetails";

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
            position="absolute"
            right={0}
            h="full"
            height="full"
            boxShadow="2xl"
            borderRadius="lg"
            className="border-[3px] border-rmBlue"
          >
            <ModalHeader>
              <ModalCloseButton right="3" />
            </ModalHeader>
            <ModalBody>
              <Box display="flex" flexDirection="column" gap="20px" p="10px">
                <div className="flex flex-col gap-2">
                  <Text display="flex" gap="5px" alignItems="center" textTransform="uppercase" fontWeight="500" >
                    {propsModal.characterData.name}
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
                  <ModalDetails
                    labelBadge="Specie"
                    infoText={propsModal.characterData.species}
                    colorBadge="purple"
                  />
                  <ModalDetails
                    labelBadge="Gender"
                    infoText={propsModal.characterData.gender}
                    colorBadge="green"
                  />
                  <ModalDetails
                    labelBadge="Location"
                    infoText={propsModal.characterData?.location?.name}
                    colorBadge="purple"
                  />
                  <ModalDetails
                    labelBadge="Origin"
                    infoText={propsModal.characterData?.origin?.name}
                    colorBadge="green"
                  />
                  {propsModal.characterData.type ? (
                    <ModalDetails
                      labelBadge="Type"
                      infoText={propsModal.characterData?.type}
                      colorBadge="purple"
                    />
                  ) : null}
                  <ModalDetails
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
