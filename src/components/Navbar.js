import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    let location = useLocation();
    useEffect(() => {
        console.log(location.pathname)
    }, [location]);

    return ( < div >
        <
        nav className = "navbar navbar-expand-lg navbar-dark bg-dark" >
        <
        div className = "container-fluid" >
        <
        Link className = "navbar-brand"
        to = "/" > iTaskManager < /Link>  <button className = "navbar-toggler" type = "button" > <
        span className = "navbar-toggler-icon" > < /span> </button >
        <
        div className = "collapse navbar-collapse"
        id = "navbarNavDropdown" >
        <
        ul className = "navbar-nav" >
        <
        li className = "nav-item" >
        <
        Link className = { `nav-link ${location.pathname==="/"?"active":""}` }
        to = "/" > Home < /Link>  <
        /li>  <
        li className = "nav-item" >
        <
        Link className = { `nav-link ${location.pathname==="/about"?"active":""}` }
        to = "/about" > About < /Link> </li > < /ul> </div > < /div> </nav > < /div >
    )
}