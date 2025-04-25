import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Destinations from './pages/Destinations/Destinations';
import Survey from './pages/Survey/Survey';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="content-wrapper">
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/survey" element={<Survey />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
