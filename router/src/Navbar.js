import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg" style={{backgroundColor:"yellow"}}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img src="http://logos-download.com/wp-content/uploads/2016/11/Golds_Gym_logo_logotype.png" alt="Gold's Gym Logo" style={{ width: "100px" }} />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav" style={{fontSize:"30px",fontWeight:"700"}}>
                            <li style={{fontFamily:"cursive"}} className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li style={{fontFamily:"cursive"}}className="nav-item">
                                <NavLink className="nav-link" to="/Service">About</NavLink>
                            </li>
                            <li style={{fontFamily:"cursive"}}className="nav-item">
                                <NavLink className="nav-link" to="/Gallery">Gallery</NavLink>
                            </li>
                            <li style={{fontFamily:"cursive"}}className="nav-item">
                                <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
