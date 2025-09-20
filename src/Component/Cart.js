import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../Slice/cartSlice';
import { Link } from 'react-router-dom';
import {formatPriceUSD} from './currencyFormatter';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalPrice, totalQuantity } = useSelector((state) => state.cartItems);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (item, type) => {
    const newQuantity = type === 'inc' ? item.quantity + 1 : item.quantity - 1;
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  if (items.length === 0) {
    return (
      <div className="mt-[100px]">
        <div className="page-heading text-center bg-bread-crumbs bg-no-repeat bg-cover bg-center border py-[120px]">
        <h1 className="font-bold text-[60px] font-oswald text-white">Your Cart</h1>
        <p className="font-medium font-oswald text-green-400">
          <span className="text-[#d12525] mr-2">Home</span> /
          <span className="text-[#d12525] ml-2">Cart</span>
        </p>
      </div>
        <p className='mt-24 text-center text-3xl font-oswald font-semibold'>Your cart is empty 😔</p>
        <Link to="/shop" className="text-blue-500 underline mt-4 block text-center text-xl font-oswald">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="mt-[104px] ">
       <div className="page-heading text-center bg-bread-crumbs bg-no-repeat bg-cover bg-center border py-[120px]">
        <h1 className="font-bold text-[60px] font-oswald text-white">Your Cart</h1>
        <p className="font-medium font-oswald text-green-400">
          <span className="text-[#d12525] mr-2">Home</span> /
          <span className="text-[#d12525] ml-2">Cart</span>
        </p>
      </div>
      

      <div className="grid gap-6 px-20 py-24">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-center justify-between border-y-2 p-5 rounded-lg shadow-sm">
            <img src={item.imageUrl} alt={item.name} className="w-30 h-30 object-cover rounded-md" />
            
            <div className="flex-1 mx-4 font-oswald">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">Price: {formatPriceUSD(item.price)}</p>
              <div className="flex items-center mt-2">
                <button 
                  onClick={() => handleQuantityChange(item, 'dec')} 
                  className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400"
                >-</button>
                <span className="px-4 py-1 border">{item.quantity}</span>
                <button 
                  onClick={() => handleQuantityChange(item, 'inc')} 
                  className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400"
                >+</button>
              </div>
            </div>

            <div className="text-right font-oswald">
              <p className="text-lg font-bold">{formatPriceUSD(item.price * item.quantity)}</p>
              <button 
                onClick={() => handleRemove(item.id)} 
                className="text-red-500 mt-2 underline"
              >Remove</button>
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="mt-10 text-right">
        <p className="text-xl">Total Quantity: <strong>{totalQuantity}</strong></p>
        <p className="text-2xl font-bold text-green-600">Total Price: {formatPriceUSD(totalPrice)}</p>
      </div>
    </div>
  );
};

export default Cart;
