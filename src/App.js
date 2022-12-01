import React, { useContext, useEffect, useState } from 'react';
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
// import About from './Pages/About/About';
import Home from './Pages/Home/Home';
import  './App.css'
// import Expertise from './Pages/Expertise/Expertise';
// import Education from './Pages/Education/Education';
// import Coffer from './Pages/Coffer/Coffer';
// import Recent from './Pages/RecentWorks/Recent';
// import Mind from './Pages/Mid/Mind';
// import Contact from './Pages/ContactMe/Contact';
// import * as Unicons from '@iconscout/react-unicons';
import Login from './routes/Login/Login';
import Main from './components/Main';
import Register from './routes/Register/Register';
import Dash from './routes/Dash/Dash';
import All from './routes/Allworks.jsx/All';
import { AuthContext } from './Context/Authcontext';
const App = () => {

const {currentUser} = useContext(AuthContext)
const [dash, setdash] = useState(false)
const user = currentUser
  const ProtectedRoute = ({children}) => {
    if (currentUser) {
      return <Navigate to="/dashboard"/>
    }
   
  }
  useEffect(() => {
    const ProtectedRoute2 = () => {
      if (user) {
        setdash(true)
      }
      else{
        setdash(false)
      }
     } 
  
    return ProtectedRoute2()
  }, [user])
  
  
  return (
    <>
   
<Routes>
<Route path='/' element={<Main/>} />
<Route path='/login' element={<ProtectedRoute>
  <Login />
  </ProtectedRoute>} />
<Route path='/register' element={<ProtectedRoute>
  <Register />
  </ProtectedRoute>} /> 
<Route path='/dashboard' element={
  user ? 
  <Dash /> : <Login/>} />
<Route path='/allworks' element={<All />} />

</Routes>

     <div className="App">  
     <div className='socials'>
       
     </div>
      {/* <About/> 
      <Expertise/>
      <Education/>
      {/* <Card/> */}
      {/* <Coffer/>
      <Mind/>
      <Recent/>
       */}
      {/* <Contact/> */} 
      </div> 

    </>
  );
}

export default App;

