import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Slice/authSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    roles: ["USER"],
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.authentication);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Form data being sent:", form); 
      console.log("Form data being sent:", form);  // Log to ensure it's in the correct format
      dispatch(registerUser(form)).then((res) => {
        if (res.meta.requestStatus === "fulfilled") {
          console.log("User registration success:", res.payload);
          navigate("/verify", { state: { email: form.email } });
        } else {
          console.log("User registration failed:", res.payload);
        }
      });
      
  };


  return (
    <div className="p-6 max-w-md mx-auto mt-[130px] my-10 bg-white rounded shadow">
      <h2 className="text-2xl mb-4 font-bold">Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        />
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="w-full p-2 mb-4 border rounded"
        >
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
        <button
          type="submit"
          disabled={loading}
          className="bg-green-500 text-white p-2 rounded w-full"
        >
          {loading ? "Registering..." : "Register"}
        </button>
        {error && <p className="text-red-500 mt-2">{typeof error === "string" ? error : "An error occurred. Please try again."}</p>}
      </form>
    </div>
  );
};

export default Register;
