import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <NavLink to="/" className="nav-link" activeClassName="active">
            <i className="fas fa-key"></i> Şifre Üret
        </NavLink>
        <NavLink to="/page1" className="nav-link" activeClassName="active">
            <i className="fas fa-file-alt"></i> Sayfa 1
        </NavLink>
        <NavLink to="/page2" className="nav-link" activeClassName="active">
            <i className="fas fa-file-alt"></i> Sayfa 2
        </NavLink>
        <NavLink to="/page3" className="nav-link" activeClassName="active">
            <i className="fas fa-file-alt"></i> Sayfa 3
        </NavLink>
    </nav>
);

export default Navbar;
