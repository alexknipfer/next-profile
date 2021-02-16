import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'next-themes';
import { useApollo } from '@/lib/apolloClient';

import '@/styles/global.css';
import '@/styles/tailwind.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
      </Head>
      <ApolloProvider client={apolloClient}>
        <SWRConfig
          value={{
            fetcher: (resource, init) =>
              fetch(resource, init).then((res) => res.json()),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
