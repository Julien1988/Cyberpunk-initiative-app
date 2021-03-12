import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import { useUser } from '@auth0/nextjs-auth0';



function Game({ punks }) {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if(!user) return <div><h1>You need to be connected</h1></div>
  if (error) return <div>{error.message}</div>;
  // const numbers = [1, 2, 3, 4, 5];
  // const doubled = numbers.map((number) => number * 2);
  // const punksTest = punks
  // console.log(punksTest)


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
                    <h2>{punk.name}</h2>
                    <h3>{punk.initiative}</h3>
                    {punk.is_player
                      ? <h4> PJ </h4>
                      : <h4> PNJ </h4>
                    }
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
  const { id } = params.query
  const res = await fetch(`http://localhost:3000/api/punks/byuserid/${id}`);
  const { data } = await res.json();
  return {punks: data} 
}

export default Game;

