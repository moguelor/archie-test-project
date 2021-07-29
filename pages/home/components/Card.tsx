import { Box, Image } from "@chakra-ui/react";
import { animated } from "react-spring";
import PlaceholderImage from "./PlaceholderImage";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Description from "./Description";

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
          <PlaceholderImage />
        )}
        <Box p="15">
          <Title text={missionName} />
          <Subtitle text={rocketName} />
          <Description text={details ? details : "No details..."} />
        </Box>
      </animated.div>
    </Box>
  );
};

export default Card;
