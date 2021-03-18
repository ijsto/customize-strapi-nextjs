import { createGlobalStyle } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';

import { useApollo } from '../lib/apolloClient';

import DefaultLayout from '../layouts/DefaultLayout';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  a {
    color: #2D8AC4;
    transition: 0.3s all;
  }
  a:hover {
    color: #E70805;
  }
  body {
    background: #f7f7f7;
    color: #333644;
    font-family: 'Space Mono', sans-serif;
    margin: 0;
    min-height: 100vh;
    padding: 0;
    padding-top: 64px;
    position: relative;
  }
  code {
    background-color: rgba(202,234,250, 0.5);
    border-radius: 3px;
    font-size: 85%;
    margin: 0;
    padding: 0.2em 0.4em;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Source Sans Pro', sans-serif;
    margin-top: 1em;
    color: #4889BF;
    font-weight: 600;
    text-shadow: 2px -1px 0 #D0E9F8, 1px -1px 0 #D0E9F8, -1px 1px 0 #D0E9F8,
      1px -2px 0 #D0E9F8;
  }
  h1 {
    font-size: 3.5em;
    letter-spacing: -3px;
    @media screen and (max-width: 580px) {
      font-size: 1.5em;
      letter-spacing: -1px;
    }
  }
  h2 {
    font-size: 2.25em;

  }
  h3 {
    font-size: 1.75em;
    letter-spacing: 1px;
  }
  h4,
  h5,
  h6 {
    text-shadow: 0px -2px 0 #fff, 0px -0px 0 #fff, -1px 0px 2 #fff,
      0px 1px 0 #fff;
  }
  input, textarea {
    background: white;
    border: 0;
    border: 2px solid;
    border-radius: 2px;
    border-color: #FDBF57;
    color: rgb(0, 0, 0);
    font-family: 'Space Mono', sans-serif;
    font-size: 20px;
    line-height: 1.3;
    margin: 0px;
    max-width: 100%;
    outline: none;
    padding: 16px 20px;
    transition: 0.125s all;
    width: 100%;
    &:hover {
      border-color: black;
    }
    &:focus {
      background-color: rgb(255, 255, 255);
      color: #CD0200;
      box-shadow: rgb(187, 187, 187) 0px 0px 5px 2px;
      border-color: #3568A2;
    }
  }
`;

const App = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps);
  const Layout = Component.Layout || DefaultLayout;

  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
        <GlobalStyle />
      </Layout>
    </ApolloProvider>
  );
};

export default App;
