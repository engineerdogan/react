import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
    <nav className="navbar">
        <NavLink to="/" className="nav-link" activeClassName="active">
            <i className="fas fa-key"></i> Şifre Üret {/* Ana sayfa için bir anahtar ikonu */}
        </NavLink>
        <NavLink to="/page1" className="nav-link" activeClassName="active">
            <i className="fas fa-tools"></i> SAP {/* SAP sayfası için bir alet ikonu */}
        </NavLink>
        <NavLink to="/page2" className="nav-link" activeClassName="active">
            <i className="fas fa-gamepad"></i> Sayfa 2 {/* Oyunlar veya eğlence ile ilgili bir gamepad ikonu */}
        </NavLink>
        <NavLink to="/page3" className="nav-link" activeClassName="active">
            <i className="fas fa-clipboard-list"></i> To-Do {/* Yapılacak işler ikonu */}
        </NavLink>
    </nav>
);

export default Navbar;
