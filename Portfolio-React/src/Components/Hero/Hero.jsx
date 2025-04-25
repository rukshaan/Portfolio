import React from 'react';
import './Hero.css';
import profileImg from "../../assets/profile.jpg";
import '../Navbar/Navbar.css';
import logo from '../../assets/logo.svg';
import {Link} from 'react-scroll';
import pdf_file from '../../assets/Rukshan_Resume.pdf';
const Hero = () => {
  return (
    <div className='hero' id='home'>
        <img src={profileImg} alt='profile' className='profile'/>
        <h1>I am<span> Jeyarajah Rukshan ,</span>  Fullstack Developer Based In Sri Lanka</h1>
       <p>I am a Fullstack Developer from,Jaffna Sri Lanka .I am searching for an Intenship program</p>
       <div className='hero-action' >
        <div className='hero-connect'><Link smooth={true} offset={-50} duration={500} to="contact"> Connect Me</Link></div>
        {/* <Link smooth={true} offset={-50} duration={500} to="contact"> Connect Me</Link> */}
        <a href={pdf_file} target="_blank" rel="noopener noreferrer">
        <div className='hero-resume'>  MyResume</div></a>
       </div>
    </div>
  )
}

export default Hero