import React, { Component } from 'react';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';

//pages
import NavBar from './component/navbar';
import Home from './component/home';
import MoviePage from './container/movie';
import Genre from './container/genre';
import SearchByTitle from './container/searchByTitle';

class App extends Component {
  render() {
    return (
      <HashRouter>
          <NavBar />
        <Switch>
          <Route path="/" exact component ={Home} />
          <Route path="/movie/" exact component ={MoviePage} />
          <Route path="/movie/:search" exact component ={SearchByTitle} />
          <Route path="/movie/byGenre" exact component ={Genre} />
        </Switch>
      </HashRouter>
     
    );
  }
}

export default App;

