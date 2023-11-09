import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { Plus } from "lucide-react";
import { useContextData } from "../../data/hooks/useContextData";

export function ButtonLoad() {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { handleLoadMore } = useContextData();

  function handleBtn() {
    try {
      handleLoadMore();
      setIsLoadingMore(true);
      setTimeout(() => {
        setIsLoadingMore(false); 
      }, 1000); 
    } catch (error) {
      console.error("Erro ao carregar mais dados:", error);
    }
  }

  return (
    <Button
      colorScheme="cyan"
      margin="auto"
      borderRadius="full"
      position="fixed"
      bottom="30px"
      onClick={handleBtn}
      disabled={isLoadingMore}
      role="button"
    >
      <p className="text-white">{isLoadingMore ? "Loading.." : <Plus />}</p>
    </Button>
  );
}
