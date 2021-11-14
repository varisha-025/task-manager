import React from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";

export default function Navbar() {
    let location = useLocation();
    let history = useHistory();
    const logout = () => {
        localStorage.removeItem("token");
        history.push("/login")
    }
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

                </div >
            </div>
            {!localStorage.getItem('token') ? <div className="d-flex justify-content-end">
                <Link className="btn btn-primary mx-2" to="/login" role="button">Login</Link>
                <Link className="btn btn-primary mx-2" to="/signup" role="button">Signup</Link>
            </div> : <Link className="btn btn-primary" onClick={logout} to="/login" role="button">Logout</Link>}

        </nav >
    </div >
    )
}