import { Box, Image } from "@chakra-ui/react";

export function Logo() {
  return(
    <Box 
      justifySelf="center"
      gridColumn="2"
    >
      <Image 
        src='/images/Logo.svg' 
        alt="logo" 
        h="12"
        w="48"
      />
    </Box>
  );
}