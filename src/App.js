import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';

//pages
import NavBar from './component/navbar';
import Home from './component/home';
import MoviePage from './container/movie';
import Genre from './container/genre';
import SingleMoviePage from './container/singleMoviePage';

class App extends Component {
  render() {
    return (

      <HashRouter>
        <NavBar />
        <Switch>
          
          <Route path="/" exact component ={Home} />
          <Route path="/movie" exact strict component ={MoviePage} />
          <Route path="/movie/byGenre" exact strict component={Genre} />
          <Route path="/movie/:title" exact component= {SingleMoviePage} />
         
        </Switch>
      </HashRouter>
     
    );
  }
}

export default App;

