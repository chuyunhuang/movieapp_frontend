import React from 'react';
import './style/singleMovie.css';
import axios from 'axios';

class SingleMoviePage extends React.Component{
  constructor(props){
    super(props)

    this.state={
      movieId: '',
      movie: {},
      comment: {},
      input:''
    }
  }

  componentDidMount(){
      axios.get(`http://localhost:4200/movie/${this.props.match.params.title}`)
      .then((response)=> {
        console.log('DATA!!!',response.data)
        this.setState({movie: response.data[0]})
      })
    
  
  }

  render(){
    const {movie}= this.state
    console.log('test', movie)
    
    return (
      <div className="entire-page">
        <div className="movie-info">
          <div className="info-item">Movie Title: {movie.title}</div>
          <div className="info-item">  
            <img src={movie.img_url} alt=" "/>
          </div>
          <div className="info-item">Movie Genre: {movie.genre_name}</div>
          <div className="info-item">Movie Rating: {movie.stars}</div>
        </div>
        <div className="rating-input">
          <div className="input-header">Comment
           <input type="text" placeholder="Leave your comment here.." />
          </div>
        </div>
      </div>
      
    )
  }
}

export default SingleMoviePage