import { Box, Image, Center } from "@chakra-ui/react";

type CardProps = {
  missionName: string;
  rocketName: string;
  details: string;
  image: string;
  link?: string;
};

const Card = ({ missionName, rocketName, details, image, link }: CardProps) => {
  return (
    <Box maxW="sm" borderRadius="lg" overflow="hidden" bgColor="#FFF">
      {image ? (
        <Image src={image} objectFit="cover" height="180px" width="100%" />
      ) : (
        <Center
          width="100%"
          color="#ddd"
          fontWeight="bold"
          height="180px"
          bgColor="#ededed"
        >
          No image
        </Center>
      )}
      <Box p="15">
        <Box fontSize="17px" fontWeight="bold">
          {missionName}
        </Box>
        <Box fontSize="12px" color="#b3afaf" fontWeight="bold">
          {rocketName}
        </Box>
        <Box fontSize="11px">{details ? details : "No details..."}</Box>
      </Box>
    </Box>
  );
};

export default Card;
