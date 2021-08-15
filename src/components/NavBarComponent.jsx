import React from 'react';
import headerimage from '../images/home.png';
import {Navbar,NavLink} from 'react-bootstrap';
const NavBarComponent=()=> {
    return (
        <div>
            <Navbar className="container">
            <a href="/">
             <img className="head-img" src={headerimage} alt="logo"/>
         </a>
            <div className="menu">
                <ul>
                    <NavLink><a href="#about">About</a></NavLink>
                    <NavLink><a href="#skills">Skills</a></NavLink>
                    <NavLink><a href="#contact">Contact</a></NavLink>
                    <NavLink><a href="#projects">Project</a></NavLink>
                </ul>
            </div>
        </Navbar>
        </div>
    )
}

export default NavBarComponent
