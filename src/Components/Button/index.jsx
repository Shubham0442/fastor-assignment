import React from "react";
import "./index.css";

const Button = ({ label, onClick, height }) => (
  <div className="button-container">
    <button onClick={onClick} style={{ height: height }}>
      {label}
    </button>
  </div>
);

export default Button;
