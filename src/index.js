
import React from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter
} from "react-router-dom";
import App from "./App";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { AuthContextProvider } from "./Context/Authcontext";




ReactDOM.createRoot(document.getElementById("root")).render(
  <>
  <Navbar/>
  <BrowserRouter> 
  <AuthContextProvider>
  <App/>
  </AuthContextProvider>
 
   </BrowserRouter> 
 <Footer/>
  </>
);

