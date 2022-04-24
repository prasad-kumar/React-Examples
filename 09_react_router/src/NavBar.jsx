import React from 'react';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    let name = 'Prasad Kumar';
    let age  = 24;
     
    return ( 
        <>
        <NavLink  to='/'>Home</NavLink><br />
        <NavLink  to='/contact'>Contact</NavLink><br />
        <NavLink  to='/about'>About</NavLink><br />
        <NavLink  to={`/user/${name}/${age}`}>User</NavLink>
        </>
     );
}
 
export default NavBar; 