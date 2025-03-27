import React from 'react';
import "./App.css";
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Qualification from './components/Qualification';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Scrollup from './components/Scrollup';
import Work from './components/Work';

const App = () => {
  return (
    <>
    <Header />
    <main className='main'>
    <Home />
    <About />
    <Skills />
    <Services />
    <Qualification />
    <Work />
    <Achievements />
    <Contact/>
    </main>
    <Footer />
    <Scrollup />    
    </>
  )
}

export default App