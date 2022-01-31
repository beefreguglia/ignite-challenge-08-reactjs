import { Button, Flex, Grid, useBreakpointValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Logo } from "./logo";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Link from "next/link";

export function Header() {
  const { asPath } = useRouter();
  let isActive: boolean;
  console.log(asPath);
  if(asPath.includes('/continent')){
    isActive = true;
  }
  
  
  return(
    <Flex
      as="header"
      w="100%"
      justify="center"
      align="center"
      h="100px"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
      {isActive && (
        <Flex justifySelf="start">
        <Link href="/" passHref>
          <Button bg="none">
            <ArrowBackIosNewIcon />
          </Button>
        </Link>
        </Flex>
      )}
      <Logo />
      </Grid>
    </Flex>
  );
}