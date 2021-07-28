import { gql } from "@apollo/client";

export const LAUNCHES_PAST_SEARCH_QUERY = gql`
  query launchesPastSearchQuery($filter: String! = "") {
    launchesPast(limit: 10, find: { mission_name: $filter}) {
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
`;
