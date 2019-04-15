import React from 'react';

const MovieCard = (props) =>{
  return (
    <>
      <div className='title'>{props.title}</div>
      <img className='poster' src={props.image} style={{height: '300px'}} alt=''/>
      <div className="text">Genre: {props.genre}</div>
      <div className="text">Rating: {props.star}</div>
    </>
  )
}

export default MovieCard ;