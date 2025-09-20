import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyOtp, regenerateOtp } from "../Slice/authSlice";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const { email } = useSelector((state) => state.authentication);  // Assuming email is stored in the state
  const dispatch = useDispatch();
  const { loading, error, otpVerified, otpRegenerated } = useSelector(
    (state) => state.authentication
  );

  const handleVerifyOtp = () => {
    if (!otp) {
      alert("Please enter the OTP.");
      return;
    }

    dispatch(verifyOtp({ email, otp }));
  };

  const handleResendOtp = () => {
    dispatch(otpRegenerated(email)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        alert("OTP has been resent to your email.");
      }
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-20 bg-white rounded shadow">
      <h2 className="text-2xl mb-4 font-bold">Verify OTP</h2>
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        onClick={handleVerifyOtp}
        disabled={loading}
        className="bg-green-500 text-white p-2 rounded w-full mb-4"
      >
        {loading ? "Verifying OTP..." : "Verify OTP"}
      </button>
      {otpVerified && <p className="text-green-500 mt-2">OTP verified successfully.</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
      
      {/* Resend OTP button */}
      <button
        onClick={handleResendOtp}
        disabled={loading}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        {loading ? "Resending OTP..." : "Resend OTP"}
      </button>
      {otpRegenerated && <p className="text-green-500 mt-2">OTP has been resent to your email.</p>}
    </div>
  );
};

export default Verify;
