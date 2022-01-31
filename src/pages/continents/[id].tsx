import { GetServerSideProps } from "next";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentCities } from "../../components/ContinentCities";
import { ContinentInformation } from "../../components/ContinentInformation";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

interface City {
  city_name: string;
  contry: string;
  avatar: string;
  image: string;
}

interface ContinentProps {
  continent: {
    id: number;
    name: string;
    text: string;
    image: string;
    all_contries: number;
    languages: number;
    cities_quantity: number;
    cities: City[];
  } 
}

interface FilterProps {
  id: Number;
}

export default function Continent({ continent }: ContinentProps) {

  return(
    <>
      <Header />
      <ContinentBanner name={continent.name} image={continent.image} />
      <ContinentInformation 
        contries={continent.all_contries} 
        cities={continent.cities_quantity} 
        languages={continent.languages} 
        text={continent.text} 
      />
      <ContinentCities cities={continent.cities} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const response = await api.get('continent');
  const continents = response.data;
  
  function filterByID(obj: FilterProps) {
    if (obj.id === Number(id)) {
      return true;
    } else {
      return false;
    }
  }
  const continent = continents.filter(filterByID)

  return{
    props: {
      continent: continent[0],
    }
  };
}