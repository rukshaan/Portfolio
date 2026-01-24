import Hero from './Components/Hero/Hero';
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import AboutMe from './Components/About/AboutMe';
import Services from './Components/Services/Services';
import { MyWork } from './Components/MyWork/MyWork';
import { Contact } from './Components/Contact/Contact';
import { Footer } from './Components/Footer/Footer';
import SocialSidebar from './Components/SocialSidebar/SocialSidebar';


function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className={`app-container ${theme}`}>
      <Navbar theme={theme} />
      <Hero theme={theme} />
      <AboutMe theme={theme} />
      <Services />
      <MyWork />
      <Contact />
      <Footer />
      <SocialSidebar theme={theme} toggleTheme={toggleTheme} />
    </div>
  )
}

export default App
