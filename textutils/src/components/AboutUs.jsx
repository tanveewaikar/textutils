import React from "react";

export default function AboutUs(props) {
  const myStyle = {
    color: props.mode === "dark" ? "#E5E7EB" : "#020617",
    backgroundColor: props.mode === "dark" ? "#020617" : "#FFFFFF",
    borderRadius: "12px",
    padding: "20px"
  };

  return (
    <div className="container my-3" style={myStyle}>
      <h1 className="mb-3">About TextUtils</h1>

      <p>
        <strong>TextUtils</strong> is a simple and efficient text utility web
        application designed to help users analyze and transform text easily.
      </p>

      <h3 className="mt-4"> Features</h3>
      <ul>
        <li>Convert text to Uppercase and Lowercase</li>
        <li>Word, character, sentence, and paragraph count</li>
        <li>Estimated reading time calculation</li>
        <li>Text preview before final use</li>
        <li>Clean and user-friendly interface</li>
      </ul>

      <p className="mt-3">
        TextUtils is useful for students, writers, and developers who work with
        text regularly and want quick insights without using multiple tools.
      </p>

      <h3 className="mt-4"> Technology Used</h3>
      <ul>
        <li>React.js</li>
        <li>JavaScript (ES6)</li>
        <li>HTML5</li>
        <li>CSS / Bootstrap</li>
      </ul>

      <h3 className="mt-4"> Developer</h3>
      <p>
        This project is developed by <strong>Tanvee Mohan Waikar</strong> as part
        of learning React.js and frontend development.
      </p>
    </div>
  );
}
