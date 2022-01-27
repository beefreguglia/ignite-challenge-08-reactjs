import { Grid } from "@chakra-ui/react";
import { InformationNumbers } from "./InfomationNumbers";
import { InformationText } from "./InfomationText";

export function ContinentInformation() {
  return(
    <Grid
      templateColumns="1fr 1fr"
      gap="16"
      w="100%"
      px="36"
    >
      <InformationText />
      <InformationNumbers />
    </Grid>
  );
}