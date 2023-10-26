'use client'
import { useContext, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { CardContent } from "./ui/componentes/CardInfo";
import { DataContext } from "@/app/data/hooks/ContextData";

export default function Home() {
  const contextValue = useContext(DataContext);

  if (!contextValue) {
    return null;
  }

  const { characterDataFetch } = contextValue;

  return (
      <ChakraProvider>
        <main className="py-10 bg-sky-50 ">
          {contextValue ? ( 
            <div className="w-full max-w-[1200px] m-auto p-2 flex flex-wrap justify-between gap-4">
              {characterDataFetch.map((element) => (
                <CardContent
                  key={element.id}
                  name={element.name}
                  avatar={element.image}
                  species={element.species}
                  gender={element.gender}
                  status={element.status}
                />
              ))}
            </div>
          ) : (
            <p>Loading</p>
          )}
        </main>
      </ChakraProvider>
  );
}
