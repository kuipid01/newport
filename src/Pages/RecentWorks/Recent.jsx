import React, { useEffect, useState } from 'react'
import './recent.scss'
// import img1 from '../../Images/desktop.png'
// import img2 from '../../Images/img2.png'
// import img3 from '../../Images/img3.png'
import { Link } from 'react-router-dom'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../../Utils/config'
import Blog from '../Blog'
const Recent = () => {
  const [display1, setdisplay1] = useState(true)
  const [d2, setd2] = useState(false)
  const [d3, setd3] = useState(false)
  const [d4, setd4] = useState(false)
  const handleD1 = () => {
    if (display1===true) {
      return
    }
    setdisplay1(true)
    setd2(false)
    setd3(false)
    setd4(false)
  }
  const handleD2 = () => {
    if (d2===true) {
      return
    }
    setdisplay1(false)
    
    setd3(false)
    setd4(false)
    setd2(true)
  }
  const handleD3 = () => {
    if (d3===true) {
      return
    }
    setdisplay1(false)
    
    setd3(true)
    setd4(false)
    setd2(false)
  }
  const handleD4 = () => {
    if (d4===true) {
      return
    }
    setdisplay1(false)
    
    setd3(false)
    
    setd2(false)
    setd4(true)
  }

  // const myWorksarray = [
  //   {
  //     id:1,
  //     imageUrl:img1,
  //     link:"kuipidThoughts.netlify.app",
  //     title:"Slick",
  //     cat:"Web-Design",
  //   },
  //   {
  //     id:2,
  //     imageUrl:img2,
  //     link:"kuipidThoughts.netlify.app",
  //     title:"Blog",
  //     cat:"Graphic-App",
  //   },
  //   {
  //     id:3,
  //     imageUrl:img3,
  //     link:"kuipidThoughts.netlify.app",
  //     title:"Blog",
  //     cat:"Mobile-App",
  //   },
  //   {
  //     id:4,
  //     imageUrl:img2,
  //     link:"kuipidThoughts.netlify.app",
  //     title:"Blog",
  //     cat:"Web-Design",
  //   },
  //   {
  //     id:5,
  //     imageUrl:img3,
  //     link:"kuipidThoughts.netlify.app",
  //     title:"Blog",
  //     cat:"Mobile-App",
  //   },
  //   {
  //     id:6,
  //     imageUrl:img1,
  //     link:"kuipidThoughts.netlify.app",
  //     title:"Blog",
  //     cat:"Graphic-App",
  //   },
  // ]
  const  [allposts, setallposts] = useState([])
  const getPosts = async  () =>{
      const collectionRef = collection(db, 'projects');
      const q = query(collectionRef, orderBy('timeStamp', 'desc'))
    const unsub = onSnapshot(q, (snapshot) => {
         setallposts(snapshot.docs.map((doc)=>({
           id:doc.id, ...doc.data()
        })))
        return unsub;
    })

    }

    useEffect(() => {
      getPosts()
    
     
    }, [])
    
const webDesignarr = allposts.filter((work) => {
  const webdesign = work.category ==="Web-design";
 
    return webdesign;
    
})

const mobile = allposts.filter((work) => {
  return work.category==="Mobile-App"
})
const graphic = allposts.filter((work) => {
  
  return work.category==="Graphic-App"
})
// console.log(allposts[0].imgUrl)
  return (
    <div className='offs1' id='portfolio'>
    <h3>My Portfolio</h3>
    <h1>Recent Works</h1>
    <div className="inns">
      <div className="tabhandler">
        <ul>
        <li  onClick={handleD1 } className={`tab1 ${ display1 && "active"}`}>All Projects</li>
        <li   onClick={handleD2 }  className={`tab1 ${ d2 && "active"}`}> Web Design</li>
        <li onClick={handleD3 }   className={`tab1 ${ d3 && "active"}`}> Mobile App</li>
        <li onClick={handleD4 }   className={`tab1 ${ d4 && "active"}`}> Graphics Design</li>
        </ul>
       
      </div>
     {
       display1 &&
        <div className="tab tab1">
          {
            allposts.map( (project )   =>  (
            
              <Blog key={project.imgUrl} link={project.link} title={project.title} img={project.imgUrl}/> 
  
             
         
            ))
          }
        </div>
       
     } 
     {
       d2 && <div className="tab tab2"> 
    {
      webDesignarr.map((web) =>(
        <Blog key={web.imgUrl} lik={web.link} title={web.title} img={web.imgUrl}/> 
  
      ))
    }
       </div>
     }
      {
        d3 && 
        <div className="tab tab3"> 
        {
      mobile.map((web) =>(
        <Blog key={web.imgUrl} link={web.link} title={web.title} img={web.imgUrl}/> 
  
      ))
    }
        </div>
      }
      {
        d4 &&  <div className="tab tab4"> 
         {
      graphic.map((web) =>(
       
   
    <Blog key={web.imgUrl} link={web.link} title={web.title} img={web.imgUrl}/> 
  
  
      ))
    }</div>
     
      }
      </div>
      <Link to={"allworks"}>
      <button>Show More</button>
      </Link>
     
    </div>
  )
}

export default Recent