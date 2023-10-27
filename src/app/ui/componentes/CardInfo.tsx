import {
  Card,
  CardBody,
  Box,
  Text,
  Avatar,
  Badge,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { fetchDefault } from "@/app/data/api/axiosConfig";
import { ModalViewContent } from "./ModalContent";


interface cardProps {
  id: number;
  avatar: string;
  name: string;
  gender: string;
  status: string;
  species: string;
}

export function CardContent(props: cardProps) {
  const [selectedCharacterData, setSelectedCharacterData] =
    useState<CharacterData | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function handleEventCard(id: number) {
    async function fetchDetailsCharacter() {
      try {
        const response = await fetchDefault.get(`/character/${id}`);
        const data = await response.data;
        // console.log(data);
        setSelectedCharacterData(data);
      } catch (error) {
        console.error("Erro na requisição", error);
      }
    }
    fetchDetailsCharacter();
    onOpen();
  }

  return (
    <>
      {selectedCharacterData !== null ? (
        <ModalViewContent
          isOpen={isOpen}
          onClose={onClose}
          characterData={selectedCharacterData}
        />
      ) : null}
      <Card
        p="20px"
        w="250px"
        h="300px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow="lg"
        cursor="pointer"
        borderRadius={"3xl"}
        onClick={() => handleEventCard(props.id)}
        _hover={{ border: "3px solid #f37ee06e" }}
      >
        <Avatar name="Avatar" size="xl" src={props.avatar} />
        <CardBody>
          <Text fontSize={16} textAlign="center" fontWeight="bold">
            {props.name}
          </Text>
          <Box display="flex" gap={1} flexDirection="column" paddingTop={2}>
            <Text
              fontSize={13}
              textAlign="center"
              fontWeight="normal"
              display="flex"
              gap="5px"
              alignItems="center"
            >
              <Badge fontSize={11} colorScheme="purple">
                Species:
              </Badge>
              {props.species}
            </Text>
            <Text
              fontSize={13}
              textAlign="center"
              fontWeight="normal"
              display="flex"
              gap="5px"
              alignItems="center"
            >
              <Badge fontSize={11} colorScheme="green">
                Gender:
              </Badge>
              {props.gender}
            </Text>
            <Text
              fontSize={13}
              textAlign="center"
              fontWeight="normal"
              display="flex"
              gap="5px"
              alignItems="center"
            >
              <Badge fontSize={11} colorScheme="pink">
                Status:
              </Badge>
              {props.status}
            </Text>
          </Box>
        </CardBody>
      </Card>
    </>
  );
}
