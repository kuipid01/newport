import React, { useState } from 'react'
import {  signInWithEmailAndPassword} from "firebase/auth";
import './login.scss'
import { auth } from '../../Utils/config';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, Setemail] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState(false)
    const [errorMsg, seterrorMsg] = useState("")
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault()
        // if (email==="" && password === "" ) {
        
        //  seterror(true) 
        //   seterrorMsg("All Fields Must be filled")
        // }
        // else{
        //   seterror(false)
        // }
      try {
        const res = await signInWithEmailAndPassword(auth, email, password).then((userCredential) =>{
          const user = userCredential.user;
          console.log(user);
           navigate("/dashboard")
        } )
      } catch (error) {
        console.log(error);
      }  



    }
  return (
    <div className='login'>
     <h1>LOGIN NOW BRO !!</h1>
        <form >
            <input className= {error ? `err` : ''} placeholder="Enter Email{kuipid01@gmail.com}" required onChange={ (e) => Setemail(e.target.value)}  type="text"  />

            <input  className= {error ? `err` : ''} required placeholder='Enter Password' type="password" onChange={(e) => setpassword(e.target.value)} name="password" id="password" />
            <button  onClick={handleSubmit} type="submit">LOG IN</button>
        </form>
    </div>
  )
}

export default Login