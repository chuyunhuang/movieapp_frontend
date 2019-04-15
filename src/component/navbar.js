import React from 'react';
import {Link} from 'react-router-dom';
import {Nav, 
  NavItem} from 'reactstrap';
import './style/navbar.css'

const NavBar = (props) =>{
  return(
    
    <div>
    <Nav className="navbar-wrapper" color="light" light expand="md">
      <Link to="/" className="nav-header">Yun's Movie App</Link>
      <NavItem>
        <Link to="/movie" className="nav-item" >All Movies</Link>
      </NavItem>
      <NavItem>
        <Link to="/movie/byGenre" className="nav-item" >By Genre</Link>
      </NavItem>  
    </Nav>
    </div>
  )
}

export default NavBar