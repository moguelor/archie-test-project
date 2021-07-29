import { Box } from "@chakra-ui/react";

type DescriptionProps = {
  text: string;
};

const Description = ({ text }: DescriptionProps) => {
  return <Box fontSize="11px">{text}</Box>;
};

export default Description;
