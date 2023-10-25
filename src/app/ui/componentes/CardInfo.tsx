import {useEffect} from "react";
import { fetchDefault } from "@/app/data/api/axiosConfig";
import {
  Card,
  CardHeader,
  CardBody,
  Box,
  Heading,
  Stack,
  StackDivider,
  Text,
  Avatar,
} from "@chakra-ui/react";


interface cardProps {
  avatar: String;
  name: String;
}
export function CardContent({avatar, name }: cardProps) {
  
  useEffect(()=>{
    async function fetchInfo(){
      try{
        const response = await fetchDefault.get('/character');
        const data = await response.data;
        console.log(data)
      } catch(error){
        console.error("Erro na requisição", error)
      }
    }
    fetchInfo()
  })


  return (
    <Card w="300px" h="300px" display="flex" alignItems="center" justifyContent="center">
      <CardHeader>
          <Avatar name="Avatar" size="lg" src="https://github.com/jaogui.png" />
      </CardHeader>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs">Title</Heading>
            <Text pt="2" fontSize="sm">
              Content 1
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}
