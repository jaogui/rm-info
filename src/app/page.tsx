'use client'
import { ChakraProvider } from "@chakra-ui/react";
import { CardContent } from "./ui/componentes/CardInfo";

export default function Home() {
  return (
    <ChakraProvider>
    <main className="p-4 bg-sky-50">
      <div className="border border-zinc-600 w-full h-screen max-w-[1200px] m-auto p-2">
        <CardContent name="Name info" avatar="Imagem" />
      </div>
    </main>
  </ChakraProvider>
  );
}
