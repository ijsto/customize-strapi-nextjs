import { gql } from '@apollo/client';

const FIRST_QY = gql`
  query FIRST_QY {
    trips(sort: "created_at:DESC") {
      id
      traveller {
        id
        email
      }
      isTravellerCovidFree
      slug
      title
    }
  }
`;

export default FIRST_QY;
