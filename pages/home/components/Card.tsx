import { Box, Image, Center } from "@chakra-ui/react";
import { animated } from "react-spring";

type CardProps = {
  id: string;
  missionName: string;
  rocketName: string;
  details: string;
  image: string;
  animatedStyles?: any;
};

const Card = ({
  id,
  missionName,
  rocketName,
  details,
  image,
  animatedStyles,
}: CardProps) => {
  return (
    <Box
    maxW="sm"
    borderRadius="lg"
    overflow="hidden"
    bgColor="#FFF"
    borderWidth="1px"
    boxShadow="0px 2px 5px #edeef0"
  >
    <animated.div key={id} style={animatedStyles}>

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
    </animated.div>
    </Box>

  );
};

export default Card;
