import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const location = useLocation(); // Aktif olan sayfanın yolunu almak için

    return (
        <nav className="navbar">
            <NavLink 
                to="/" 
                className="nav-link" 
                activeClassName="active"
            >
                {/* Ana sayfada fa-lock-open, diğer sayfalarda fa-lock */}
                <i className={`fas ${location.pathname === '/' ? 'fa-lock-open' : 'fa-lock'}`}></i> Şifre Üret
            </NavLink>
            <NavLink to="/page1" className="nav-link" activeClassName="active">
                <i className="fas fa-tools"></i> SAP
            </NavLink>
            <NavLink to="/page2" className="nav-link" activeClassName="active">
                <i className="fas fa-gamepad"></i> Sayfa 2
            </NavLink>
            <NavLink to="/page3" className="nav-link" activeClassName="active">
                <i className="fas fa-clipboard-list"></i> To-Do
            </NavLink>
        </nav>
    );
};

export default Navbar;
