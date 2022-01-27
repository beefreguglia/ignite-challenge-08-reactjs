import { Flex, Heading } from "@chakra-ui/react";

export function ContinentBanner() {
  return(
    <Flex
      w="100%"
      h="500px"
      bgImage="/images/Banner.jpg"
      align="flex-end"
      mb="20"
    >
      <Heading 
        ml="36" 
        mb="16"
        color="gray.100"
      >
        Europa
      </Heading>
    </Flex>
  );
}