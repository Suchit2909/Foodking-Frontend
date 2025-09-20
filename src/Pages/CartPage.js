import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { formatPriceUSD } from '../Component/currencyFormatter';
import { fetchCartItemsByUser,
  updateCartItemQuantity,
  deleteCartItem,
 } from "../Slice/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 const { items, status } = useSelector((state) => state.cart);
 
  const token = useSelector((state) => state.authentication.token);
   

  const userId = useSelector((state) => state.authentication.userId);
   
useEffect(() => {
    if (userId && token) {
      dispatch(fetchCartItemsByUser(userId));
    }
  }, [dispatch, userId, token]);

  
if (status === 'loading') {
    return <div className="mt-40 text-center">Loading your cart...</div>;
  }

if (!items || items.length === 0) {
  return (
    <div className="mt-40 text-center text-lg">
      Your cart is empty. Please add some items.
    </div>
  );
}
  
  const handleQuantityChange = (itemId, type) => {
    const item = items.find((i) => i.id === itemId);
    if (!item) return;

    const currentQty = item.quantity;
    const newQty = type === 'inc' ? currentQty + 1 : currentQty - 1;
    if (newQty < 1) return;

    dispatch(updateCartItemQuantity({ cartItemId: item.id, quantity: newQty }));
  };

      
  // Remove item
   const handleRemoveItem = (itemId) => {
    dispatch(deleteCartItem(itemId));
  };


  // Total calculation
  const calculateTotal = () => {
    return items.reduce((total, item) => {
      const price = parseFloat(item?.product?.price || 0);
      return total + price * item.quantity;
    }, 0).toFixed(2);
  };
 

  // Checkout navigation
  const handleCheckout = () => {
    navigate(`/checkout`);
  };
 
  return (
    <div className="min-h-screen w-full mt-[30px] md:mt-[50px] lg:mt-[100px] bg-[#f8f9fa]">
      {/* Breadcrumb */}
      <div className="page-heading text-center bg-bread-crumbs bg-no-repeat bg-cover bg-center border py-[80px] xl:py-[120px]">
        <h1 className="font-bold  text-[40px] lg:text-[60px] font-oswald text-white">Your Cart</h1>
        <p className="font-medium font-oswald text-green-400">
          <span className="text-[#d12525] mr-2">Home</span> /
          <span className="text-[#d12525] ml-2">Cart</span>
        </p>
      </div>

      {/* Cart Items */}
      <div className="grid gap-6 px-3 sm:px-6 lg:px-11 xl:px-24  h-full py-24">
        {items.map((item) => {
  const product = item.product || item; 
  

  return (
    <div
      key={item.id || item.productId}
      className="flex flex-col md:flex-row items-center justify-between border-y-2 p-5 rounded-lg shadow-sm bg-white"
    >
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-32 h-32 object-cover rounded-md"
      />

      <div className="flex-1 mx-4 font-oswald">
        <h3 className="text-xl font-semibold">{product.name}</h3>
        <p className="text-gray-600">Price: {formatPriceUSD(product.price)}</p>

        <div className="flex items-center mt-2">
          <button
            onClick={() => handleQuantityChange(item.id, 'dec')}
            className="px-3 py-1 bg-gray-300 rounded-l hover:bg-gray-400"
          >-</button>
          <span className="px-4 py-1 border">{item.quantity}</span>
          <button
            onClick={() => handleQuantityChange(item.id, 'inc')}
            className="px-3 py-1 bg-gray-300 rounded-r hover:bg-gray-400"
          >+</button>
        </div>
      </div>

      <div className="text-right font-oswald">
        <p className="text-lg font-bold">
          {formatPriceUSD(product.price * item.quantity)}
        </p>
        <button
          onClick={() => handleRemoveItem(item.id)}
          className="text-red-500 mt-2 underline"
        >
          Remove
        </button>
      </div>
    </div>
  );
})}
      </div>

      {/* Total & Checkout */}
      <div className="text-right px-3 sm:px-6 lg:px-11 xl:px-24 pb-10">
        <h3 className="text-xl font-bold font-oswald">
          Total: {formatPriceUSD(calculateTotal())}
        </h3>
        <button
          onClick={handleCheckout}
          className="mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
