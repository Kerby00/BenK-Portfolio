import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AboutMe from './components/pages/aboutme';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Resume from './components/pages/resume';
import Footer from './components/footer';



function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route index element={<AboutMe />} />
          <Route path='Portfolio' element={<Portfolio />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Resume' element={<Resume />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
