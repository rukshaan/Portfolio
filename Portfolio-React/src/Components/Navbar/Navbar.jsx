import React, { useRef, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.svg';
import underline from '../../assets/nav_underline.svg';
import {Link} from 'react-scroll';
import menu_open from '../../assets/menu_open.svg';
import menu_close from '../../assets/menu_close.svg';
import logo1 from '../../assets/logo1.png';
const Navbar = () => {
  const [menu,setMenu]=useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef=useRef();

const openMenu=()=>{
  menuRef.current.style.right="0";
  setIsMenuOpen(true); 
}
const closeMenu=()=>{
  menuRef.current.style.right="-350px";
  setIsMenuOpen(false);
}

  return (
    <div className='navbar'>
        {/* <img src={logo} alt='logo'/> */}
        <img src={logo1} alt='logo' className='logo1'/>
        <img src={menu_open} onClick={openMenu} className='nav-mob-open' alt='menu'/>
        <ul  ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} className='nav-mob-close' alt='menu'/>
            <li><Link className='anchor-link' smooth={true} offset={-50} duration={500}   to="home"><p onClick={()=>setMenu('home')}>Home</p>{menu==='home'?<img src={underline} alt='underline'/>:<></>}</Link></li>
            <li><Link className='anchor-link' smooth={true} offset={-50} duration={500}   to="about"><p onClick={()=>setMenu("about")}>AboutMe</p>{menu==='about'? <img src={underline} alt='underline'/>:<></>}</Link></li>
            <li><Link className='anchor-link' smooth={true} offset={-50} duration={500}   to="services"><p onClick={()=>setMenu('services')}>Services</p>{menu==='services'? <img src={underline} alt='underline'/>:<></>}</Link></li>
            <li><Link className='anchor-link' smooth={true} offset={-50} duration={500}   to="work"><p onClick={()=>setMenu('work')}>Portfolio</p>{menu==='work'? <img src={underline} alt='underline'/>:<></>}</Link></li>
            <li><Link className='anchor-link' smooth={true} offset={-50} duration={500}   to="contact"><p onClick={()=>setMenu('contact')}>Contact</p>{menu==='contact'? <img src={underline} alt='underline'/>:<></>}</Link></li>
        </ul>
        <Link className='nav-connect' smooth={true} offset={-50} duration={500} to="contact"><p onClick={()=>setMenu('contact')}> Connect With Me</p></Link>
    </div>
  )
}

export default Navbar