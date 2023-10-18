import React from "react";
import { Link } from "react-router-dom";
import { NavContainer } from "./NavBar.styled";



const NavBar=()=>{
    return(
        <NavContainer>
    <Link to="/Home">HOME</Link>
    <Link to="/AboutMe">About Me</Link>
    <Link to="/ContactMe">Contact Me</Link>
        </NavContainer>
    )
}
export default NavBar;