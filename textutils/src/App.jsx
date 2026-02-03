import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";
import Alerts from "./components/Alerts";
import { HashRouter, Routes, Route } from "react-router-dom";


function App() {
  const [mode,setMode]= useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
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
    <HashRouter>
    <NavBar title ="TextUtils" aboutText="About Us" mode ={mode} toggleMode={toggleMode}/>
    <Alerts alert = {alert}/>
    <div className="container">
    <Routes>
    <Route exact path ="/" element={<TextForm heading ="Enter a text to analyze below" mode ={mode} showAlert={showAlert} />}/>
    <Route exact path="/about" element={<AboutUs mode={mode}/>}/>
    </Routes>
    </div>
    </HashRouter>
    </>
  )
}
export default App;
