import { gql } from '@apollo/client';

const POSTS_Q = gql`
  query POSTS_Q {
    posts(sort: "created_at:DESC") {
      id
      body
      title
    }
  }
`;

export default POSTS_Q;
