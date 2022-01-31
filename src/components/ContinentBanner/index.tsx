import { Flex, Heading } from "@chakra-ui/react";

interface ContinentBannerProps {
  name: string;
  image: string;
}

export function ContinentBanner({ name, image }: ContinentBannerProps) {
  return(
    <Flex
      w="100%"
      h="500px"
      bgImage={image}
      align={["center","flex-end"]}
      justify={["center", "flex-start"]}
      mb={["0","20"]}
    >
      <Heading 
        ml={["0","36"]} 
        mb="16"
        color="gray.100"
      >
        {name}
      </Heading>
    </Flex>
  );
}