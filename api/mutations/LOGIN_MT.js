import { gql } from '@apollo/client';

const LOGIN_MT = gql`
  mutation {
    login(input: { identifier: "scott@ijs.to", password: "Test1234" }) {
      jwt
      user {
        id
        username
      }
    }
  }
`;

export default LOGIN_MT;
