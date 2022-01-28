import { Avatar, Box, Flex, Grid, Heading, Image, Text } from "@chakra-ui/react";

export function CardCities() {
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
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' w="100%" h="100%" />
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
            Londres
          </Heading>
          <Text
            fontWeight="medium"
            color="gray.700"
          >Reino Unido</Text>
        </Flex>
        <Flex
          align="center"
        >
          <Avatar 
            name="Flag"
            src="https://bit.ly/ryan-florence"
            size="sm"
          />
        </Flex>
      </Flex>
    </Box>
  );
}