import { gql } from '@apollo/client';

const FIRST_QY = gql`
  query FIRST_QY {
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

export default FIRST_QY;
