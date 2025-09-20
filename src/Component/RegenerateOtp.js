import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { regenerateOtp } from "../Slice/authSlice";

const RegenerateOtp = () => {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { loading, error, otpRegenerated } = useSelector((state) => state.authentication);

  const handleRegenerateOtp = () => {
    if (!email) {
      alert("Please provide an email.");
      return;
    }

    dispatch(regenerateOtp(email)).then((res) => {
      if (res.meta.requestStatus === "fulfilled") {
        alert("OTP has been successfully regenerated.");
      }
    });
  };

  return (
    <div className="p-6 max-w-md mx-auto mt-20 bg-white rounded shadow">
      <h2 className="text-2xl mb-4 font-bold">Regenerate OTP</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full p-2 mb-4 border rounded"
      />
      <button
        onClick={handleRegenerateOtp}
        disabled={loading}
        className="bg-blue-500 text-white p-2 rounded w-full"
      >
        {loading ? "Regenerating OTP..." : "Regenerate OTP"}
      </button>
      {otpRegenerated && <p className="text-green-500 mt-2">OTP has been sent to your email.</p>}
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default RegenerateOtp;
