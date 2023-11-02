import { Box } from "@chakra-ui/react";
import { Loader2 } from "lucide-react";

export function Loading() {
  return (
    <Box className="h-screen bg-sky-50 text-rmBlue" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <iframe
        loading="lazy"
        src="https://lottie.host/?file=ce74ce3c-76db-488a-95b4-4011b8e4f8db/u6aryLT3jT.json"
        className="h-[250px] w-[250px]"
      />
       <span className="mt-2 ml-4">
        <Loader2 className="animate-spin"/>
       </span>
    </Box>
  );
}