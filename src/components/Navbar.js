import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    let location = useLocation();

    return (< div >
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <div className="container-fluid" >
                <Link className="navbar-brand"
                    to="/" > iTaskManager </Link>
                <button className="navbar-toggler" type="button" >
                    <span className="navbar-toggler-icon" > </span>
                </button >
                <div className="collapse navbar-collapse" id="navbarNavDropdown" >
                    <ul className="navbar-nav" >
                        <li className="nav-item" >
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                                to="/" > Home </Link> </li >
                        <li className="nav-item" >
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
                                to="/about" > About </Link> </li >

                    </ul>
                    <div className="d-flex justify-content-end">
                    <a class="btn btn-primary" href="/login" role="button">Login</a>
                    <a class="btn btn-primary" href="/signup" role="button">Signup</a>
                    </div>
                </div >
            </div>
        </nav >
    </div >
    )
}