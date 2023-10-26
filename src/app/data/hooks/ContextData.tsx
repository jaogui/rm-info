'use client'
import { createContext, ReactNode, useEffect, useState } from 'react';
import { fetchDefault } from '../api/axiosConfig';

interface CharacterData {
  id: number;
  image: string;
  name: string;
  gender: string;
  status: string;
  species: string;
}

interface DataContextProps {
  children: ReactNode;
}

interface DataContextValue {
  characterDataFetch: CharacterData[];
}

export const DataContext = createContext<DataContextValue | null>(null);

export function ContextData({ children }: DataContextProps) {
  const [characterDataFetch, setCharacterDataFetch] = useState<CharacterData[]>([]);

  useEffect(() => {
    async function fetchCharacter() {
      try {
        const response = await fetchDefault.get("/character");
        const data = await response.data.results;
        setCharacterDataFetch(data);
      } catch (error) {
        console.error("Erro na requisição", error);
      }
    }
    fetchCharacter();
  }, []);

  return (
    <DataContext.Provider value={{ characterDataFetch }}>
      {children}
    </DataContext.Provider>
  );
}