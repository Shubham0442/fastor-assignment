import React, { useContext, useState } from "react";
import { Button, PinInput } from "../../Components";
import "./index.css";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Otp = () => {
  const [otp, setOtp] = useState("");
  const { mobile, setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  //   console.log("opt", otp);

  const handleVerify = () => {
    axios
      .post("https://staging.fastor.in/v1/pwa/user/login", {
        phone: mobile,
        dial_code: "+91",
        otp: otp
      })
      .then((res) => {
        setToken(res.data?.data?.token);
        navigate("/restaurants");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="otp-container">
      <div className="otp-field">
        <PinInput
          length={6}
          setOtp={setOtp}
          label="OTP Verification"
          description="Enter the verification code we just sent on your Mobile Number."
        />
        <Button label="Verify" height="56px" onClick={handleVerify} />
        <p className="resend">
          Didn’t received code? <a>Resend</a>
        </p>
      </div>
    </div>
  );
};

export default Otp;
