import React from 'react'
import './Navbar.scss'
import logo from './logo.png'
export default function Navbar() {
    return <nav className="navbar">
    <img src={logo} alt='Musical instruments' />
    <ul className="nav-links">
    <li>
    <a href="/" className="nav-link">
    home
    </a>    
   </li>
   <li>
    <a href="/" className="nav-link">
   Store
    </a>    
   </li>
   <li>
    <a href="/" className="nav-link">
    Services and repairs
    </a>    
   </li>
   <li>
    <a href="/" className="nav-link">
    Rental
    </a>    
   </li>
   <li>
    <a href="/" className="nav-link">
   About us
    </a>    
   </li>
   <li>
    <a href="/" className="nav-link">
    Blog
    </a>    
   </li>
   <li>
    <a href="/" className="nav-link">
    Contact us
    </a>    
   </li>

    </ul>
   </nav>
     
    
}