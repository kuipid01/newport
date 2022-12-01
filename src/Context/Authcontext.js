import { onAuthStateChanged } from "firebase/auth";
import { createContext,useEffect,useState } from "react";
import { auth } from "../Utils/config";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
    const[currentUser,setCurretUser] = useState({})

    useEffect(() => {
      onAuthStateChanged(auth,(user) => {
          setCurretUser(user)
      })
    }, [])

    
      return (
        <AuthContext.Provider value={{currentUser}}>
            {children}
        </AuthContext.Provider>
      )
   
    
}