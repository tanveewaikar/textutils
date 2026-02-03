import React from "react";
import { useState } from "react";
import "./TextForm.css";

export default function TextForm(props) {
  // To convert text in upperCase
  const upperCaseText = () => {
    // console.log("handle up clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase!", "success");
  };

  // To convert text in lowerCase
  const lowerCaseText = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to lowercase!", "success");
  };

  // To copy text to clipboard
  const handleCopy = () => {
    const copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert(" Copied to clipboard!", "success");
  };

  // To clear the text
  const clearText = () => {
    setText("");
    setPreview("");
    props.showAlert(" Text cleared!", "success");
  };

  //reverse text
  const revText = () => {
    const reversed = text.split("").reverse().join("");
    setText(reversed);
    props.showAlert(" Text reversed!", "success");
  };
  // To remove extra spaces
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces removed!", "success");
  };

  //remove special  Characters
  const removeSpecialChar = () => {
    const remmoveSpechar = text.replace(/[^a-zA-Z0-9\s]/g, "");
    setText(remmoveSpechar);
    props.showAlert(" Special characters removed!", "success");
  };

  //capitalize first letter of each word
  const capitalizeEachWord = () => {
    const captalizeWord = text
      .toLowerCase()
      .split(" ")
      .map((word) => (word ? word[0].toUpperCase() + word.slice(1) : ""))
      .join(" ");
    setText(captalizeWord);
    props.showAlert(" First letter of each word capatilized!", "success");
  };
  const previewText = () => {
    setPreview(text); // take current text and save it in preview state
  };

  const handleOnChange = (event) => {
    const newText = event.target.value;
    setText(newText);
    if (newText.trim().length === 0) {
      setPreview("");
    }
  };
  const [text, setText] = useState("");
  const [preview, setPreview] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charaWithoutSpace = text.replace(/\s/g, "").length;
  const sentences =
    text.trim() === "" ? 0 : text.split(/[!?.]+/).filter(Boolean).length;
  const para =
    text.trim() === ""
      ? 0
      : text.split(/\n+/).filter((p) => p.trim() !== "").length;
  const CharaWithSpaces = text === " " ? 0 : text.length;
  const secondsPerWord = 0.3;
  const totalSeconds = Math.round(wordCount * secondsPerWord);
  const hour = Math.floor(totalSeconds / 3600);
  const min = Math.floor((totalSeconds % 3600) / 60);
  const sec = Math.floor(totalSeconds % 60);
  return (
    <>
      <div className="container">
        <h1 className={`mb-3 text-${props.mode === "light" ? "dark" : "light"}`}>
          {props.heading}
        </h1>

        <div className="mb-3">
          <textarea className={`form-control ${props.mode === "dark" ? "textarea-dark" : ""}`}  value={text} onChange={handleOnChange} id="myBox" rows="8"  />
        </div>
        <div className="btn-group-flex">
          <button type="button" className={`btn btn-primary mx-2 ${props.mode === "light" ? "buttons-light" : "buttons-dark"}`} disabled={text.length === 0} onClick={upperCaseText} > <i className="fa-solid fa-text-height me-1"></i> Uppercase </button>
          <button type="button" className={`btn btn-primary mx-2 ${props.mode === "light" ? "buttons-light" : "buttons-dark"}`} disabled={text.length === 0} onClick={lowerCaseText} ><i className="fa-solid fa-text-width me-1"></i> Lowercase </button>
          <button type="button" className={`btn btn-primary mx-2 ${props.mode === "light" ? "buttons-light" : "buttons-dark"}`} disabled={text.length === 0} onClick={handleCopy} > <i className="fa-solid fa-copy me-1"></i> Copy Text </button>
          <button type="button" className={`btn btn-primary mx-2 ${props.mode === "light" ? "buttons-light" : "buttons-dark"}`} disabled={text.length === 0} onClick={handleExtraSpaces} ><i className="fa-solid fa-scissors me-1"></i> Remove Extra Spaces</button>
          <button type="button" className={`btn btn-primary mx-2 ${props.mode === "light" ? "buttons-light" : "buttons-dark"}`} disabled={text.length === 0} onClick={clearText} ><i className="fa-solid fa-trash me-1"></i> Clear Text</button>
          <button type="button" className={`btn btn-primary mx-2 ${props.mode === "light" ? "buttons-light" : "buttons-dark"}`} disabled={text.length === 0} onClick={revText}  >  <i className="fa-solid fa-arrows-rotate me-1"></i> Reverse Text </button>
          <button type="button" className={`btn btn-primary mx-2 ${props.mode === "light" ? "buttons-light" : "buttons-dark"}`} disabled={text.length === 0} onClick={capitalizeEachWord} > <i className="fa-solid fa-font me-1"></i> Capitalize Words  </button>
        </div>
      </div>

      <div className={` mainSec container mt-4 ${props.mode === "light" ? "card-container-light" : "card-container-dark"}`}>
        <h2>Your Text summary</h2>
        <div className="summary-stats">
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
        <div className="container">
          <p>Characters with spaces : <strong>{CharaWithSpaces}</strong></p>
          <p>Reading time :<strong>{" "} {hour}h {min}m {sec}s</strong>{" "}</p>
        </div>
      </div>

      <div className="container my-4 preview-wrapper">
        <button  type="button"  className={` btn btn-primary mx-1 ${props.mode === "light" ? "buttons-light" : "buttons-dark"}`} disabled={text.length === 0} onClick={previewText}> <i className="fa-solid fa-eye"></i> Preview  </button>
        <div className="preview-box mt-3" style={{  backgroundColor: props.mode === "light" ? "#F8FAFC" : "#020617",  color: props.mode === "light" ? "#020617" : "#E5E7EB",  border:  props.mode === "light" ? "1px solid #CBD5E1"  : "1px solid #1E293B", }}>
          {preview.trim().length === 0 ? (
            <p className="mb-0">Nothing to preview</p>
          ) : (
            <p className="mb-0" style={{ whiteSpace: "pre-wrap" }}>
              {preview}
            </p>
          )}
        </div>
      </div>
    </>
  );
}
