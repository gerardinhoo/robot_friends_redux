import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {
  const cardArrays = robots.map((robot, i) => {
    return  (
      <Card
        key={i}
        id={robots[i].id}
        username={robots[i].username}
        email={robots[i].email}
      />
    );
  })
  
  return (
    <div>
      {cardArrays}
    </div>
  )
}


export default CardList;