import React from 'react';
import './Nav.scss';
import { NavLink, Link } from 'react-router-dom';
class Nav extends React.Component {
    render() {
        return (
            <div  className="topnav">
                <NavLink to="/" activeClassName="active" exact>HOME</NavLink>
                <NavLink to="/todos" activeClassName="active" >TODO</NavLink>
                <NavLink to="/about" activeClassName="active" >ABOUT</NavLink>
                <NavLink to="/users" activeClassName="active" >USER</NavLink>
            </div>
        )
    }
}

export default Nav