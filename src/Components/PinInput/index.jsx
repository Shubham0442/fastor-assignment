import React, { useRef, useState } from "react";
import Pin from "./Pin";
import "./index.css";

const PinInput = ({ length, setOtp, label, description }) => {
  const [inputLength] = useState(new Array(length).fill(1));
  const [inputData] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  const handleChange = (e, index) => {
    // console.log(e.target.value);
    inputData[index] = e.target.value;
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setOtp(inputData.join(""));
  };

  const backSpaceHandler = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputData[index] = e.target.value;
    setOtp(inputData.join(" "));
  };

  return (
    <div className="pininput-container">
      <label>{label}</label>
      <p>{description}</p>
      <div className="fields-container">
        {inputLength.map((_, index) => {
          return (
            <Pin
              backSpaceHandler={(e) => backSpaceHandler(e, index)}
              handleChange={(e) => handleChange(e, index)}
              key={index}
              ref={(ele) => {
                // console.log(ele);
                inputRef.current[index] = ele;
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PinInput;
