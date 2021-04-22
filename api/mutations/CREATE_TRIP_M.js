import { gql } from '@apollo/client';

const CREATE_TRIP_M = gql`
  mutation CREATE_TRIP_M(
    $title: String!
    $destination: String!
    $isCovidFree: Boolean!
  ) {
    createTrip(
      input: {
        data: {
          title: $title
          destination: $destination
          isCovidFree: $isCovidFree
        }
      }
    ) {
      trip {
        id
      }
    }
  }
`;

export default CREATE_TRIP_M;
