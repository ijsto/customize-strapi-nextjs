import gql from 'graphql-tag';

const FIRST_MT = gql`
  mutation {
    createPost(
      input: {
        data: {
          title: "First Post"
          body: "This is the body of the first post"
        }
      }
    ) {
      post {
        id
        title
        body
      }
    }
  }
`;

export default FIRST_MT;
