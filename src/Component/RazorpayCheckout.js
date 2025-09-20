import React from "react";
import { useSelector } from "react-redux";

const RazorpayCheckout = ({ amountInCents, selectedAddressId }) => {
  const token = useSelector((state) => state.authentication.token);
  console.log(token);
 

  const handlePayment = async () => {
    try {
      if (!token || !selectedAddressId) {
        alert("Login and select an address before proceeding.");
        return;
      }
      const orderRequest = {
  user: { username: localStorage.getItem("username") },
  address: { id: selectedAddressId },
};

      const res = await fetch("http://localhost:8080/api/auth/payment/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ amount: amountInCents }),
      });

      const data = await res.json();
      const orderData = JSON.parse(data.orderData);

      const options = {
        key: "rzp_test_KOSn1qL4kA4iGD", 
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Food King",
        description: "Secure Order Payment",
        order_id: orderData.id,
        handler: async function (response) {
          alert("✅ Payment successful!\nID: " + response.razorpay_payment_id);

          // 👇 Call your order placement API
          const placeOrder = await fetch("http://localhost:8080/api/auth/payment/place-after-payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            
            body: JSON.stringify({
  orderRequest,
  cartId: parseInt(localStorage.getItem("cartId")),
 
  paymentId: response.razorpay_payment_id,
  razorpayOrderId: response.razorpay_order_id,
   paymentMethod: "RAZORPAY",
}),
 
          });

          const result = await placeOrder.text();
          alert(result || "Order placed successfully!");
          window.location.href = "/orders"; // Redirect to order history page
        },
        prefill: {
          name: localStorage.getItem("username") || "",
          email: localStorage.getItem("email") || "",
        },
        theme: {
          color: "#3399cc",
        },
      };

      const razor = new window.Razorpay(options);
      razor.open();
    } catch (err) {
      console.error("Payment Error:", err);
alert("❌ Payment failed to start.\nCheck console for details.");
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
    >
      Pay with Razorpay
    </button>
  );
};

export default RazorpayCheckout;
