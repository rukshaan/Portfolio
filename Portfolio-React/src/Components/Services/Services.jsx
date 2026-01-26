import React from 'react';
import './services.css';
import theme_pattern from "../../assets/theme.svg";
import arro_icon from '../../assets/arrow_icon.svg';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();

  // Get the services array from i18n
  const services = t("services.items", { returnObjects: true });

  return (
    <div className='Service' id='services'>
      <div className='about-title'>
        <h1>{t("services.title")}</h1>
        <img src={theme_pattern} alt='theme' />
      </div>

      <div className='services-container'>
        {services.map((service, index) => (
          <div key={index} className="services-format">
            {service.s_no && <h3>{service.s_no}</h3>} {/* optional if you have numbers */}
            <h2>{service.name}</h2>
            <p>{service.desc}</p>
            <div className='services-readmore'>
              <p>{t("services.readmore")}</p>
              <img src={arro_icon} alt="arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
