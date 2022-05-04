import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Calculator from './components/calculator/Calculator';
import Nav from './components/navBar/Nav';
import Quote from './components/quote/Quote';

const App = () => (
  <Router>
    <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </main>
  </Router>
);

export default App;
