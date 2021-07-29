import { Box } from "@chakra-ui/react";

type ErrorMessage = {
  text: string;
};

const ErrorMessage = ({ text }: ErrorMessage) => {
  return (
    <Box color="red" fontSize="14px">
      {text}
    </Box>
  );
};

export default ErrorMessage;
