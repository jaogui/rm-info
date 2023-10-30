"use client";
import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchDefault } from "../api/axiosConfig";

export interface CharacterData {
  id: number;
  image: string;
  name: string;
  gender: string;
  status: string;
  species: string;
  type?: string;
  episodes?: string[];
  location?: {
    name: string;
    url: string;
  };
  origin?: {
    name: string;
    url: string;
  };
}


interface DataContextProps {
  children: ReactNode;
}

interface DataContextValue {
 characterDataFetch: CharacterData[];
 handleLoadMore: () => void;
}

export const DataContext = createContext<DataContextValue | null>(null);

export function ContextData({ children }: DataContextProps) {
  const [characterDataFetch, setCharacterDataFetch] = useState<CharacterData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        console.log("currentPage", currentPage);
        const response = await fetchDefault.get(`/character?page=${currentPage}`);
        const data = await response.data;
        setCharacterDataFetch((prevData) => {
          const newResults = data.results.filter((newResult: CharacterData) => {
            return !prevData.some(
              (prevResult) =>
                JSON.stringify(prevResult) === JSON.stringify(newResult)
            );
          });
          return [...prevData, ...newResults];
        });
      } catch (error) {
        console.error("Erro na requisição", error);
      }
    }
    fetchCharacter();
  },[currentPage]);

  function handleLoadMore(){
    setCurrentPage((prevPage) => prevPage + 1);
  };

  return (
    <DataContext.Provider value={{ characterDataFetch, handleLoadMore }}>
      {children}
    </DataContext.Provider>
  );
}
