import { Divider, Flex, Grid, GridItem, HStack, useBreakpointValue } from '@chakra-ui/react';
import { Icon } from './Icon';

export function TravelTypes() {
  return (
    <>
      <Grid
        templateColumns={['1fr 1fr', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
        w="100%"
        justify="space-between"
        align="center"
        mt={['10', '32']}
        mx="auto"
        maxW="1160px"
        flexWrap="wrap"
        gap={[1, 5]}
      >
        <GridItem>
          <Icon icon="Nightlife" text="vida noturna" />
        </GridItem>
        <GridItem>
          <Icon icon="Beach" text="praia" />
        </GridItem>
        <GridItem>
          <Icon icon="Modern" text="moderno" />
        </GridItem>
        <GridItem>
          <Icon icon="Classic" text="clássico" />
        </GridItem>
        <GridItem colSpan={[2, 2, 2, 1]}>
          <Icon icon="More" text="e mais..." />
        </GridItem>
      </Grid>

      <Flex w="100%" justify="center" align="center" mb="14">
        <Divider w="200px" border="1px" borderColor="black"/>
      </Flex>
    </>
  );
}
