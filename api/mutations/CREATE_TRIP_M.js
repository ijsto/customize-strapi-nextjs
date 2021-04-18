import { gql } from '@apollo/client';

const CREATE_TRIP_M = gql`
  mutation CREATE_TRIP_M(
    $title: String!
    $destination: String!
    $isTravellerCovidFree: Boolean!
  ) {
    createTrip(
      input: {
        data: {
          title: $title
          destination: $destination
          isTravellerCovidFree: $isTravellerCovidFree
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
