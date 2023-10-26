"use client";
import { useContext, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CardContent } from "./ui/componentes/CardInfo";
import { DataContext } from "@/app/data/hooks/ContextData";

export default function Home() {
  const contextValue = useContext(DataContext);

  if (!contextValue) {
    return null;
  }

  function handleMoreView() {
    handleLoadMore();
  }
  const { characterDataFetch, handleLoadMore } = contextValue;

  console.log(contextValue);
  console.log(characterDataFetch);

  return (
    <ChakraProvider>
      <main className="py-10 bg-sky-50 ">
        <div className="w-full max-w-[1200px] m-auto p-2 flex flex-wrap justify-between gap-10">
          {characterDataFetch ? (
            characterDataFetch.map((element, index) => (
              <CardContent
                key={index}
                id={element.id}
                name={element.name}
                avatar={element.image}
                species={element.species}
                gender={element.gender}
                status={element.status}
              />
            ))
          ) : (
            <p>Loading</p>
          )}
          <button onClick={handleMoreView}> Carregar mais</button>
        </div>
      </main>
    </ChakraProvider>
  );
}
