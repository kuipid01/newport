import React from 'react'
import About from '../Pages/About/About'
import Contact from '../Pages/ContactMe/Contact'
import Education from '../Pages/Education/Education'
import Expertise from '../Pages/Expertise/Expertise'
import Home from '../Pages/Home/Home'
import Mind from '../Pages/Mid/Mind'
import Recent from '../Pages/RecentWorks/Recent'
// import Card from './Card/Card'
import Coffer from '../Pages/Coffer/Coffer'

const Main = () => {
  return (
    <div>
        <Home/>
        <About/> 
      <Expertise/>
      <Education/>
     {/* <Card/>  */}
      <Coffer/>
      <Mind/>
      <Recent/>
   
      <Contact/> 
    </div>
  )
}

export default Main