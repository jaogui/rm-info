"use client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { CardView } from "./ui/componentes/partials/CardView";
import { useContextData } from "../app/data/hooks/useContextData";
import { Loading } from "./ui/componentes/Loading";
import { ButtonLoad } from "./ui/componentes/ButtonLoad";

export default function Home() {
  const { characterDataFetch, isLoading} =  useContextData()

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
              position="relative"
            >
              {characterDataFetch.map((element, index) => (
                <CardView
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
            <ButtonLoad />
          </>
        ) : null}
      </main>
    </ChakraProvider>
  );
}
