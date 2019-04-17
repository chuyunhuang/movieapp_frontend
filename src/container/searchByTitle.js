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
      searchedMovie: [],
      error: '', 
    }
  }

  componentDidMount(){
    axios({
      url: 'http://localhost:4200/movie', 
      method: 'get'
    })
    .then((data)=>{
      this.setState({movie: data.data})
    })

  }

  handleChange = (e)=>{
    this.setState({
      query: e.target.value
    })
  }

  
  handleClick = (e) =>{
    e.preventDefault()

    const filtered = this.state.movie.filter((e)=>{
      const isTrue = e.title.toLowerCase().includes(this.state.query.toLowerCase())
      if (isTrue){
        console.log(e)
        return e
      }
    })
    this.setState({
      searchedMovie: filtered
    })
  } 


  render(){
    
    return(
    <>
    <div className="input-wrapper">
      <input type="text" placeholder="search by title" onChange= {this.handleChange}/>
      <button onClick={this.handleClick}>Search</button>
    </div>
    <div className="movie-card-wrapper">
        {
          this.state.searchedMovie.map((e, i)=>{
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