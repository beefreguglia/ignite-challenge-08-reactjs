import { Flex, Icon } from "@chakra-ui/react";
import { Logo } from "./logo";

export function Header() {
  return(
    <Flex
      as="header"
      w="100%"
      justify="center"
      align="center"
      h="100px"
    >
      <Logo />
    </Flex>
  );
}