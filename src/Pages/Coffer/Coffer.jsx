import React from 'react'
import Card from '../../components/Card/Card'
import './off.scss'

import { FaArtstation ,FaYoutube,FaFulcrum,FaGrunt,FaFly,FaFacebookF} from "react-icons/fa";
const Offer = () => {
  const arr = [
    {
      title:"SEO",
      dec:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, adipisci.",
      id:1,
      log:<FaArtstation/>,
    },
    {
      title:"Facebook Marketing",
      dec:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, adipisci.",
      id:2,
      log:<FaFacebookF/>,
    },
    {
      title:"Youtube Marketig",
      dec:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, adipisci.",
      id:3,
      log:<FaYoutube/>,
    },
    {
      title:"Content Writing",
      dec:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, adipisci.",
      id:4,
      log:<FaFulcrum/>,
    },
    {
      title:"Web Design",
      dec:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, adipisci.",
      id:5,
      log:<FaFly/>,
    },
    {
      title:"Graphics Design",
      dec:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, adipisci.",
      id:6,
      log:<FaGrunt/>,
    },
  ]
  return (
    
    <div className='offs' id='service'>
      <h3>Specialized in</h3>
      <h1>What I Offer</h1>
      <div className="inns">
      {
        arr.map((card) => (
          <Card card={card} key={card.id}/>
        ))
      }
      </div>
    
    </div>
  )
}

export default Offer