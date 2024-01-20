import React, { useContext } from "react";
import "./index.css";
import { Button, InputField } from "../../Components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const MobileNo = () => {
  const { mobile, setMobile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSendCode = () => {
    axios
      .post("https://staging.fastor.in/v1/pwa/user/register", {
        phone: mobile,
        dial_code: "+91"
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.data === "otp sent") navigate("/otp");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="mobile-container">
      <div className="mobile-field">
        <InputField
          placeholder="enter your mobile number"
          type="number"
          label="Enter Your Mobile Number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          description="We will send you the 6 digit verification conde"
          height="56px"
        />
        <Button label="Send Code" height="56px" onClick={handleSendCode} />
      </div>
    </div>
  );
};

export default MobileNo;
