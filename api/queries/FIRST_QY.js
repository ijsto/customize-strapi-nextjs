import gql from 'graphql-tag';

const FIRST_QY = gql`
  query FirstQuery {
    posts {
      id
      title
      body
    }
  }
`;

export default FIRST_QY;
