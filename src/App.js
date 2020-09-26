import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="wrapper">
        <svg>
          <circle className="progress" cx="90" cy="90" r="80"></circle>
          <circle cx="90" cy="90" r="60"></circle>
        </svg>
        <div className="number">
          <h2>65$</h2>
        </div>
      </div>
    </div>
  );
}
