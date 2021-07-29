import { Box } from "@chakra-ui/react";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return (
    <Box fontSize="17px" fontWeight="bold">
      {text}
    </Box>
  );
};

export default Title;
