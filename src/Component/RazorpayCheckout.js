import React, { useEffect, useState } from "react";
import { useSelector , useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Slice/cartSlice";

const BACKEND = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";

const RazorpayCheckout = ({ amountInRupees, selectedAddressId }) => {
  const token = useSelector((state) => state.authentication.token);
  const user = useSelector((state) => state.authentication.userId);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!document.getElementById("razorpay-script")) {
      const s = document.createElement("script");
      s.id = "razorpay-script";
      s.src = "https://checkout.razorpay.com/v1/checkout.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  const toPaise = (rupees) => Math.round(Number(rupees) * 100);

  const handlePayment = async () => {
    if (!token) {
      alert("Please login to pay.");
      return;
    }

    if (!selectedAddressId) {
      alert("Please choose a delivery address.");
      return;
    }

    const amountPaise = toPaise(amountInRupees);
    if (!amountPaise || amountPaise <= 0) {
      alert("Invalid amount");
      return;
    }

    setLoading(true);

    try {
      // 1️⃣ Create order
      const createResp = await fetch(
        `${BACKEND}/api/user/payment/create-order`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            amount: amountPaise,
            addressId: selectedAddressId,
          }),
        }
      );

      const orderData = await createResp.json();

      console.log("Order response:", orderData);

      if (!createResp.ok || !orderData.id) {
        alert("Failed to create Razorpay order");
        setLoading(false);
        return;
      }

      // 2️⃣ Razorpay options
      const options = {
        key: "rzp_test_RJTy244ttMYNmU", // TEST <KEY></KEY>
        currency: "INR",
        order_id: orderData.id, // ✅ FIXED
        name: "Food Ordering App",
        description: "Order Payment",

        handler: async function (response) {
  console.log("Payment Success:", response);

  try {
    const res = await fetch(
      "http://localhost:8080/auth/user/order/place",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          userId: user.id,                     // from redux auth
          addressId: selectedAddressId,
          amount: amountPaise,                 // in paise
          paymentId: response.razorpay_payment_id,
          paymentMethod: "RAZORPAY",
        }),
      }
    );

    if (!res.ok) {
      throw new Error("Order save failed");
    }

    const savedOrder = await res.json();
    console.log("Order saved:", savedOrder);

    // 🔥 Clear cart in frontend
    dispatch(clearCart());

    alert("Order placed successfully 🎉");
    navigate(`/order-success/${savedOrder.id}`);

  } catch (err) {
    console.error(err);
    alert("Payment done but order save failed");
  } finally {
    setLoading(false);
  }
},


        theme: {
          color: "#16a34a", // Tailwind green-600
        },
      };

      if (!window.Razorpay) {
        alert("Razorpay SDK not loaded");
        setLoading(false);
        return;
      }

      const rzp = new window.Razorpay(options);

      rzp.on("payment.failed", function (resp) {
        console.error("Payment failed:", resp);
        alert(resp.error?.description || "Payment failed");
        setLoading(false);
      });

      rzp.open();

    } catch (err) {
      console.error("Payment error:", err);
      alert("Payment initialization failed");
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"
    >
      {loading ? "Processing..." : `Pay ₹${Number(amountInRupees).toFixed(2)}`}
    </button>
  );
};

export default RazorpayCheckout;
