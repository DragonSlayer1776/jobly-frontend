import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className='navbar'>
            <a className="nav-link" href="/">Home</a>
            <a className="nav-link" href="/companies">Companies</a>
            <a className="nav-link" href="/jobs">Jobs</a>
            <a className="nav-link" href="/login">Login</a>
            <a className="nav-link" href="/signup">Sign Up</a>
        </nav>
    );
}

export default Navbar;
