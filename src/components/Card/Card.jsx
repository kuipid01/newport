import React from 'react'
import './card.scss'

const Card = ({card}) => {
  const {title,dec,log} = card
    return (
    <div className='card'>
        <div className="overflow">{log} </div>
        <h3 className="text">{title}</h3>
        <p className="textContent">
            {dec}
        </p>
    </div>
  )
}

export default Card