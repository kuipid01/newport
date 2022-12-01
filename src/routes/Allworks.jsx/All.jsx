import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { db } from '../../Utils/config'
import './all.scss'
import './new.css'
const All = () => {
  const [setl, setnl] = useState(false)
 useEffect(() => {
  
  if (document.URL) {
 
    const arr = []
    arr.push(document.URL);
    if (arr[0].includes("all")) {
      setnl(true)
    }
  }
 }, [])

 console.log(setl);
 

  const [loading, setloading] = useState(true)

    const  [allposts, setallposts] = useState([])
  
    useEffect(() => {
      
     
    }, [allposts])
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
    if (allposts.length===0) {
      setloading(true)
    }
    else{
      setloading(false)
    }
  
   
  }, [allposts])
  
      useEffect(() => {
        getPosts()
      
       
      }, [])
    console.log(allposts);
   
  return (
    <div className='allCont'>
      
        <div className="container">
        <h1 style={{margin:"1rem 0"}}>All Projects</h1>
          {
            loading && 
            <div className="contts">
            <div className="progress-bar">
            <div className="circle1 border">
            </div>
            </div>
            
          </div>
            }
            <div style={{display:"none"}} >
            <Navbar setl={setl} />
            </div>

             <div className="innercont">
             {allposts.map( (project )   =>  (
         
              <a key={project.id} href={project.link} target="_blank" rel="noreferrer">
                  <div className='box' key={project.id}>
                  
              <img src={project.imgUrl} alt="" />
             <div className="title">
               {
                 project.title
            
               }
             </div>
            </div>
            
              </a>
            

            
           
       
          ))}
             </div>
         </div>
           
          
    </div>
  )
}

export default All