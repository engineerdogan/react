import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  // Navbar, src/components altında
import GeneratePassword from './pages/GeneratePassword';  // GeneratePassword, src/pages altında
import Page1 from './pages/Page1';  // Page1, src/pages altında
import Page2 from './pages/Page2';  // Page2, src/pages altında
import Page3 from './pages/Page3';  // Page3, src/pages altında
import './App.css';  // App.css, src klasörü altında

const App = () => (
    <Router>
        <Navbar />
        <Routes>
            <Route path="/" element={<GeneratePassword />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
        </Routes>
    </Router>
);

export default App;
