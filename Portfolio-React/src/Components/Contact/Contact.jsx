import React from 'react'
import './contact.css';
import theme_pattern from "../../assets/theme.svg";
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';


export const Contact = () => {
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
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt='theme'/>
        </div>

        <div className='contact-section'>
            <div className='contact-left'>
              <h1>Lets Talk</h1>
              <p>I am currently available to take on new project, So feel free a message about anything that you want me to work on .You can Contact anytime.</p>
                  <div className='contact-details'>
                      <div className='contact-detail'>
                          <img src={mail_icon} alt='theme'/>
                          <p>shaanruk0309@gmail.com</p>
                      </div>
                      <div className='contact-detail'>
                         <img src={call_icon} alt='theme'/>  
                          <p>+94 778901558</p>
                      </div>
                      <div className='contact-detail'>
                         <img src={location_icon} alt='theme'/>
                          <p>Mathagal East Mathagal Jaffna, SriLanka</p>
                      </div>
                  </div>
            </div>

            <form onSubmit={onSubmit} className='contact-right'>
                <label htmlFor="" >Your Name :</label>
                <input type="text" placeholder='Enter your name here' name="name"/>

                <label htmlFor="" >Your Email :</label>
                <input type="email" placeholder='Mail@gmail.com' name="gmail"/>

                <label htmlFor="" >Your Message :</label>
                <textarea placeholder='Enter Your Messages here' name="message" rows='8'/>
                <button  type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}
