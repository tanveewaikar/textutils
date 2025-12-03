import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
    
    const upperCaseText = ()=>{
        // console.log("handle up clicked" +text);
        let newText = text.toUpperCase ();
        setText(newText)
    }
    const handleOnChange = (event)=>{
    //   console.log("on chnage ")
      setText(event.target.value)
    }
    const[text, setText] = useState("Enter the text here")
    
    
  return (
    <div>
        <h1>{props.heading}</h1>
       <div className ="mb-3">
         <textarea className ='form-control' value = {text} onChange={handleOnChange} id='myBox'rows='8'/>
       </div>
       <button type="button" className="btn btn-primary" onClick={upperCaseText}>Convert to uppercase</button>

    </div>
  )
}
