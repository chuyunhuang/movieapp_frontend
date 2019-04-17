import React from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

class SearchByGenre extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      query: '',
      error:false,
    }
  }

  handleChange = (e) =>{

  }


  render(){
    return(
      <>
      <div className="input-wrapper">
        <input type="text" placeholder="search by genre" onChange= {this.handleChange} />        <button onClick={this.handleClick}>Search</button>
      </div>
      <div className="movie-card-wrapper">
          {/* {
            this.state.movie.map((e, i)=>{
              return (
                <div className="single-movie-card" key={i} style={{backgroundColor: 'black', color:'white'}}>
                  <MovieCard 
                  title = {e.title} 
                  image ={e.image_url}
                  genre= {e.genre_name}
                  star = {e.stars} />
                </div>
              ) 
            })
        } */}
        </div>
      
      
  
      </>)
  }
}

export default SearchByGenre;