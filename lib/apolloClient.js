import Cookies from 'js-cookie';
import merge from 'deepmerge';
import isEqual from 'lodash/isEqual';
import fetch from 'isomorphic-unfetch';
import { ApolloClient, ApolloLink, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { InMemoryCache } from '@apollo/client/cache';
import { useMemo } from 'react';

const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

let apolloClient;

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('jwt');

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  credentials: 'same-origin',
  fetch,
  uri: 'http://localhost:1337/graphql',
});

const link = ApolloLink.from([authLink, httpLink]);

function createApolloClient() {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link,
    ssrMode: typeof window === 'undefined',
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  if (initialState) {
    const existingCache = _apolloClient.extract();

    const data = merge(initialState, existingCache, {
      arrayMerge: (destinationArray, sourceArray) => [
        ...sourceArray,
        ...destinationArray.filter(d => sourceArray.every(s => !isEqual(d, s))),
      ],
    });

    _apolloClient.cache.restore(data);
  }

  if (typeof window === 'undefined') return _apolloClient;
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(pageProps) {
  const state = pageProps[APOLLO_STATE_PROP_NAME];
  const store = useMemo(() => initializeApollo(state), [state]);
  return store;
}
