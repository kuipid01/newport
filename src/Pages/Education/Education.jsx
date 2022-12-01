import React from 'react'
import './edu.scss'
const Education = () => {
  return (
    <div className='educss'>
        <div className="edu__inner">
        <h4 className="title">
            My Qualifications
        </h4>
        <h2>Amazing Journey</h2>
        
        <ul>
            <li>
                <div className="circle"></div>
            <div className="dets">
                <h2>Bachelor in Engineering</h2>
                <h4>Mechanical Engineering</h4>
                <small> 2015-2021</small>
            </div>
            </li>
            <li>
                <div className="circle"></div>
            <div className="dets">
                <h2>Secondary School Certificate</h2>
                <h4>Science</h4>
                <small> 2008-2014</small>
            </div>
            </li>
            <li>
                <div className="circle"></div>
            <div className="dets">
                <h2>Secondary School Certificate</h2>
                <h4>Science</h4>
                <small> 2008-2014</small>
            </div>
            </li>
            <li>
                <div className="circle"></div>
            <div className="dets">
                <h2>Kuipid Technology</h2>
                <h4>Head of Designs</h4>
                <small> 2020-Present</small>
            </div>
            </li>

        </ul>
        </div>
       
    </div>
  )
}

export default Education