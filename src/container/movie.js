import React from 'react';
import './style/movie.css';
import axios from 'axios';

import SearchByTitle from './searchByTitle';
import MovieCard from '../container/movieCard';

class MoviePage extends React.Component{
  constructor(props){
    super(props)

    this.state={
      movie:[],
      query:""
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



  render(){
    return(
      <div className="entire-page-wrapper">
      <div className="header">This is the Movie Page</div>
        <SearchByTitle />
      <div className="movie-card-wrapper">
        {
          this.state.movie.map((e, i)=>{
            return (
              <div className="single-movie-card" key={i}>
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
      </div>
    )
  }
}

export default MoviePage;