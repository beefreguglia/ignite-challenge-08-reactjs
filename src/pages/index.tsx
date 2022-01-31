import { GetServerSideProps } from 'next';

import { Heading, Stack } from '@chakra-ui/react';

import { Banner } from '../components/Banner';
import { Header } from '../components/Header';
import { SwiperComponent } from '../components/SwiperComponent';
import { TravelTypes } from '../components/TravelTypes';
import { api } from '../services/api';
import { useEffect, useState } from 'react';

interface ContinentProps {
  id: number;
  name: string;
  subtitle: string;
  image: string;
}

export default function Home() {
  const [continents, setContinents] = useState<ContinentProps[]>([]);

  useEffect(() => {
    api.get('continent').then(response => setContinents(response.data));
  }, []);

  return (
    <>
      <Header />
      <Banner />
      <TravelTypes />
      <Stack display="flex" align="center" justify="center" mb="10">
        <Heading
          color="gray.900"
          fontWeight="medium"
          fontSize={['lg', 'xl', '2xl', '3xl']}
        >
          Vamos Nessa?
        </Heading>
        <Heading
          color="gray.900"
          fontWeight="medium"
          fontSize={['lg', 'xl', '2xl', '3xl']}
        >
          Então escolha seu continente
        </Heading>
      </Stack>
      <SwiperComponent continents={continents} />
    </>
  );
}