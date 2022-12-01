import React from 'react'

const Blog = ({link,title,img}) => {
   
  return (
    <div>
        <a href={link}>
        <img src={img} alt="" />
        </a>
    </div>
  )
}

export default Blog