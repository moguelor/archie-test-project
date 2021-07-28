
import * as home from './home';
import { gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
});

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
    {
      launchesPast(limit: 10) {
        id
        mission_name
        details
        rocket {
          rocket_name
        }
        links {
          video_link
          flickr_images
        }
      }
    }
    `,
  });

  return {
    props: {
      launchesPast: data.launchesPast,
    },
 };
}
export default home.Container;