import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

import MovieCard from '../container/movieCard';

class SearchByTitle extends React.Component{
  constructor(props){
    super(props)
    this.state={
      query: '', 
      movie: [],
      error: '', 
    }
  }


  handleChange = (e)=>{
    this.setState({
      query: e.target.value
    })
  }

  
  handleClick = () =>{
    axios({
      url: `http://localhost:4200/movie/${this.state.query}`, 
      method: 'get'
    }) 
    .then((data)=>{
      this.setState({
        movie: data.data,
      })
    })
    
  }


  render(){
    console.log('inside render', this.state)
    return(
    <>
    <div className="input-wrapper">
      <input type="text" placeholder="search by title" onChange= {this.handleChange}/>
      <button onClick={this.handleClick}>Search</button>
    </div>
    <div className="movie-card-wrapper">
        {
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
      }
      </div>
    
    

    </>)
  }
}

export default SearchByTitle;