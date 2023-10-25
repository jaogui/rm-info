"use client";
import { ChakraProvider } from "@chakra-ui/react";
import { CardContent } from "./ui/componentes/CardInfo";
import { useEffect, useState } from "react";
import { fetchDefault } from "@/app/data/api/axiosConfig";

interface CaracterData {
  id: number;
  name: string;
  image: string;
  gender: string;
  status: string;
  species: string;
}

export default function Home() {
  const [dataCaracter, setDataCaracter] = useState([]);

  useEffect(() => {
    async function fetchInfo() {
      try {
        const response = await fetchDefault.get("/character");
        const data = await response.data.results;
        setDataCaracter(data);
        console.log(data);
      } catch (error) {
        console.error("Erro na requisição", error);
      }
    }
    fetchInfo();
  }, []);

  return (
    <ChakraProvider>
      <main className="py-10 bg-sky-50 ">
        {dataCaracter ? (
          <div className="w-full max-w-[1200px] m-auto p-2 flex flex-wrap justify-between gap-4">
            {dataCaracter.map((element: CaracterData) => (
              <CardContent key={element.id} name={element.name} avatar={element.image} species={element.species} gender={element.gender} status={element.status}/>
            ))}
          </div>
        ) : (
          <p>Loading</p>
        )}
      </main>
    </ChakraProvider>
  );
}
