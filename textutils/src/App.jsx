import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <>
    <NavBar title ="TextUtils" aboutText="About Us" />
    <div className="container">
      <TextForm heading ="Enter a text to analyze below"/>
    </div>
    {/* <AboutUs/> */}
    </>
  )
}
export default App;
