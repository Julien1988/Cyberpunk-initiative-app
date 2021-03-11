import React from 'react';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
function Home({punks}) {
  return (
    <div className="punks-container">
      <h1>Punks</h1>
      <div className="grid wrapper">
        {punks.map(punk => {
          return (
            <div key={punk._id}>
              <Card>
                <Card.Content>
                  <Card.Header>
                    <Link href={`/${punk._id}`}>
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
}
Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/punks');
  const { data } = await res.json();

  return {punks: data} 
}

export default Home;