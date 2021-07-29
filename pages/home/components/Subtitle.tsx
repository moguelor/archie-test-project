import { Box } from "@chakra-ui/react";

type SubtitleProps = {
  text: string;
};

const Subtitle = ({ text }: SubtitleProps) => {
  return (
    <Box fontSize="12px" color="#b3afaf" fontWeight="bold">
      {text}
    </Box>
  );
};

export default Subtitle;
