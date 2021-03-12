import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import { useUser } from '@auth0/nextjs-auth0';
import {

} from '@auth0/nextjs-auth0';


function Home({ punks }) {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if(!user) return <div><h1>You need to be connected</h1></div>
  if (error) return <div>{error.message}</div>;


  return (
    user && (
    <div className="punks-container">
      <h1>Punks</h1>
        <h2> Hello {user.name}</h2>
        <h2> Id : {user.sub}</h2>

        <Link href={user.sub}>
          <a>See my game</a>
        </Link>
      
      </div>
    )
  )
}

export default Home;

