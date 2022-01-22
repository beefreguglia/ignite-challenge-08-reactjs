import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors:{
    gray: {
      "900": "#47585B",
      "700": "#999999",
      "200": "#DADADA",
      "100": "#F5F8FA",
    },
    yellow: {
      "500": "#FFBA08",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
})