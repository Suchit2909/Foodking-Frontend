import React from "react";
import StickyNavbar from "./Component/StickyNavbar";
import CategorySlider from "./Component/CategorySlider";
import CategoryProducts from "./Component/CategoryProducts";
import Banner from "./Component/Banner";
import Footer from "./Component/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminDasboard from "./Pages/AdminDashboard";

import Shop from "./Pages/Shop";
import ProductDetails from "./Component/ProductDetails";

import Login from "./Pages/Login";
import ProtectedRoute from "./Component/ProtectedRoute";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import UserDashboard from "./Pages/UserDashboard";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import CartPage from "./Pages/CartPage";
import Verify from "./Pages/Verify";
import Register from "./Pages/Register";
import Contact from "./Pages/Contact";
import AddressForm from "./Component/AddressForm";
import { useDispatch, useSelector } from "react-redux";
import CheckOutPage from "./Pages/CheckoutPage";
import Blog from "./Pages/Blog";
import { fetchCart, fetchCartItemsByUser } from "./Slice/cartSlice";
import OrderPage from "./Pages/OrderPage";
import Testimonial from "./Component/Testimonial";
import ScrollToTop from "./Component/ScrollToTop";
import WishlistPage from "./Component/WishlistPage";
import OrderSucess from "./Component/OrderSucess";

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.authentication.token);
 const userId = useSelector((state) => state.authentication.userId); 
  useEffect(() => {
  if (token && userId) {
    
     dispatch(fetchCartItemsByUser(userId));
  }
}, [dispatch,token,userId]);

  return (
    <div className="">
      <Router>
        <ScrollToTop />
        <StickyNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryId" element={<CategoryProducts />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/testi" element={<Testimonial />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/orders" element={<OrderPage />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/order-success/:orderId" element={<OrderSucess />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={["ADMIN"]}>
                <AdminDasboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/user"
            element={
              <ProtectedRoute allowedRoles={["USER"]}>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />  
        <ToastContainer position="top-right" autoClose={2000} />
      </Router>
    </div>
  );
};

export default App;
