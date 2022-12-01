import React from 'react'
const Input = (props) => {
    const {id, handleChange, ...remaining} = props
  

  return (
    <div style={{width:"100%", display:"flex", justifyContent:"center", alignItems:"center" }}>
        <input style={{width:"60%" , padding:"1rem"}}
        {...remaining}
        onChange={handleChange}
        />
        
    </div>
  )
}

export default Input