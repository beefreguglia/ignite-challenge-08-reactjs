import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react';

interface IconProps {
  icon: string;
  text: string;
}

export function Icon({ icon, text }: IconProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      {isMobile ? (
        <Image
          src={`/images/${icon}.svg`}
          w="85px"
          h="85px"
          mb="6"
          alt={`${icon} icon`}
        />
      ) : (
        <>
          <Text color="yellow.400" fontSize="4xl" mr="2">
            •
          </Text>
          <Text
            fontWeight="600"
            color="gray.700"
            fontSize={["sm","md", "xl", "2xl"]}
          >
            {text}
          </Text>
        </>
      )}
    </Flex>
  );
}
