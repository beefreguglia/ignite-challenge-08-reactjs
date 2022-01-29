import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { CardCities } from "./CardCities";

export function ContinentCities() {
  return(
    <>
      <Heading
        fontWeight="medium"
        fontSize={["2xl","4xl"]}
        mb="10"
        mt="20"
        ml={["4","36"]}
        color="gray.900"
      >
        Cidades +100
      </Heading>
      <Box
        mt="20"
        mx={["10","36"]}
      >
        
        <Grid
          gridTemplateColumns={["1fr","1fr","repeat(2, 1fr)", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
          align="center"
          gap="12"
        >
          <CardCities />
          <CardCities />
          <CardCities />
          <CardCities />
          <CardCities />
          <CardCities />
          <CardCities />
          <CardCities />
        </Grid>
      </Box>
    </>
  );
}