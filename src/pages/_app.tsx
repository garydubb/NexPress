import client from '@/utils/apollo/ApolloClient';
import { AppContextProvider } from '@/utils/context/AuthProvider';
import { SessionContextProvider } from '@/utils/context/SessionProvider';
import ShopProvider from '@/utils/context/ShopProvider';
import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/app';
import React from 'react';
import '../styles/index.css';
import '../styles/main.css';
import Preloader from '@/components/Atoms/Preloader';
import Meta from '@/components/themes/Common/Meta';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ApolloProvider client={client}>
        <SessionContextProvider>
          <AppContextProvider >
            <ShopProvider value={null}>
              <Preloader />
              <Meta />
              <Component {...pageProps} />
            </ShopProvider>
          </AppContextProvider>
        </SessionContextProvider>
      </ApolloProvider>
    </React.StrictMode>
  );
}

export default MyApp;
