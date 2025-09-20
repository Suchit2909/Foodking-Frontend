import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../Slice/authSlice";
import { useNavigate } from "react-router-dom";
import { fetchCart,addCartItem  } from "../Slice/cartSlice";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { username, password, token, role, loading, error, cartId ,userId} = useSelector((state) => state.authentication);

   const cartState = useSelector((state) => state.cart); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const result = await dispatch(loginUser(form)).unwrap();
           console.log("Login successful:", result);
     
      
      
    } catch (err) {
      console.error("Login error:", err);
    }
  };

  useEffect(() => {
    if (token && userId) {
      dispatch(fetchCart(userId));
    }
  }, [token, userId, dispatch]);

   useEffect(() => {
    if (token && cartState.cartId) {
      dispatch(addCartItem(cartState.cartId));
    }
  }, [token, cartState.cartId, dispatch]);

 useEffect(() => {
  console.log("Login Navigation Debug:", { token, role });
  if (token && role && role !== "undefined") {
    setForm({ username: "", password: "" });
    navigate(role === "ADMIN" ? "/admin" : "/user", { replace: true });
  }
}, [token, role, navigate]);


  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-login-bg bg-cover bg-center">
      <div className="p-8 max-w-md w-full bg-white bg-opacity-90 rounded-xl shadow-2xl">
        <h2 className="text-2xl mb-6 font-bold text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && <p className="text-red-500 mt-3 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
