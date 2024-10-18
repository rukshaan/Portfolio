import Hero from './Components/Hero/Hero';
import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AboutMe from './Components/About/AboutMe';
import Services from './Components/Services/Services';
import { MyWork } from './Components/MyWork/MyWork';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';


function App() {
  

  return (
    <>
   
    <Navbar/>
    <Hero/>
    <AboutMe/>
     <Services/>
     <MyWork/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
