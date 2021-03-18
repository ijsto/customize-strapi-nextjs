import { gql } from '@apollo/client';

const FIRST_MT = gql`
  mutation FIRST_MT(
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

export default FIRST_MT;
