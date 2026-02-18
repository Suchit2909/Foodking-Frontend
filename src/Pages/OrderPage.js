import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLatestOrderByUserId,fetchOrdersByUserId } from "../Slice/orderSlice";
import { formatPriceUSD } from "../Component/currencyFormatter";

const OrderPage = () => {
  const dispatch = useDispatch();
  const { latestOrder, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrdersByUserId());
  }, [dispatch]);

  if (loading) return <p className="text-center mt-20 text-lg">Loading...</p>;
  if (error) return <p className="text-center mt-20 text-red-600">Error: {error}</p>;
  if (!latestOrder) return <p className="text-center mt-20">No recent order found.</p>;

  return (
    <div className="p-6 mt-[100px] px-3 md:px-6 lg:px-11 xl:px-24 mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">✅ Order Confirmed!</h2>

        <div className="mb-4">
          <p className="text-lg font-semibold">Order ID: <span className="text-gray-700">{latestOrder.id}</span></p>
          <p className="text-lg font-semibold">Total Amount: <span className="text-gray-700">{formatPriceUSD(latestOrder.totalAmount)}</span></p>
          <p className="text-lg font-semibold">Status: <span className="text-blue-600">{latestOrder.orderStatus}</span></p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-3">🛒 Items Ordered</h3>
          <div className="space-y-4">
            {latestOrder.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 bg-gray-100 rounded-lg shadow-sm"
              >
                <img
                  src={item.products.imageUrl}
                  alt={item.products.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <p className="font-medium text-lg">{item.products.name}</p>
                  <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                  <p className="text-sm text-gray-600">Price: {formatPriceUSD(item.totalPrice)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
