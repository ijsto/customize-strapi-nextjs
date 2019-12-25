import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import fetch from 'isomorphic-unfetch';
import withApollo from 'next-with-apollo';

const GRAPHQL_URL = process.env.BACKEND_URL || 'http://localhost:1337/graphql';

const link = createHttpLink({
  fetch,
  uri: GRAPHQL_URL
});

// Docs: https://www.npmjs.com/package/next-with-apollo
export default withApollo(
  // also: { ctx, headers }
  ({ initialState }) =>
    new ApolloClient({
      link,
      cache: new InMemoryCache().restore(initialState || {})
    })
);
