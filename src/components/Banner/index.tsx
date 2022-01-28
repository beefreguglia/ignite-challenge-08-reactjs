import { Flex, useBreakpointValue } from '@chakra-ui/react';
import { BannerImage } from './BannerImage';
import { BannerText } from './BannerText';

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      w="100%"
      h="96"
      bgImage="/images/Banner.jpg"
      bgPosition="center top 30%"
      px="6"
      justify="space-around"
      align="center"
    >
      <BannerText />
      { isWideVersion && <BannerImage /> }
    </Flex>
  );
}
