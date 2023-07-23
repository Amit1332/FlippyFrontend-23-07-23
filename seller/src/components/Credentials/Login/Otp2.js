import React, { useEffect, useState } from "react";
import "../Otp2.css";

function Otp2() {
  const [otp, setOtp] = useState("");
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(6);
          setMinutes(minutes - 1);
        }
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    setMinutes(1);
    setSeconds(30);
  };

  return (
    <div className="container">
      <div className="card">
        <h4>Verify OTP</h4>

        <input
          placeholder="Enter OTP"
          value={otp}
          onChange={({ target }) => {
            setOtp(target.value);
          }}
        />

        <div className="countdown-text">
          {seconds > 0 || minutes > 0 ? (
            <p>
              Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
              {seconds < 10 ? `0${seconds}` : seconds}
            </p>
          ) : (
            <p>Didn't recieve code?</p>
          )}

          <button
            disabled={seconds > 0 || minutes > 0}
            style={{
              color: seconds > 0 || minutes > 0 ? "#DFE3E8" : "#FF5630",
            }}
            onClick={resendOTP}
          >
            Resend OTP
          </button>
        </div>

        <button className="submit-btn">SUBMIT</button>
      </div>
    </div>
  );
}

export default Otp2;
