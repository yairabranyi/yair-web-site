import React from "react"
import { NavLink } from "react-router-dom"
import styled from "styled-components/macro"

const Navigation = () => {
    return (
        <NavBar>
            <NavLink style={linkStile} to="/">Home</NavLink>
            <NavLink style={linkStile} to="/About">About</NavLink>
            <NavLink style={linkStile} to="/Skils">Skils</NavLink>
            <NavLink style={linkStile} to="/Contact">Contact</NavLink>
            <a  rel="noopener noreferrer" style={linkStile}  href="https://www.linkedin.com/in/yair-abranyi-a82850110/" target="_blank">In</a>
        </NavBar>
    )
}
export default Navigation


const linkStile = {
    color: "#08fdd8",
    textDecoration: 'none',
    
}


const NavBar = styled.div`
          display: flex;
          flex-direction: row;
          /* height: 100%; */
          width: 100%;
          justify-content: space-between;
          /* position: fixed; */
          font-size: 2rem;
          background: #181818;
          padding:  2rem 2rem; 
         
        `;

// .sidenav {
//     height: 100%; /* 100% Full-height */
//     width: 0; /* 0 width - change this with JavaScript */
//     position: fixed; /* Stay in place */
//     z-index: 1; /* Stay on top */
//     top: 0; /* Stay at the top */
//     left: 0;
//     background-color: #111; /* Black*/
//     overflow-x: hidden; /* Disable horizontal scroll */
//     padding-top: 60px; /* Place content 60px from the top */
//     transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
//   }


