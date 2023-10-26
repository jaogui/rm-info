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

import { useEffect } from "react";

interface ModalViewContentProps {
  isOpen: boolean;
  onClose: () => void;
  characterData: CharacterData[];
}

export function ModalViewContent(propsModal: ModalViewContentProps) {
  const characterData = propsModal.characterData;

  return (
    <>
      <Modal
        isOpen={propsModal.isOpen}
        onClose={propsModal.onClose}
        size={"sm"}
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
          border="ActiveBorder"
        >
          <ModalHeader>
            <ModalCloseButton left="0.5" />
          </ModalHeader>
          <ModalBody py="5">
            {propsModal.characterData ? (
              <Box display="flex" flexDirection="column" gap="10px">
                <div className="flex flex-col gap-2">
                  <Text display="flex" gap="5px" alignItems="center">
                    <Badge fontSize={15} colorScheme="purple">
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
                <div className="flex flex-col gap-2 ">
                  <Text display="flex" gap="5px" alignItems="center">
                    <Badge fontSize={12} colorScheme="linkedin">
                      Specie
                    </Badge>
                    {propsModal.characterData.species}
                  </Text>
                  <Text display="flex" gap="5px" alignItems="center">
                    <Badge fontSize={12} colorScheme="green">
                      Gender
                    </Badge>
                    {propsModal.characterData.gender}
                  </Text>
                  <Text display="flex" gap="5px" alignItems="center">
                    <Badge fontSize={12} colorScheme="gray">
                      Location
                    </Badge>
                    {propsModal.characterData?.location?.name}
                  </Text>
                  <Text display="flex" gap="5px" alignItems="center">
                    <Badge fontSize={12} colorScheme="yellow">
                      Origin
                    </Badge>
                    {propsModal.characterData?.origin?.name}
                  </Text>
                  {propsModal.characterData.type ? (
                    <Text display="flex" gap="5px" alignItems="center">
                      <Badge fontSize={12} colorScheme="teal">
                        Type
                      </Badge>
                      {propsModal.characterData.type}
                    </Text>
                  ) : null}
                  <Text display="flex" gap="5px" alignItems="center">
                    <Badge fontSize={12} colorScheme="red">
                      Status
                    </Badge>
                    {propsModal.characterData.status}
                  </Text>
                </div>
              </Box>
            ) : (
              <p>Loading</p>
            )}
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
