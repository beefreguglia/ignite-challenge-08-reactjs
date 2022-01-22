import { Box, Image } from '@chakra-ui/react';

export function BannerImage() {
  return (
    <Box>
      <Image 
        src="/images/Airplane.svg" 
        alt="Airplane" 
        w="417px"
        h="270px"
        mt="44"
      />
    </Box>
  );
}
