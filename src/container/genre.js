import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import MovieCard from '../container/movieCard';

class Genre extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      movie: [],
      genre: [],
      error: false
    }
  }

  componentDidMount(){
    axios({
      url: 'http://localhost:4200/movie', 
      method: 'get'
    })
    .then((data)=>{
      this.setState({
        movie: data.data
      })
        })
      axios({
        url: 'http://localhost:4200/genre', 
        method: 'get'
      })
      .then((data)=>{
        this.setState({genre: data.data})
      })
  }

  handleGenre = (e) =>{
    const genreId= e.target.value

    axios({
      url:`http://localhost:4200/movie/genre/${genreId}`,
      method: 'get'
    })
    .then((data)=>{
      this.setState({movie: data.data})
    })

  }

  



  render(){
    const {movie, genre} = this.state
    return(
      <div className="entire-page-wrapper">
        <div className="header">This is the Genre Page</div>
        <div className="input-wrapper">
          <select id="inputState" className="form-control" defaultValue='Choose...' onChange={this.handleGenre}>
              <option>Choose...</option>
              {
                genre.map((e, i) => {
                  return <option key={i} value={e.id}>{e.genre_name}</option>
                })
              }
            </select>
        </div>
        

      <div className="movie-card-wrapper">
         {
          movie.map((e, i)=>{
            return (
             
                <div className="single-movie-card" key={i}>
                <Link to={`/movie/${e.id}`} style={{textDecoration: 'none', color: 'black'}} >
                  <MovieCard 
                  title = {e.title} 
                  image ={e.image_url}
                  genre= {e.genre_name}
                  star = {e.stars} />
                  </Link>
                </div>
            ) 
          })
      } 
      </div>
      </div>
    )
  }
}

export default Genre