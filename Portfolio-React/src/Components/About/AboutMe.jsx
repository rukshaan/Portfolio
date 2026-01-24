import React from 'react'
import { useTranslation } from 'react-i18next';
import './aboutMe.css';
import profileImg from "../../assets/profile.jpg";
import theme_pattern from "../../assets/theme.svg";
import AboutParticles from './AboutParticles';

const AboutMe = ({ theme }) => {
  const { t } = useTranslation();
  return (
    <div className='about' id='about'>
      <AboutParticles theme={theme} />
      <div className='about-title'>
        <h1>{t('about.title')}</h1>
        <img src={theme_pattern} alt='theme' />
      </div>

      <div className='about-section'>
        <div className='about-left'>
          <img src={profileImg} alt='profile' className='profile1' />
        </div>

        <div className='about-right'>
          <div className='about-para'>
            <p>
              {t('about.para1')}
            </p>

            <p>
              {t('about.para2')}
            </p>
          </div>

          <div className='about-skills'>
            <div className='about-skill'>
              <p>HTML & CSS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className='about-skill'>
              <p>React JS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className='about-skill'>
              <p>JavaScript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className='about-skill'>
              <p>Next JS</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>

      <div className='about-achievements'>
        <div className='about-achievement'>
          <h1>1+</h1>
          <p>{t('about.experience')}</p>
        </div>
        <hr />

        <div className='about-achievement'>
          <h1>4+</h1>
          <p>{t('about.projects')}</p>
        </div>
        <hr />

        <div className='about-achievement'>
          <h1>1+</h1>
          <p>{t('about.clients')}</p>
        </div>
        {/* <hr /> */}
      </div>
    </div>
  );

}

export default AboutMe




