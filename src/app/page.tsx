"use client";
import { useContext } from "react";
import { ChakraProvider, Button, Box } from "@chakra-ui/react";
import { CardContent } from "./ui/componentes/CardInfo";
import { DataContext } from "@/app/data/hooks/ContextData";
import { Plus } from "lucide-react";
import { Loading } from "./ui/componentes/Loading";

export default function Home() {
  const contextValue = useContext(DataContext);

  if (!contextValue) {
    return null;
  }

  function handleMoreView() {
    handleLoadMore();
  }
  const { characterDataFetch, handleLoadMore, isLoading } = contextValue;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ChakraProvider>
      <main className="py-10 bg-sky-50 flex flex-col items-center gap-6 min-h-screen">
        {characterDataFetch ? (
          <>
            <Box
              display="flex"
              flexWrap="wrap"
              gap="40px"
              justifyContent="center"
              maxW="1200px"
              w="full"
              margin="auto"
            >
              {characterDataFetch.map((element, index) => (
                <CardContent
                  key={index}
                  id={element.id}
                  name={element.name}
                  avatar={element.image}
                  species={element.species}
                  gender={element.gender}
                  status={element.status}
                />
              ))}
            </Box>
            <Button
              onClick={handleMoreView}
              colorScheme="cyan"
              margin="auto"
              borderRadius="full"
            >
              <Plus color="white" />
            </Button>
          </>
        ) : null}
      </main>
    </ChakraProvider>
  );
}
