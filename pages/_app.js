import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'


export default function App({ Component, pageProps }) {
  return (
    <Layout>

    <UserProvider>
      <Component {...pageProps} />
      </UserProvider>
    </Layout>
      
  );
}