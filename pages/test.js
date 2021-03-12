import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import { useUser } from '@auth0/nextjs-auth0';
import {

} from '@auth0/nextjs-auth0';


function Game({ punks }) {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if(!user) return <div><h1>You need to be connected</h1></div>
  if (error) return <div>{error.message}</div>;


  return (
    user && (
    <div className="punks-container">

      
      <div className="grid wrapper">
        {punks.map(punk => {
          return (
            <div key={punk._id}>
              
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/api/punks/${punk._id}`}>
                      <a>{ punk.name }</a>
                    </Link>
                  </Card.Header>
                </Card.Content>
              </Card>
            </div>
          )
        })}
      </div>
      </div>
    )
  )
}

Game.getInitialProps = async (params) => {

  const res = await fetch('http://localhost:3000/api/punks');
 
  const { data } = await res.json();
  return {punks: data} 
}

export default Game;

