import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from 'swiper';
import { Flex, Box, Heading, Text } from '@chakra-ui/react';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function SwiperComponent() {
  return (
    <Box w="100%" h="650px" maxW="1240px" mx="auto" mt="" mb={['5', '10']}>
      <Swiper
        navigation
        pagination
        mousewheel
        keyboard
        style={{ width: '100%', height: '100%' }}
      >
        <SwiperSlide>
          <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="/images/Banner.jpg"
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            color="yellow.400"
          >
            <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
            <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>O Continente mais Antigo</Text>
          </Flex>
        </SwiperSlide>
        <SwiperSlide>
        <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="/images/Banner.jpg"
            bgPosition="100% 30%"
            bgRepeat="no-repeat"
            bgSize="cover"
            textAlign="center"
            color="yellow.400"
          >
            <Heading fontSize={["3xl","4xl","5xl"]} color="gray.100" fontWeight="bold">Europa</Heading>
            <Text fontWeight="bold" color="gray.300" fontSize={["0.8rem","1xl", "2xl"]} mt={["2","4"]}>O Continente mais Antigo</Text>
          </Flex>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
