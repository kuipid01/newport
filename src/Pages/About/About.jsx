import React from 'react';
import { motion } from 'framer-motion';
import './about.scss'
import { FaMusic ,FaTrain,FaFilm,FaPhotoVideo} from "react-icons/fa";
import man from "../../Images/imgb.png"
const About = () => {
  return (
    <div className='about__container' id='about'>

      <div className="innercontainer">
        <motion.div
        
     initial={{ translateX:-100, opacity:1}}
     animate={{translateX:0, opacity:1}}
     transition={{ duration: 1 }} className="imgContainer">
    <motion.img 
    src={man} alt="" />
        </motion.div>
        <motion.div
         initial={{ translateX:100, opacity:1}}
         animate={{translateX:0, opacity:1}}
         transition={{ duration: 1 }}
          className="intro__details">
          <h3 className="intro">
            My intro
          </h3>
          <h1>
            About Me
          </h1>
          <p className="desc">
           I am a passionate Web developer and an aspiring Data scientist who has an affinity for 
          everything concerning the web.<br/>
           Major Technology i use is ReactJs,Django,Mongo Db NextJs, but i also have knowledge in other web technologies <br/>
          I am also a Graphic designer who ejoys using Figma.
          </p>
          <div className="dets__inner">
            <ul>
              <li>
                <span className="icon">
                  Home
                </span>
                <span>:</span>
                <p>Adegoke Stephen</p>
              </li>
              <li>
                <span className="icon">
                  Phone
                </span>
                <span>:</span>
                <p>+234-91-5701-666-9</p>
              </li>
              <li>
                <span className="icon">
                  Email
                </span>
                <span>:</span>
                <p>Kuipid01@gmail.com</p>
              </li>

            </ul>
          </div>
          <div className="interests">
            <h2>My Interests</h2>
            <ul>
              <li><span className="icon"> <FaMusic/> </span> <p>Music</p></li>
              <li><span className="icon"> <FaTrain/></span> <p>Travel</p></li>
              <li><span className="icon"><FaFilm/></span> <p>Movie</p></li>
              <li><span className="icon"><FaPhotoVideo/></span> <p>Photo</p></li>


            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About