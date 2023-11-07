import { useContext } from "react";
import { DataContext } from "./ContextData"

export function useContextData() {
  const contextValue = useContext(DataContext);
  if (!contextValue) {
    throw new Error('Uso do contexto deve ser usado dentro de um componente onde o provider é fornecido.');
  }
  
  return contextValue;
}


