import React from 'react';
import './style/movie.css';
import axios from 'axios';

import MovieCard from '../container/movieCard';

class MoviePage extends React.Component{
  constructor(props){
    super(props)

    this.state={
      movie:[], 
      query: '',
      searchedMovie: [],
      error: false
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

  handleChange = (e) =>{
    this.setState({
      query: e.target.value
    })
  }
  

  handleClick = (e) =>{
    e.preventDefault()

    const filtered = this.state.movie.filter((e)=>{
      const isTrue = e.title.toLowerCase().includes(this.state.query.toLowerCase())
        if (isTrue){
          this.setState({
            error: false
          })
          console.log('searched', e)
          return e
        }
        else {
          this.setState({
            error: true
          })
        }
    })
    this.setState({
      searchedMovie: filtered,
    })
  }



  render(){
    console.log('HERE!', this.state.movie)
    const displayError = (this.state.error) ? 
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      <strong>OH NO!</strong> No matching movies...</div>: " "
      const diplayAllMovies = 
      <> 
      <div className="movie-card-wrapper">
        {
          this.state.movie.map((e, i)=>{
            return (
            
                <div className="single-movie-card" key={i}>
              
                  <MovieCard 
                  id = {e.id}
                  title = {e.title} 
                  image ={e.image_url}
                  genre= {e.genre_name}
                  star = {e.stars} />
              
                </div>
            ) 
          })
      }
      </div>
      </>
      const displaySearched = 
      <>
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
      </>

    return(
   
      <div className="entire-page-wrapper">
      {displayError}
        <div className="header">This is the Movie Page</div>
        <div className="input-wrapper">
          <input type="text" placeholder="search by title" onChange= {this.handleChange} value={this.state.query}/>
          <button onClick={this.handleClick}>Search</button>
    </div>

    {
      (this.state.searchedMovie.length === 0 ) ? 
      diplayAllMovies : displaySearched
    }

      </div>
    )
  }
}

export default MoviePage;