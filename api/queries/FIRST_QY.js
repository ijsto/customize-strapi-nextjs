import gql from 'graphql-tag';

const FIRST_QY = gql`
  query FirstQuery {
    posts {
      id
      body
      slug
      title
    }
  }
`;

export default FIRST_QY;
