import React from 'react'
import "./Footer.css";
import logo1 from "../../Images/logo2.png";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";

function Footer() {
  const style = { width: '25px', height: '100%' };
  const style2 = {width:'30px', height:'100%'}

  return (
    <div className='footer'>
      <img className='logoImage' src={logo1} />
      <div className='socialMedia'>
        <a href="https://www.google.com" target='_blank'><AiOutlineInstagram style={style2} /></a>
        <a href="https://www.google.com" target='_blank'><AiOutlineFacebook style={style2} /></a>
      </div>
      <p> &copy; 2022 All Rights Reserved.</p>
    </div>
  )
}

export default Footer