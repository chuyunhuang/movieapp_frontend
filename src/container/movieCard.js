import React from 'react';
import {Link} from 'react-router-dom';

const MovieCard = ({id, title, image, genre, star}) =>{
  return (
  
    <Link to={`/movie/${id}`} style={{textDecoration: 'none', color: 'black'}} >
      <div className='title'>{title}</div>
      <img className='poster' src={image} style={{height: '300px'}} alt=''/>
      <div className="text">Genre: {genre}</div>
      <div className="text">Rating: {star}</div>
    </Link>

  )
}

export default MovieCard ;