import { Flex, Heading, Text } from '@chakra-ui/react';

export function InformationNumbers() {
  return (
    <Flex w="100%" justify="space-evenly" align="center">
      <Flex align="center" flexDirection="column" justify="center">
        <Heading fontWeight="semibold" fontSize="5xl" color="yellow.500">
          50
        </Heading>
        <Text fontWeight="semibold" fontSize="2xl" color="gray.900">
          países
        </Text>
      </Flex>
      <Flex align="center" flexDirection="column" justify="center">
        <Heading fontWeight="semibold" fontSize="5xl" color="yellow.500">
          60
        </Heading>
        <Text fontWeight="semibold" fontSize="2xl" color="gray.900">
          línguas
        </Text>
      </Flex>
      <Flex align="center" flexDirection="column" justify="center">
        <Heading fontWeight="semibold" fontSize="5xl" color="yellow.500">
          27
        </Heading>
        <Text fontWeight="semibold" fontSize="2xl" color="gray.900">
          cidades +100
        </Text>
      </Flex>
    </Flex>
  );
}
