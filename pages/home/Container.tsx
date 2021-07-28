import { Card } from "./components";
import {
  Container,
  Box,
  SimpleGrid,
  Input,
  Image,
  Center,
} from "@chakra-ui/react";
import { useLazyQuery } from "@apollo/client";
import { LAUNCHES_PAST_SEARCH_QUERY } from "./querys";

// TODO: Add correctly proptypes.
type HomeProps = {
  launchesPast?: [];
};

// TODO: Manage the differents states loading, error.
const Home = ({ launchesPast }: HomeProps) => {
  const [runQuery, { data, loading, error }] = useLazyQuery(
    LAUNCHES_PAST_SEARCH_QUERY
  );

  const filteredData = data ? data.launchesPast : launchesPast;

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
          onChange={(e) =>
            runQuery({
              variables: { filter: e.target.value },
            })
          }
        />
      </Box>

      {loading ? (
        <Center h="100vh" width="100%">
          <Image src="https://i.gifer.com/PSc.gif" />
        </Center>
      ) : error ? (
        <Box color="red">{error}</Box>
      ) : (
        <SimpleGrid columns={[1, 3, 4]} spacing="15px">
          {" "}
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
      )}
    </Container>
  );
};

export default Home;
