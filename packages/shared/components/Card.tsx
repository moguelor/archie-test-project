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
  link: string;
};

const Card = ({
  id,
  missionName,
  rocketName,
  details,
  image,
  animatedStyles,
  link,
}: CardProps) => {
  return (
    <Box
      href={link}
      target="_blank"
      as="a"
      maxW="sm"
      borderRadius="lg"
      overflow="hidden"
      bgColor="#FFF"
      borderWidth="1px"
      transition="transform .2s"
      _hover={{
        transform: "scale(1.03)",
        cursor: "pointer",
        boxShadow: "0px 2px 5px #edeef0",
      }}
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
