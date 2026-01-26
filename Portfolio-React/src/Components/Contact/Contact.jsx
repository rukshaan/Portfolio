import React from 'react'
import { useTranslation } from 'react-i18next';
import './contact.css';
import theme_pattern from "../../assets/theme.svg";
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';


export const Contact = () => {
  const { t } = useTranslation();
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ee839824-7d65-457e-be41-0958ea3d3214");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };


  return (
    <div className='contact' id='contact'>

      <div className='contact-title'>
        <h1>{t('contact.title')}</h1>
        <img src={theme_pattern} alt='theme' />
      </div>

      <div className='contact-section'>
        <div className='contact-left'>
          <h1>{t('contact.lets_talk')}</h1>
          <p>{t('contact.desc')}</p>
          <div className='contact-details'>
            <div className='contact-detail'>
              <img src={mail_icon} alt='theme' />
              <p>shaanruk0309@gmail.com</p>
            </div>
            <div className='contact-detail'>
              <img src={call_icon} alt='theme' />
              <p>+94 778901558</p>
            </div>
            <div className='contact-detail'>
              <img src={location_icon} alt='theme' />
              <p>Mathagal East Mathagal, Jaffna, SriLanka</p>
            </div>
            
          </div>
        </div>

        <form onSubmit={onSubmit} className='contact-right'>
          <label htmlFor="" >{t('contact.labels.name')}</label>
          <input type="text" placeholder={t('contact.placeholders.name')} name="name" />

          <label htmlFor="" >{t('contact.labels.email')}</label>
          <input type="email" placeholder={t('contact.placeholders.email')} name="gmail" />

          <label htmlFor="" >{t('contact.labels.message')}</label>
          <textarea placeholder={t('contact.placeholders.message')} name="message" rows='8' />
          <button type='submit' className='contact-submit'>{t('contact.submit')}</button>
        </form>
      </div>
    </div>
  )
}
