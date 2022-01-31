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
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

interface ContinentProps {
  id: number;
  name: string;
  subtitle: string;
  image: string;
}

interface SwiperComponentProps {
  continents: ContinentProps[];
}

export function SwiperComponent({ continents }: SwiperComponentProps) {
  return (
    <Box w="100%" h="650px" maxW="1240px" mx="auto" mt="" mb={['5', '10']}>
      <Swiper
        navigation
        pagination
        mousewheel
        keyboard
        style={{ width: '100%', height: '100%' }}
      >
        {continents.map((continent) => (
          <SwiperSlide key={continent.id}>
              <Link  href={`continents/${continent.id}`} passHref>
              <Flex
                w="100%"
                h="100%"
                align="center"
                justify="center"
                direction="column"
                bgImage={continent.image}
                bgPosition="100% 30%"
                bgRepeat="no-repeat"
                bgSize="cover"
                textAlign="center"
                color="yellow.400"
                cursor="pointer"
              >
                <Heading
                  fontSize={['3xl', '4xl', '5xl']}
                  color="gray.100"
                  fontWeight="bold"
                >
                  {continent.name}
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={['0.8rem', '1xl', '2xl']}
                  mt={['2', '4']}
                >
                  {continent.subtitle}
                </Text>
              </Flex>
          </Link>
            </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
