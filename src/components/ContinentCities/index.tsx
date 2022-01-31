import { Box, Grid, Heading } from "@chakra-ui/react";
import { CardCities } from "./CardCities";

interface City {
  city_name: string;
  contry: string;
  avatar: string;
  image: string;
}

interface ContinentCitiesProps {
  cities: City[];
}

export function ContinentCities({ cities }: ContinentCitiesProps) {
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
          {cities.map(city => (
            <CardCities 
              key={city.city_name} 
              city_name={city.city_name} 
              contry={city.contry} 
              avatar={city.avatar} 
              image={city.image}
            />
          ))}
        </Grid>
      </Box>
    </>
  );
}