import { Box, Heading, Text } from "@chakra-ui/react";

export function BannerText() {
  return(
    <Box>
      <Heading
        color="gray.100"
        fontWeight="medium"
        fontSize={["2xl","3xl","4xl"]}
        mb="1"
      >
        5 Continentes,
      </Heading>
      <Heading
        color="gray.100"
        fontWeight="medium"
        fontSize={["2xl","3xl","4xl"]}
        mb="5"
      >infinitas possibilidades.</Heading>
      <Text
        color="gray.200"
        fontWeight="normal"
        fontSize={["md","lg"]}
        maxW="470px"
      >
        Chegou a hora de tirar do papel a viagem que você sempre sonhou
      </Text>
    </Box>
  );
}