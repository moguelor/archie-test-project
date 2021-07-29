import { client } from "../packages/configs/apolloConfig";
import { LAUNCHES_PAST_SEARCH_QUERY } from "../packages/shared/querys";
import { useState } from "react";
import {
  LaunchedList,
  SearchInput,
  Loader,
  ErrorMessage,
} from "../packages/shared/components";
import { Container } from "@chakra-ui/react";
import { useLazyQuery } from "@apollo/client";
import { LaunchedItem } from "../packages/shared/types";

type HomeProps = {
  launchesPast?: LaunchedItem[];
};

const Home = ({ launchesPast }: HomeProps) => {
  const [text, setText] = useState("");
  const [runQuery, { data, loading, error }] = useLazyQuery(
    LAUNCHES_PAST_SEARCH_QUERY
  );

  const filteredData = data ? data.launchesPast : launchesPast;

  const handleSubmit = (e: React.FormEvent) => {
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
      <SearchInput
        handleSubmit={handleSubmit}
        handleChange={(text: string) => setText(text)}
      />

      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMessage text={error && error.message} />
      ) : (
        <LaunchedList data={filteredData} />
      )}
    </Container>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: LAUNCHES_PAST_SEARCH_QUERY,
  });

  return {
    props: {
      launchesPast: data.launchesPast,
    },
  };
}

export default Home;
