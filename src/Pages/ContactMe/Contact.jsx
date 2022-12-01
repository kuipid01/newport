import React from 'react'
import { motion } from 'framer-motion';
import './contact.scss'
import { FaUser,FaVoicemail } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='contactMe' id='contact'>
        <ul>
            <motion.li
            
            initial={{ translateX:-300, opacity:1}}
            animate={{translateX:0, opacity:1}}
            transition={{ duration: 1.5 }}>
                <div className="logo">
                <FaUser />
                </div>
                <div className="contacts">
                    <h3>Call Me</h3>
                    <h4>+234-91-5701-666-9</h4>
                </div>
            </motion.li>
            <motion.li
            initial={{ translateX:300, opacity:1}}
            animate={{translateX:0, opacity:1}}
            transition={{ duration: 1.5 }}>
                <div className="logo">
                <FaVoicemail/>
                </div>
                <div className="Email">
                    <h3>E-mail</h3>
                    <h4>Kuipid01@gmail.com</h4>
                </div>
            </motion.li>
        </ul>
    </div>
  )
}

export default Contact