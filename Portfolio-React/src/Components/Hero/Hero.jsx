import React from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import profileImg from "../../assets/profile.jpg";
import '../Navbar/Navbar.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-scroll';
import pdf_file from '../../assets/Rukshan_Resume.pdf';
import HeroParticles from './HeroParticles';
const Hero = ({ theme }) => {
  const { t } = useTranslation();
  return (
    <div className='hero' id='home'>
      <HeroParticles theme={theme} />
      <img src={profileImg} alt='profile' className='profile' />
      <h1>{t('hero.title_span')}<span> {t('hero.title_rest')}</span></h1>
      <p>{t('hero.description')}</p>
      <div className='hero-action' >
        <div className='hero-connect'><Link smooth={true} offset={-50} duration={500} to="contact"> {t('hero.connect')}</Link></div>
        {/* <Link smooth={true} offset={-50} duration={500} to="contact"> Connect Me</Link> */}
        <a href={pdf_file} target="_blank" rel="noopener noreferrer">
          <div className='hero-resume'> {t('hero.resume')}</div></a>
      </div>
    </div>
  )
}

export default Hero