import React from 'react' 


export default function Navbar() {
    return (
        <div>
             <nav className="navbar navbar-dark bg-dark mb-10">
                <span className="navbar-brand mb-0 h1 mx-4"> LyricSearcher </span>
             
             <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            </nav>
        </div>
) 
}


 