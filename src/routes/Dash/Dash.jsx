import React, { useContext } from 'react'
import { useEffect } from 'react'
import {addDoc,collection, serverTimestamp} from 'firebase/firestore'
import { useState } from 'react'
import "./dash.scss"
import {  db } from '../../Utils/config';
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Context/Authcontext'
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage'
const storage = getStorage();
const Dash = () => {
  const [Project, setProject] = useState({
    title:"",
    link:"",
    file:"",
    category:""
  })
  const [Progress, setProgress] = useState(false)
   const {currentUser} = useContext(AuthContext);
   const user = currentUser;
  useEffect(() => {
    const file = Project.file
    const uploadFile = () => {

        
 
      const storageRef = ref(storage, 'Projects/images.jpg');
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        if (progress<100) {
          setProgress(true)
      }
      if (progress===100) {
       
           setProgress(false)
          
      }
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
            default :
            break
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
        console.log(error)
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
          console.log('File available at', downloadURL);
          setProject((p) => ({...p, imgUrl:downloadURL}))
          
        });
      }
    );
      }
 
      file && uploadFile()
  }, [Project.file])
  const navigate = useNavigate();
  const handleForm = (e) => {
    setProject({...Project, [e.target.name]:e.target.value})
  
  }
  const handleFile  =(e) => {
   
    setProject({...Project, file:e.target.files[0]})

  
  }
const handleSubmit = async (e) => {
  e.preventDefault()
  try{
    console.log(Project.title,Project.link,Project.imgUrl);
      await addDoc(collection(db,"projects"), {
        title:Project.title,
        link:Project.link,
        imgUrl:Project.imgUrl,
        category:Project.category,
        timeStamp:serverTimestamp(),
      })
   navigate("/")
  }
  catch (e) {
    console.log(e);
  }
}
  return (
    <div className='dash__contain'>
  
    <form onSubmit={handleSubmit}>
      <input onChange={handleForm} placeholder="Enter Link to Project" type="text" name='link'/>

      <input onChange={handleForm} type="text" placeholder="Enter Title of Text" name='title' />
      <input onChange={handleForm} type="text" placeholder="Enter Category of Text{Web-Design,Graphic-App,Mobile-App,}" name='category' />
      <label  htmlFor="img"> Add Image</label>
      <input onChange={handleFile} style={{display:"none"}} className='img' type="file" name='img' id='img'/>
      <button disabled={ Progress} className={Progress ? `disabled` : ""}   type='submit'>Submit Project</button>
      </form>
    
    </div>
  
  )
}

export default Dash