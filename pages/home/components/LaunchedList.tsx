import Card from "./Card";
import { SimpleGrid } from "@chakra-ui/react";
import { LaunchedItem } from "../types";
import EmptyMessage from "./EmptyMessage";
import Transition from "./Transition";

type LaunchedListProps = {
  data: LaunchedItem[];
};

const LaunchedList = ({ data }: LaunchedListProps) => {
  if (data.length === 0) {
    return (
      <EmptyMessage text="Oops, nothing to see! try searching another mission." />
    );
  }

  return (
    <SimpleGrid columns={[1, 3, 4]} spacing="15px">
      <Transition data={data}>
        {({
          styles,
          item: {
            id,
            mission_name,
            rocket: { rocket_name },
            details,
            links: { flickr_images, video_link },
          },
        }) => (
          <Card
            id={id}
            missionName={mission_name}
            rocketName={rocket_name}
            details={details}
            image={flickr_images[0]}
            animatedStyles={styles}
            link={video_link}
          />
        )}
      </Transition>
    </SimpleGrid>
  );
};

export default LaunchedList;
