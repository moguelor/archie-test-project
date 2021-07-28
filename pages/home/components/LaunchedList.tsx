import { animated, useTransition } from "react-spring";
import Card from "./Card";
import { SimpleGrid, Center} from "@chakra-ui/react";

//TODO: Put correct types.
type LaunchedListProps = {
  missions: [];
};

const LaunchedList = ({ data }: LaunchedListProps) => {

  if(data.length === 0){
    return <Center fontSize="15px" color="#ddd" fontStyle="italic"> Oops, nothing to see! try searching another mission. </Center>
  }

  const transitions = useTransition(data, {
    from: { opacity: 0, transform: "translateY(-20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { display: "none" },
    keys: (item) => item.id,
  });

  return (
    <SimpleGrid columns={[1, 3, 4]} spacing="15px">
      {transitions(
        (
          styles,
          {
            id,
            mission_name,
            rocket: { rocket_name },
            details,
            links: { article_link, flickr_images },
          }
        ) => (
          <Card
            id={id}
            missionName={mission_name}
            rocketName={rocket_name}
            details={details}
            image={flickr_images[0]}
            animatedStyles={styles}
          />
        )
      )}
    </SimpleGrid>
  );
};

export default LaunchedList;
