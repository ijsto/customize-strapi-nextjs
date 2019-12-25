import App from 'next/app';
import { createGlobalStyle } from 'styled-components';
import { ApolloProvider } from '@apollo/react-hooks';

import withData from '../lib/apollo';

import DefaultLayout from '../layouts/DefaultLayout';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  a {
    color: #333644;
    transition: 0.3s all;
  }
  a:hover {
    color: orange
  }
  body {
    color: #333644;
    padding: 0;
    margin: 0;
    font-family: 'Space Mono', sans-serif;
    background: #f7f7f7;
    min-height: 100vh;
    padding-top: 64px;
    position: relative;
  }
  code,pre {
    * {
        line-height: 1.5;
    }
    padding: 0.2em 0.4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(27, 31, 35, 0.05);
    border-radius: 3px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Source Sans Pro', sans-serif;
    margin-top: 1em;
    color: #00474b;
    font-weight: 600;
    text-shadow: 2px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff,
      1px -2px 0 #fff;
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
    border-color: rgb(209, 218, 225);
    border: 2px solid;
    border-radius: 2px;
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    font-family: 'Space Mono', sans-serif;
    font-size: 20px;
    -webkit-appearance: none;
    line-height: 1.3;
    margin: 0px;
    max-width: 100%;
    outline: none;
    padding: 16px 20px;
    width: 100%;
    &:hover {
      border-color: rgb(0, 0, 0);
    }
    &:focus {
      background-color: rgb(255, 255, 255);
      color: #FF6666;
      box-shadow: rgb(187, 187, 187) 0px 0px 5px 2px;
      border-color: #8a74d0;
    }
  }
  label {
    margin: 0.7em;
    font-size: 0.75em;
  }
  pre {
    padding: 2em !important;
  }
`;

class AppWrapper extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    // expose query to the user
    pageProps.query = ctx.query;

    return { pageProps };
  }

  render() {
    const { apollo, Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
      <ApolloProvider client={apollo}>
        <Layout>
          <Component {...pageProps} />
          <GlobalStyle />
        </Layout>
      </ApolloProvider>
    );
  }
}

export default withData(AppWrapper);
