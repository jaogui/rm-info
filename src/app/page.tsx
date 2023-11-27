"use client";
import { ChakraProvider, Box } from "@chakra-ui/react";
import { CardView } from "./ui/componentes/partials/CardView";
import { useContextData } from "../app/data/hooks/useContextData";
import { Loading } from "./ui/componentes/Loading";
import { ButtonLoad } from "./ui/componentes/ButtonLoad";
import { Header } from './ui/componentes/partials/Header';

export default function Home() {
  const { characterDataFetch, isLoading, searchCharacterData } =
    useContextData();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ChakraProvider>
      <Header />
      <main className="px-1 p-10 min-h-screen items-center w-full">
        <>
          <Box
            pt="6rem"
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            gap="35px"
            // maxW="1120px"
            w="full"
            position="relative"
            margin="auto"
            className="containerMain"
          >
            {/* Se houver uma pesquisa ativa, exiba os itens de pesquisa */}
            {searchCharacterData.length > 0 ? (
              <>
                {searchCharacterData.map((element, index) => (
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
              </>
            ) : (
              <>
                {/* Se não houver uma pesquisa ativa, exiba os itens normais */}
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
              </>
            )}
            <ButtonLoad />
          </Box>
        </>
      </main>
    </ChakraProvider>
  );
}
