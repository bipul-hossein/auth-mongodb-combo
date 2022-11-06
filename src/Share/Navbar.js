import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <Link to="/" className='nav_children'>Home</Link>
            <Link to="/login" className='nav_children'>Login</Link>
            <Link to="/signup" className='nav_children'>Registation</Link>
        </div>
    );
};

export default Navbar;