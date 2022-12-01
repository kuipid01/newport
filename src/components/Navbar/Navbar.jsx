import React, { useState } from 'react';

import UilAlignRight  from '@iconscout/react-unicons/icons/uil-align-right'
import './navbar.scss';
const Navbar = ({setl}) => {

  const checkrl = () =>{
    if (setl) {
      return "/";
    }
    else{
      return "/#about"
    }

  }
  const [display, setDisplay] = useState(false)
  return (
    <div className='navcontainer'>
      <div className="innerNav">
        <div className="logo">
          <h1>K <span>.</span> </h1>
        </div>

        <ul>
          <li> <a href="/">Home</a>  </li>
          <li ><a href={`${checkrl()}`}
            >About Me</a></li>
          <li> <a href="#service">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="ham">
          <h1  onClick={ () => setDisplay(!display)}><UilAlignRight  size="40" color="greenyellow" /></h1>
        </div>
      </div>
      {display && 
        <div className="hiddenNav">
      <ul>
          <li onClick={ () => setDisplay(false)} > <a href="/">Home</a>  </li>
          <li onClick={() => setDisplay(false)}  >
            <a href={`${checkrl()}`}>About Me</a>
            </li>
          <li onClick={() => setDisplay(false)} > <a href="#service">Services</a></li>
          <li onClick={() => setDisplay(false)} ><a href="#portfolio">Portfolio</a></li>
          <li onClick={()=>setDisplay(false)} ><a href="#contact">Contact</a></li>
        </ul>
      </div> }

    </div>
  )
}

export default Navbar