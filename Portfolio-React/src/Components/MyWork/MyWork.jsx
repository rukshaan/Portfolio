import React from 'react'
import { useTranslation } from 'react-i18next';
import theme_pattern from "../../assets/theme.svg";
import './mywork.css';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
export const MyWork = () => {
  const { t } = useTranslation();
  return (
    <div className='mywork' id='work'>
      <div className='mywork-title'>
        <h1>{t('mywork.title')}</h1>
        <img src={theme_pattern} alt='theme' />
      </div>

      <div className='mywork-container'>
        {
          mywork_data.map((work, index) => {

            return (
              <a href={work.w_link} target="_blank" rel="noopener noreferrer">
                <img key={index} src={work.w_img} alt='work' />
              </a>
            )
          })}
      </div>
      <a href='https://github.com/rukshaan' target="_blank" rel='noopener noreferrer'>
        <button onClick="" className='mywork-showmore'>
          <p>{t('mywork.showmore')}</p>
          <img src={arrow_icon} alt='arrow' />
        </button>
      </a>
    </div>
  )
}
