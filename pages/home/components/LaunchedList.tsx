import { animated, useTransition } from "react-spring";
import Card from "./Card";
import { SimpleGrid } from "@chakra-ui/react";

//TODO: Put correct types.
type LaunchedListProps = {
  missions: [];
};

const LaunchedList = ({ data }: LaunchedListProps) => {
  const transitions = useTransition(data, {
    from: { opacity: 0, transform: "translateY(-20px)" },
    enter: { opacity: 1, transform: "translateY(0px)" },
    leave: { opacity: 0, transform: "translateY(20px)" },
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
