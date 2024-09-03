import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import GeneratePassword from './pages/GeneratePassword';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import './App.css';

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
