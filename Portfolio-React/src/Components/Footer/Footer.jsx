import React from 'react';
import './footer.css';
import footer_logo from '../../assets/footer_logo.svg';
import user_icon from '../../assets/user_icon.svg';
import logo1 from '../../assets/logo1.png';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='footer' id='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          {/* <img src={footer_logo} alt='logo'/> */}
          <img src={logo1} alt='logo' className='logoX'/>
          <p>{t("footer.desc")}</p>
        </div>

        <div className='footer-top-right'>
          <div className='footer-email-input'>
            <img src={user_icon} alt='usericon'/>
            <input
              type='email'
              placeholder={t("footer.email_placeholder")}
            />
          </div>
          <div className='footer-subscribe'>
            {t("footer.subscribe")}
          </div>
        </div>
      </div>

      {/* <hr/> */}
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>{t("footer.copyright")}</p>
        <div className='footer-bottom-right'>
          <p>{t("footer.terms")}</p>
          <p>{t("footer.privacy")}</p>
          <p>{t("footer.connect")}</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
