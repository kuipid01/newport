import React from 'react'
import './experts.scss'
import { motion } from "framer-motion"
const Expertise = () => {
  return (
    <div className='header'>
        
        <div className="inner__expert">
            <h4 className="title">
                Why Choose Me
            </h4>
            <h1>My Expertise Area</h1>
            <ul>
                <li>
                    <h3 className="tits">
                        Web Design
                        <span>90%</span>
                    </h3>
                    <div className="loader">
                        <motion.div 
                        initial={{ width:0}}
                animate={{ width:`${90}%`}}
                transition={{ duration: 0.8 }}
                       ></motion.div>
                    </div>
                
                </li>
                <li>
                    <h3 className="tits">
                        Web UI Design
                        <span>90%</span>
                    </h3>
                    <div className="loader">
                    <motion.div 
                        initial={{ width:0}}
                animate={{ width:`${90}%`}}
                transition={{ duration: 0.5 }}
                       ></motion.div>
                    </div>
                
                </li>
                <li>
                    <h3 className="tits">
                        Facebook Marketing
                        <span>60%</span>
                    </h3>
                    <div className="loader">
                    <motion.div 
                        initial={{ width:0}}
                animate={{ width:`${60}%`}}
                transition={{ duration: 0.8 }}
                       ></motion.div>
                    </div>
                
                </li>
                <li>
                    <h3 className="tits">
                        Search Engine Optimization
                        <span>60%</span>
                    </h3>
                    <div className="loader">
                    <motion.div 
                        initial={{ width:0}}
                animate={{ width:`${60}%`}}
                transition={{ duration: 0.4 }}
                       ></motion.div>
                    </div>
                
                </li>
                <li>
                    <h3 className="tits">
                        Content Writing
                        <span>75%</span>
                    </h3>
                    <div className="loader">
                    <motion.div 
                        initial={{ width:0}}
                animate={{ width:`${75}%`}}
                transition={{ duration: 0.5 }}
                       ></motion.div>
                    </div>
                
                </li>
                <li>
                    <h3 className="tits">
                   
                        Graphics design
                        <span>80%</span>
                    </h3>
                    <div className="loader">
                    <motion.div 
                        initial={{ width:0}}
                animate={{ width:`${80}%`}}
                transition={{ duration: 0.6 }}
                       ></motion.div>
                    </div>
                
                </li>
            </ul>
        </div>

    </div>
  )
}

export default Expertise