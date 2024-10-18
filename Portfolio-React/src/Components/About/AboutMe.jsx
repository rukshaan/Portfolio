import React from 'react'
import './aboutMe.css';
import profileImg from "../../assets/profile.jpg";
import theme_pattern from "../../assets/theme.svg";
const AboutMe = () => {
  return (
    <div className='about' id='about'>
      <div className='about-title'>
        <h1>About Me</h1>
        <img src={theme_pattern} alt='theme' />
      </div>
  
      <div className='about-section'>
        <div className='about-left'>
          <img src={profileImg} alt='profile' className='profile1' />
        </div>
  
        <div className='about-right'>
          <div className='about-para'>
            <p>
              I am an experienced frontend developer with over a decade of professional
              experience in the field. Throughout my career, I have had the privilege of
              collaborating with prestigious organizations, contributing to their success
              and growth.
            </p>
            <p>
              My passion for frontend development is not only about coding, but also the
              enthusiasm and dedication I bring to each project.
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
          <p>Years of Experience</p>
        </div>
        <hr />
  
        <div className='about-achievement'>
          <h1>4+</h1>
          <p>Projects Completed</p>
        </div>
        <hr />
  
        <div className='about-achievement'>
          <h1>1+</h1>
          <p>Happy Clients</p>
        </div>
        {/* <hr /> */}
      </div>
    </div>
  );
  
}

export default AboutMe




