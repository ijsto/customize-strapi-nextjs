import { gql } from '@apollo/client';

const CREATE_POST_M = gql`
  mutation CREATE_POST_M(
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

export default CREATE_POST_M;
