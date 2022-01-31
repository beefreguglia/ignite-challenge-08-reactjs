import { Flex, Heading, HStack, Icon, Text, Tooltip } from '@chakra-ui/react';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface InformationNumbersProps {
  contries: number;
  languages: number;
  cities: number;
}

export function InformationNumbers({ contries, languages, cities }: InformationNumbersProps) {
  return (
    <HStack
      w="100%"
      spacing={['5', '10', '12']}
      align="center"
      justify="center"
    >
      <Flex align="center" flexDirection="column" justify="center">
        <Heading
          fontWeight="semibold"
          fontSize={['4xl', '5xl']}
          color="yellow.500"
        >
          {contries}
        </Heading>
        <Text fontWeight="semibold" fontSize={['xl', '2xl']} color="gray.900">
          países
        </Text>
      </Flex>
      <Flex align="center" flexDirection="column" justify="center">
        <Heading
          fontWeight="semibold"
          fontSize={['4xl', '5xl']}
          color="yellow.500"
        >
          {languages}
        </Heading>
        <Text fontWeight="semibold" fontSize={['xl', '2xl']} color="gray.900">
          línguas
        </Text>
      </Flex>
      <Flex align="center" flexDirection="column" justify="center">
        <Heading
          fontWeight="semibold"
          fontSize={['4xl', '5xl']}
          color="yellow.500"
        >
          {cities}
        </Heading>
        <Flex justify="center" align="center">
          <Text fontWeight="semibold" fontSize={['xl', '2xl']} color="gray.900" mr="1" >
            cidades +100
          </Text>
          <Tooltip
            label="São as cidades que o continente possui que estão entre as 100 cidades mais visitadas do mundo"
            bg="gray.400"
            borderRadius="5px"
            color="black"
          >
            <Icon as={InfoOutlinedIcon} color="gray.400" />
          </Tooltip>
        </Flex>
      </Flex>
    </HStack>
  );
}
