import React, { useEffect, useState } from 'react'
import Input from './Input'
import './reg.scss';
import {addDoc,collection, doc, serverTimestamp, setDoc} from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth';
import { auth, db } from '../../Utils/config';
import { useNavigate } from 'react-router-dom';

const storage = getStorage();

const Register = () => {
   
    
    const [Progress, setProgress] = useState(false)
    const [form, setform] = useState({
        username : "",
        email : "",
        password : "",
        cpassword : "",
        file : null,
        
    })


    const navigate = useNavigate();
    useEffect(() => { 
     const file = form.file
     const uploadFile = () => {

        
 
     const storageRef = ref(storage, 'images/rivers.jpg');
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
         setform((p) => ({...p, imgUrl:downloadURL}))
         
       });
     }
   );
     }

   
   file && uploadFile()

      }, [form.file])
      


    const inputs = [
        {
            name: "username",
            type : "text",
            required :true,
            id:1,
            placeholder : "Enter Your Preferred Username",
            
        },
       
        {
            name: "email",
            type : "email",
            required :true,
            placeholder : "Enter Your Valid Email Address",
            id:2,
        },
        {
            name: "password",
            type : "password",
            required :true,
            placeholder : "Enter Your Preferred Password",
            id:3,
            
        },
        {
            name:'cpassword',
            type:"password",
            required :true,
            placeholder : "Confirm Your Password ",
            id:4,
        }


    ]
    const handleChange = async (e) => {
       
       setform({...form , [e.target.name]:e.target.value})
      
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const username = form.username
        const email = form.email
        const password = form.password
        
        if (form.username==="" || form.password=== "" || form.email ==="" || form.password!==form.cpassword) {
          window.alert("One input Field is empty or all")
           
        }
        
        else{
            try {
            const res  =  await createUserWithEmailAndPassword(auth,email,password)
            console.log(res.user)
                await updateProfile(res.user,{

                  displayName:username,
                  photoURL:form.imgUrl
                })
                await setDoc(doc(db, "users", res.user.uid),{
                  username,
                  email,
                 photoURL:form.imgUrl,
                 

                  
                })
                navigate("/dashboard");
            } catch (error) {
                console.log(error);
            }
          
           
        }
        
        
       
    }

    console.log(form);
  return (
    <div className='reg'>
        <h1>Register Now </h1>
        <form  onSubmit={handleSubmit}>
        {
            inputs.map((input) => (
                <Input key={input.id} handleChange={handleChange} {...input} />
            ))
        }
        <input onChange={(e) => setform({...form, file:e.target.files[0]})} type="file" />
        <button disabled={ Progress} className={Progress ? `disabled` : ""} type='submit'>
        Become A Member
        </button>
        
        </form>
      
    </div>
  )
}

export default Register