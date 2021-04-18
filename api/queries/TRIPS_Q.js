import { gql } from '@apollo/client';

const TRIPS_Q = gql`
  query TRIPS_Q {
    trips(sort: "created_at:DESC") {
      id
      traveller {
        id
        username
        email
      }
      isTravellerCovidFree
      title
    }
  }
`;

export default TRIPS_Q;
