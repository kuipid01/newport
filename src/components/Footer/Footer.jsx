import React from 'react'
import './footer.scss'
import { FaTwitter ,FaFacebookF,FaGithub,FaYoutube} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='outfoot'>
        <div className="innerfoot">
        <div className="logo">
          <h1>K <span>.</span> </h1>
        </div>
        <p>
            Designed with help from free template, using Reactjs and love
        </p>
        <ul>
            <li> <FaTwitter   /> </li>
            <li  ><FaFacebookF/> </li>
            <li><FaGithub/> </li>
            <li> <FaYoutube/></li>
        </ul>
        <h4>All rights reserved</h4>
        </div>
    </div>
  )
}

export default Footer