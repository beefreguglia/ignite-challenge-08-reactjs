import { Grid } from "@chakra-ui/react";
import { InformationNumbers } from "./InfomationNumbers";
import { InformationText } from "./InfomationText";

interface ContinentInformationProps {
  contries: number;
  languages: number;
  cities: number;
  text: string;
}

export function ContinentInformation({ contries, cities, languages, text }: ContinentInformationProps) {
  return(
    <Grid
      templateColumns={["1fr", "1fr", "1fr", "1fr 1fr"]}
      gap="16"
      w="100%"
      px={["2","36"]}
    >
      <InformationText text={text} />
      <InformationNumbers contries={contries} languages={languages} cities={cities} />
    </Grid>
  );
}