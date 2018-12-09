import React from 'react';


const Card = ({ username, email, id }) => {
  return (
    <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
      <h2>{username}</h2>
      <p className="EmailFont">{email}</p>
    </div>
  )
   
}



export default Card;