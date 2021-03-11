import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import 'semantic-ui-css/semantic.min.css'

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}