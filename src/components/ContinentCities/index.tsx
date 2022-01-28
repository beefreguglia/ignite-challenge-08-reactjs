import { Box, Flex, Grid, Heading } from "@chakra-ui/react";
import { CardCities } from "./CardCities";

export function ContinentCities() {
  return(
    <Box
      mt="20"
      mx="36"
    >
      <Heading
        fontWeight="medium"
        fontSize="4xl"
        mb="10"
        color="gray.900"
      >
        Cidades +100
      </Heading>
      <Grid
        gridTemplateColumns="repeat(4, 1fr)"
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
  );
}