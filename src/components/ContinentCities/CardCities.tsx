import { Avatar, Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface CardCitiesProps {
  city_name: string;
  contry: string;
  avatar: string;
  image: string;
}

export function CardCities({ city_name, contry, avatar, image }: CardCitiesProps) {
  return(
    <Box
      w="256px"
      h="279px"
      border="1px"
      borderColor="yellow.500"
      borderRadius="4px"
    >
      <Flex
        h="173"
        mb="5"
      >
        <Image src={image} alt='Dan Abramov' w="100%" h="100%" />
      </Flex>
      <Flex
        justify="space-between"
        align="center"
        px="6"
      >
        <Flex
          flexDirection="column"
        >
          <Heading
            fontWeight="semibold"
            color="gray.900"
            fontSize="xl"
          >
            {city_name}
          </Heading>
          <Text
            fontWeight="medium"
            color="gray.700"
          >
            {contry}
          </Text>
        </Flex>
        <Flex
          align="center"
        >
          <Avatar 
            name="Flag"
            src={avatar}
            size="sm"
          />
        </Flex>
      </Flex>
    </Box>
  );
}