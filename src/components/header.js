import React, {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

export default function Header(){
  const navRef = useRef();

  const showNavbar = () =>{
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    /*{<header>
      <div className='header-inner'>
        <div className='logo'>CHAIR.</div>
        <nav >
          <ul>
            <li>
              <a href='/'>discover</a>
            </li>
            <li>
              <a href='/'>products</a>
            </li>
            <li>
              <a href='/'>solutions</a>
            </li>
            <li>
              <a href='/'>reach</a>
            </li>
            <li className='btn'>
              <a href='/'>order</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>}*/
    <header>
      <div className= 'logo'>CHAIR.</div>
      <nav ref={navRef}>
        <a href="/#">Home</a>
        <a href="/#">products</a>
        <a href="/#">solutions</a>
        <a href="/#">reach</a>
        <button className= 'btn'>
          <a href="/#">order</a>
        </button>
        <button className = "nav-btn nav-close-btn"onClick={showNavbar}>
      <FaTimes/>
      </button>
      </nav>
      <button  className = "nav-btn" onClick={showNavbar}>
      <FaBars/>
      </button>
    </header>
  );
}
