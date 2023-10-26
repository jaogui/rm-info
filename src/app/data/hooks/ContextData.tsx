"use client";
import { createContext, ReactNode, useEffect, useState } from "react";
import { fetchDefault } from "../api/axiosConfig";

interface CharacterData {
  id: number;
  image: string;
  name: string;
  gender: string;
  status: string;
  species: string;
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

interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
}

interface CharacterDataResponse {
  results: CharacterData[];
  info: PaginationInfo;
}

interface DataContextProps {
  children: ReactNode;
}

interface DataContextValue {
 characterDataFetch: CharacterDataResponse[];
 handleLoadMore: () => void;
}

export const DataContext = createContext<DataContextValue | null>(null);

export function ContextData({ children }: DataContextProps) {
  const [characterDataFetch, setCharacterDataFetch] = useState<CharacterDataResponse[]>([]);
  const [currentPage, setCurrentPage] = useState(1);



  useEffect(() => {
    async function fetchCharacter() {
      try {
        console.log("currentPage", currentPage);
        const response = await fetchDefault.get(`/character?page=${currentPage}`);
        const data = await response.data;
        setCharacterDataFetch((prevData) => {
          // Filtra apenas os novos resultados que não existem no estado anterior
          const newResults = data.results.filter((newResult: CharacterData) => {
            // Verifica se o novo resultado já existe no estado anterior
            return !prevData.some(
              (prevResult) =>
                JSON.stringify(prevResult) === JSON.stringify(newResult)
            );
          });
          // Adiciona apenas os novos resultados
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
