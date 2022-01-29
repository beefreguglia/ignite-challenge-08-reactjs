import { Flex, Heading, HStack, Text } from '@chakra-ui/react';

export function InformationNumbers() {
  return (
    <HStack w="100%" spacing={["5","10","12"]} align="center" justify="center" >
      <Flex align="center" flexDirection="column" justify="center">
        <Heading fontWeight="semibold" fontSize={["4xl","5xl"]} color="yellow.500">
          50
        </Heading>
        <Text fontWeight="semibold" fontSize={["xl","2xl"]} color="gray.900">
          países
        </Text>
      </Flex>
      <Flex align="center" flexDirection="column" justify="center">
        <Heading fontWeight="semibold" fontSize={["4xl","5xl"]} color="yellow.500">
          60
        </Heading>
        <Text fontWeight="semibold" fontSize={["xl", "2xl"]} color="gray.900">
          línguas
        </Text>
      </Flex>
      <Flex align="center" flexDirection="column" justify="center">
        <Heading fontWeight="semibold" fontSize={["4xl","5xl"]} color="yellow.500">
          27
        </Heading>
        <Text fontWeight="semibold" fontSize={["xl", "2xl"]} color="gray.900">
          cidades +100
        </Text>
      </Flex>
    </HStack>
  );
}
