import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";

function App() {
  const [mode,setMode]= useState("light")
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
    }
    else{
      setMode("light")
    }
  }
  return (
    <>
    <NavBar title ="TextUtils" aboutText="About Us" mode ={mode} toggleMode={toggleMode}/>
    <div className="container">
      <TextForm heading ="Enter a text to analyze below"/>
    </div>
    {/* <AboutUs/> */}
    </>
  )
}
export default App;
