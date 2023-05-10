import React, {useState, useLayoutEffect, useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import AboutMe from './components/pages/aboutme';
import Portfolio from './components/pages/portfolio';
import Contact from './components/pages/contact';
import Resume from './components/pages/resume';
import Footer from './components/footer';
import Intro from './components/intro';




function App() {
useLayoutEffect(() => {
  document.body.style.backgroundImage = "url('https://m.media-amazon.com/images/I/91bw0bqmvjL.jpg')";
})





const [intro, setIntro] = useState(true)
useEffect(() => {
  setTimeout(() => {
    setIntro(false)
  }, 17000)
}, [])
 
  return (
    <div>
{intro ? (<Intro/>):

      (<div>
      <Header />
      
        <Routes>
          <Route index element={<AboutMe />} />
          <Route path='Portfolio' element={<Portfolio />} />
          <Route path='Contact' element={<Contact />} />
          <Route path='Resume' element={<Resume />} />
        </Routes>
      
      <Footer />
      </div>)
  }
    </div>

  );
}

export default App;
