import React from "react";

import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="textContainer">
        <p className="subtitle">a design space based in montreal</p>
        <h1 className="title">whiteee space</h1>
      </div>
      <a
        href={"mailto:info@whiteee.space&subject=Saying hi!"}
        className="email"
      >
        info@whiteee.space
      </a>
    </div>
  );
}

export default App;
