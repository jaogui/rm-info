"use client";
import { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
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
  isLoading: boolean;
  setSearchInputQuery: Dispatch<SetStateAction<string>>;
  searchCharacterData:  CharacterData[];
}

export const DataContext = createContext<DataContextValue | null>(null);

export function ContextData({ children }: DataContextProps) {
  const [characterDataFetch, setCharacterDataFetch] = useState<CharacterData[]>([]);
  const [searchCharacterData, setSearchCharacterData] = useState<CharacterData[]>([]);
  const [searchInputQuery, setSearchInputQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        const response = await fetchDefault.get(
          `/character?page=${currentPage}`
        );
        const data = await response.data.results;
        setCharacterDataFetch((prevData) => {
          const newResults = data.filter((newResult: CharacterData) => {
            return !prevData.some(
              (prevResult) =>
                JSON.stringify(prevResult) === JSON.stringify(newResult)
            );
          });
          return [...prevData, ...newResults];
        });
        setIsLoading(false);
      } catch (error) {
        console.error("Request error", error);
      }
    }
    fetchCharacter();
  }, [currentPage]);


  useEffect(() => {
    async function fetchSearch() {
      try {
        const response = await fetchDefault(`https://rickandmortyapi.com/api/character/?name=${searchInputQuery}`
        );
        const data = response.data.results;
        console.log(data)
        setSearchCharacterData(data)
      } catch (error) {
        console.error("Error search request", error);
      }
    }
    fetchSearch()
  }, [searchInputQuery]);

  function handleLoadMore() {
    setIsLoading(false);
    setCurrentPage((prevPage) => prevPage + 1);
  }

  return (
    <DataContext.Provider
      value={{ characterDataFetch, handleLoadMore, isLoading, setSearchInputQuery, searchCharacterData }}
    >
      {children}
    </DataContext.Provider>
  );
}
