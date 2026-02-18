import React from "react";
import { useParams, NavLink } from "react-router-dom";

const OrderSucess = () => {
  const { orderId } = useParams();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F1EA] px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
        <div className="text-green-600 text-5xl mb-4">✔</div>

        <h1 className="text-2xl font-bold mb-2">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 mb-4">
          Thank you for your order. Your payment was successful.
        </p>

        <p className="text-sm text-gray-700 mb-6">
          <span className="font-semibold">Order ID:</span> #{orderId}
        </p>

        <div className="flex flex-col gap-3">
          <NavLink
            to="/orders"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            View My Orders
          </NavLink>

          <NavLink
            to="/shop"
            className="border border-gray-300 py-2 rounded hover:bg-gray-100"
          >
            Continue Shopping
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default OrderSucess;
