import { Card } from "./components";
import { Container, Box, SimpleGrid, Input } from "@chakra-ui/react";
import { useLazyQuery } from "@apollo/client";
import { LAUNCHES_PAST_SEARCH_QUERY } from "./querys";

/**
 * > 360px sm
 * > 480px md
 * > 768px
 * > 992px
 * > 1200
 */

// TODO: Add correctly proptypes.
type HomeProps = {
  launchesPast?: [];
};

// TODO: Manage the differents states loading, error.
const Home = ({ launchesPast, ...rest }: HomeProps) => {
  const [runQuery, { data, loading, error }] = useLazyQuery(LAUNCHES_PAST_SEARCH_QUERY);
  
  const filteredData = data ? data.launchesPast : launchesPast;

  console.log(filteredData);

  return (
    <Container
      paddingTop="35px"
      paddingBottom="35px"
      maxW="110ch"
      centerContent
    >
      <Box width="100%">
        <Input
          marginBottom="25px"
          placeholder="Write here to find a mission..."
          bgColor="#FFF"
          onChange={(e) => runQuery({
            variables: { filter: e.target.value }
          })}
        />
      </Box>
      <SimpleGrid columns={[1, 3, 4]} spacing="15px">
        {filteredData?.map(
          ({
            id,
            mission_name,
            rocket: { rocket_name },
            details,
            links: { article_link, flickr_images },
          }) => (
            <Card
              key={id}
              missionName={mission_name}
              rocketName={rocket_name}
              details={details}
              image={flickr_images[0]}
              link={article_link}
            />
          )
        )}
      </SimpleGrid>
    </Container>
  );
};

export default Home;
