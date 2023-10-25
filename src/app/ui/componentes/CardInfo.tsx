import { Card, CardBody, Box, Text, Avatar, Badge, Fade, useDisclosure } from "@chakra-ui/react";
import { MouseEventHandler } from 'react';
import { ModalViewContent } from "./modalContent";

interface cardProps {
  avatar: string;
  name: string;
  gender: string;
  status: string;
  species: string;
}
export function CardContent(props: cardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function openModal(){
    onOpen();
  }

  return (
    <>
      <ModalViewContent isOpen={isOpen} onClose={onClose} /> 
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
        onClick={openModal}
        _hover={{border: "3px solid #f37ee06e"}}
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
