import React, { useEffect, useState } from 'react';
import hat from "../../assets/hat.png"
import "../../Components/Navbar/Navbar.css";

const Navbar = () => {
  const[sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>100? setSticky(true):setSticky(false);
    })
  })
  return (
    <nav className={`conatiner ${sticky?'dark-nav':''}`}>
      <div className='navbar content'>
        <img src={hat} alt="hat" className='logo' />
        <a href="#" className="tag">Educity</a>
        </div><ul>
        <li>Home</li>
        <li>Program</li>
        <li>About us</li>
        <li>Campus</li>
        <li>Testimonials</li>
        <li className='btn'><button>Contact us</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;