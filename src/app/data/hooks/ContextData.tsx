"use client";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";
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
  searchCharacterData: CharacterData[];
}

export const DataContext = createContext<DataContextValue | null>(null);

export function ContextData({ children }: DataContextProps) {
  const [characterDataFetch, setCharacterDataFetch] = useState<CharacterData[]>(
    []
  );
  const [searchCharacterData, setSearchCharacterData] = useState<
    CharacterData[]
  >([]);
  const [searchInputQuery, setSearchInputQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData(){
      try {
        const endpoint = searchInputQuery
          ? `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${searchInputQuery}`
          : `/character?page=${currentPage}`;
  
        const response = await fetchDefault(endpoint);
        const data = response.data.results;
        console.log(data)
  
        const filterFunction = (prevData: CharacterData[]) => {
          return (newResults: CharacterData[]) => {
            return newResults.filter((newResult) => {
              return !prevData.some(
                (prevResult) =>
                  JSON.stringify(prevResult) === JSON.stringify(newResult)
              );
            });
          };
        };
  
        if (searchInputQuery) {
          // setCharacterDataFetch([]); // Limpar os dados normais
          setSearchCharacterData(filterFunction([])(data)); // Definir os dados da busca
        } else {
          setCharacterDataFetch((prevData) => [
            ...prevData,
            ...filterFunction(prevData)(data),
          ]);
        }
  
        setIsLoading(false);
      } catch (error) {
        console.error("Request error", error);
      }
    };
    fetchData();
    console.log(searchInputQuery)
  }, [currentPage, searchInputQuery]);


  function handleLoadMore() {
    setIsLoading(false);
    setCurrentPage((prevPage) => prevPage + 1);
  }

  return (
    <DataContext.Provider
      value={{
        characterDataFetch,
        handleLoadMore,
        isLoading,
        setSearchInputQuery,
        searchCharacterData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
