import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Navbar/Navbar.css';
import { FiMenu } from 'react-icons/fi'
import logo1 from "../../Images/logo1.png";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  //fotografia video, edicion, musico, prodcut
  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
      <img className='logoImage' src={logo1} />
      <div className='toggleButton'>
        <button 
          onClick={() => {
          setExpandNavbar((prev) => !prev);
        }}>
          <FiMenu />
        </button>
      </div>
      <div className='links'>
        <Link to='/'  > Home </Link>
        <Link to='/'> Fotografia </Link>
        <Link to='/'> Video </Link>
        <Link to='/'> Edicion </Link>
        <Link to='/'> Musica </Link>
        <Link to='/'> Produccion </Link>
      </div>
    </div>
  )
}

export default Navbar