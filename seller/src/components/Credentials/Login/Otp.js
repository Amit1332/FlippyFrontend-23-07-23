import OTPInput, { ResendOTP } from "otp-input-react";
import  { useState } from "react";
import React from "react";
function Otp() {
  const [OTP, setOTP] = useState("");
  return (
    <div className="otpp">
     
      <OTPInput id="otppp"  style={{marginBottom:"20px",}}  inputStyles={{
            display:"flex",       
            alignItems:"flex-start",
            width: "55px",
            height: "55px",
            boxShadow:"0px 0px 5px 1px rgba(0, 0, 0, 0.2) ",
            border: "1px solid #D0D5DD",
            borderRadius: "7px ",
            outline:"none",
          }}  value={OTP} onChange={setOTP} autoFocus OTPLength={6} otpType="number" placeholder={[0, 0, 0, 0, 0, 0]} disabled={false} secure />
      {/* <ResendOTP onResendClick={() => console.log("Resend clicked")} /> */}
      <ResendOTP 
          renderTime={() => React.Fragment}
          renderButton={(buttonProps) => {
            return (
              <button style={{border:"none", background:"transparent", width:"450px",}} {...buttonProps}>
                {buttonProps.remainingTime !== 0 ? `Resend code in ${buttonProps.remainingTime} sec` : "Resend"}
              </button>
            );
          }}
        />
      
    </div>
  );
}
export default Otp