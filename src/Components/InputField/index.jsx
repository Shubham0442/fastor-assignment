import React from "react";
import "./index.css";

const InputField = ({
  label,
  type,
  onChange,
  placeholder,
  description,
  value,
  height
}) => (
  <div className="field-container">
    <label>{label}</label>
    <p>{description}</p>
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      style={{ height: height }}
    />
  </div>
);

export default InputField;
