import { Divider, Flex, Heading, HStack, Image, Stack } from "@chakra-ui/react";

import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { SwiperComponent } from "../components/SwiperComponent";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <HStack spacing="36" my="20" mx="auto" maxWidth={1080} w="100%">
        <Image src="/images/Nightlife.svg" alt="Vida noturna" h="145px" />
        <Image src="/images/Beach.svg" alt="Praia" h="145px" />
        <Image src="/images/Modern.svg" alt="Moderno" h="145px" />
        <Image src="/images/Classic.svg" alt="Cássico" h="145px" />
        <Image src="/images/More.svg" alt="Mais" h="145px"/>
      </HStack>
      <Flex w="100%" justify="center" align="center" mb="14">
        <Divider w="300px" />
      </Flex>
      <Stack display="flex" align="center" justify="center" mb="10">
        <Heading
          color="gray.900"
          fontWeight="medium"
          fontSize="3xl"
        >
          Vamos Nessa?
        </Heading>
        <Heading
          color="gray.900"
          fontWeight="medium"
          fontSize="3xl"
        >
          Então escolha seu continente
        </Heading>
      </Stack>
      <SwiperComponent />
    </>
  )
}
