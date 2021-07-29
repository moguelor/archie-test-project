import * as home from "./home";
import { client } from "./apolloConfig";
import { LAUNCHES_PAST_SEARCH_QUERY } from "./home/querys";

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
export default home.Container;
