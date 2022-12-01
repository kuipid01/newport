import React from 'react'
import './home.scss'
import { BiSupport } from "react-icons/bi";
import man from "../../Images/imgb.png"
import { FaProjectDiagram ,FaEdit} from "react-icons/fa";
const Home = () => {
  return (
    <div className='home__container ' id='home'>
<div className="innercontainer">
<div className="left__side">
  <h3 className="top">
    Hi, i am
  </h3>
  <h1>Adegoke Stephen Busayo</h1>

  <div className="desc">Enthusiastic Web developer with passion for coding and bringing web applications to life with vast technology in his belt!</div>
  <div className="btns">
    <button className="dcv">
      Download CV
    </button>
    <button   className="ctme" id='#contact'>
      <a href="#contact" style={{color:"greenyellow"}}>  Contact Me</a>
    
    </button>
  </div>
</div>
<div className="right__side">
  <img src={man} alt="" /> 
</div>
</div>
<div className="desdesign">
  <ul>
    <li>
      <div className="icon">
      <FaProjectDiagram/>
      </div>
     
      <div className="text">
        <h3> 3 Years Experience</h3>
        <h4>Experience</h4>
      </div>
    </li>
    <li>
    <div className="icon">
      <FaEdit/>
      </div>
      <div className="text">
        <h3> 10+ Projects </h3>
        <h4>Complted</h4>
      </div>
    </li>
    <li>
    <div className="icon">
      <BiSupport/>
      </div>
      <div className="text">
        <h3> Support</h3>
        <h4>Online 24/7</h4>
      </div>
    </li>
  </ul>
</div>
    </div>
  )
}

export default Home