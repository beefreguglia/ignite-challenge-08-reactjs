import { Text } from "@chakra-ui/react";

interface InformationTextProps {
  text: string;
}

export function InformationText({ text }: InformationTextProps) {
  return(
    <Text
      fontSize={["xl","2xl"]}
      color="gray.900"
      align="justify"
    >
      {text}
    </Text>
  );
}