import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
    // To convert text in upperCase
    const upperCaseText = ()=>{
        // console.log("handle up clicked" +text);
        let newText = text.toUpperCase ();
        setText(newText)
    }

    // To convert text in lowerCase
    const lowerCaseText = () =>{
      let newText = text.toLowerCase()
      setText(newText)
    }
    const previewText = () => {
      setPreview(text);   // take current text and save it in preview state
   };
  

    const handleOnChange = (event)=>{
    //   console.log("on chnage ")
      setText(event.target.value)
    }
    const[text, setText] = useState("")
    const [preview, setPreview] = useState("");
    
    const wordCount = text.trim()=== "" ? 0 : text.trim().split(/\s+/).length;
    const charaWithoutSpace = text.replace(/\s/g,"").length;
    const sentences = text.trim()=== "" ? 0 : text.split(/[!?.]+/).filter(Boolean).length;
    const para = text.trim()==="" ? 0 : text.split(/\n+/).filter(p=> p.trim()!=="").length;
    const CharaWithSpaces = text.length;
    const secondsPerWord = 0.3;
    const totalSeconds = Math.round(wordCount*secondsPerWord);
    const hour = Math.floor(totalSeconds/3600);
    const min = Math.floor((totalSeconds % 3600)/60)
    const sec = Math.floor(totalSeconds % 60);
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className ="mb-3">
         <textarea className ='form-control' value = {text} onChange={handleOnChange} id='myBox'rows='8'/>
        </div>
         <button type="button" className="btn btn-primary mx-1" onClick={upperCaseText}>Convert to uppercase</button>
         <button type="button" className="btn btn-primary mx-1" onClick={lowerCaseText}>Convert to lowercase</button>
      </div>

      <div className='container mt-4' >
      <h2>Your Text summary</h2>
      <div className='container' style={{display:"flex", gap:"40px", marginTop:"20px"}}>
      <div>
        <h2>{wordCount}</h2>
        <p>Words</p>
      </div>
      <div>
        <h2>{charaWithoutSpace}</h2>
        <p>Characters</p>
      </div>
      <div>
        <h2>{sentences}</h2>
        <p>Sentence</p>
      </div>
      <div>
        <h2>{para}</h2>
        <p>Paragraph</p>
      </div>
      </div>
      <hr />
      <p>Characters with spaces : <strong>{CharaWithSpaces}</strong></p>
      <p>Reading time :<strong> {hour}h {min}m {sec}s</strong> </p>
      </div>

      <div className='container my-4'>
        {/* <p>{text.split(" ").length} Words {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minitues to read </p> */}
        <button type="button" className="btn btn-primary mx-1" onClick={previewText}>Preview</button>
        {preview.length > 0 && (
         <>
          <p>{preview}</p>
         </>
        )}
      </div>
    </>
  )
}
