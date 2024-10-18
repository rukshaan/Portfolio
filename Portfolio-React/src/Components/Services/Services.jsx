import React from 'react'
import './services.css';
import theme_pattern from "../../assets/theme.svg";
import services_data from "../../assets/services_data";
import arro_icon from '../../assets/arrow_icon.svg';
const Services = () => {
  return (
    <div className='Service' id='services'>
        {
        <div className='about-title'>
        <h1>Services</h1>
        <img src={theme_pattern} alt='theme' />
       </div>
        }
        <div className='services-container'>
          {
              services_data.map((service,index)=>
              {
                return(
                  <div key={index} className="services-format">
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                      <div className='services-readmore'>
                          <p>Read More  </p><br/>
                          <img src={arro_icon} alt="arrow"/>
                      </div>
                  </div>
                )
              })
          }
        </div>

    </div>
  )
}

export default Services