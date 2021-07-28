import { useState } from "react";
import { LaunchedList } from "./components";
import { Container, Box, Input, Image, Center, Button } from "@chakra-ui/react";
import { useLazyQuery } from "@apollo/client";
import { LAUNCHES_PAST_SEARCH_QUERY } from "./querys";

// TODO: Add correctly proptypes.
type HomeProps = {
  launchesPast?: [];
};

// TODO: Manage the differents states loading, error.
const Home = ({ launchesPast }: HomeProps) => {
  const [text, setText] = useState("");
  const [runQuery, { data, loading, error }] = useLazyQuery(
    LAUNCHES_PAST_SEARCH_QUERY
  );

  const filteredData = data ? data.launchesPast : launchesPast;
  //TODO: Put the correct types.
  const handleSubmit = (e: any) => {
    e.preventDefault();
    runQuery({
      variables: { filter: text },
    });
  };

  return (
    <Container
      paddingTop="35px"
      paddingBottom="35px"
      maxW="110ch"
      centerContent
    >
      <Box width="100%">
        <form onSubmit={handleSubmit}>
          <Input
            marginBottom="25px"
            placeholder="Write here to find a mission and then press enter..."
            bgColor="#FFF"
            onChange={(e) => setText(e.target.value)}
          />
        </form>
      </Box>

      {loading ? (
        <Center h="100vh" width="100%">
          <Image src="https://i.gifer.com/PSc.gif" />
        </Center>
      ) : error ? (
        <Box color="red">{error}</Box>
      ) : (
        <LaunchedList data={loading ? [] : filteredData} />
      )}
    </Container>
  );
};

export default Home;
