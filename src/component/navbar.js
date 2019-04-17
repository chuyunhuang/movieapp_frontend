import React from 'react';
import {NavLink} from 'react-router-dom';
import {Nav, 
  NavItem} from 'reactstrap';
import './style/navbar.css'

const NavBar = (props) =>{
  return(
    
    <div>
    <Nav className="navbar-wrapper" color="light" light expand="md">
      <NavLink to="/" style={{textDecoration:'none'}} exact activeStyle={{color: 'red'}} className="nav-header">Yun's Movie App</NavLink>
      <NavItem>
        <NavLink to="/movie" style={{textDecoration:'none'}} exact activeStyle={{color: 'red'}} className="nav-item" >All Movies</NavLink>
      </NavItem>
      <NavItem>
        <NavLink to="/movie/byGenre" style={{textDecoration:'none'}} exact activeStyle={{color: 'red'}} className="nav-item" >By Genre</NavLink>
      </NavItem>  
    </Nav>
    </div>
  )
}

export default NavBar