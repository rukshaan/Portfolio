import React from 'react'
import theme_pattern from "../../assets/theme.svg";
import './mywork.css';
import mywork_data from '../../assets/mywork_data';
import arrow_icon from '../../assets/arrow_icon.svg';
export const MyWork = () => {
  return (
    <div className='mywork' id='work'>
        <div className='mywork-title'>
        <h1>MyWorks</h1>
        <img src={theme_pattern} alt='theme'/>
        </div>

        <div className='mywork-container'>
              {
                mywork_data.map((work,index)=>{
        
                        return( 
                          <img  key ={index} src={work.w_img} alt='work'/>                      
                        )}) }
        </div>

        <div className='mywork-showmore'>
           <p>Show More</p>
           <img src={arrow_icon} alt='arrow'/>
        </div>
    </div>
  )
}
