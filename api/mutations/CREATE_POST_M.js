import { gql } from '@apollo/client';

const CREATE_POST_M = gql`
  mutation CREATE_POST_M($title: String!, $body: String) {
    createPost(input: { data: { title: $title, body: $body } }) {
      post {
        id
      }
    }
  }
`;

export default CREATE_POST_M;
