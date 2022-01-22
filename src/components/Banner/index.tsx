import { Flex } from '@chakra-ui/react';
import { BannerImage } from './BannerImage';
import { BannerText } from './BannerText';

export function Banner() {
  return (
    <Flex
      w="100%"
      h="96"
      bgImage="/images/Banner.jpg"
      bgPosition="center top 30%"
      justify="space-around"
      align="center"
    >
      <BannerText />
      <BannerImage />
    </Flex>
  );
}
