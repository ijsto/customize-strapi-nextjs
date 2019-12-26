import gql from 'graphql-tag';

const FIRST_MT = gql`
  mutation($title: String!, $body: String!) {
    createPost(input: { data: { title: $title, body: $body } }) {
      post {
        id
        title
        body
      }
    }
  }
`;

export default FIRST_MT;
