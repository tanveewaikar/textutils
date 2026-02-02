import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";
import { Alert } from "bootstrap";
import Alerts from "./components/Alerts";

function App() {
  const [mode,setMode]= useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
  }
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor ="#0F172A";
      showAlert(" Dark mode has been enabled","success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert(" Light mode has been enabled","success")
    }
  }
  return (
    <>
    <NavBar title ="TextUtils" aboutText="About Us" mode ={mode} toggleMode={toggleMode}/>
    <Alerts alert = {alert}/>
    <div className="container">
      <TextForm heading ="Enter a text to analyze below" mode ={mode} />
    </div>
    {/* <AboutUs/> */}
    </>
  )
}
export default App;
