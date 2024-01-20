import React, { forwardRef } from "react";
import "./index.css";

const Pin = forwardRef(({ handleChange, backSpaceHandler }, ref) => {
  const handleKeyUp = (e) => {
    // console.log("keyup", e);
    if (e.keyCode === 8 && !e.target.value) {
      backSpaceHandler(e);
    } else {
      handleChange(e);
    }
  };

  return (
    <input
      className="input-box"
      onKeyUp={handleKeyUp}
      maxLength={1}
      ref={ref}
    />
  );
});

export default Pin;
