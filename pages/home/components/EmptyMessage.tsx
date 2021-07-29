import { Center } from "@chakra-ui/react";

type EmptyMessageProps = {
  text: string;
};

const EmptyMessage = ({ text }: EmptyMessageProps) => {
  return (
    <Center fontSize="15px" color="#ddd" fontStyle="italic">
      {text}
    </Center>
  );
};

export default EmptyMessage;
