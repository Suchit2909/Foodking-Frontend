  import React, { useEffect,useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { getAddress } from "../Slice/addressSlice";
  import AddressForm from "../Component/AddressForm";
  import { formatPriceUSD } from '../Component/currencyFormatter';
  import { useNavigate } from "react-router-dom";
  import RazorpayCheckout from "../Component/RazorpayCheckout";
  import { NavLink } from "react-router-dom";
import { fetchCartItemsByUser } from "../Slice/cartSlice";
  

  const CheckOutPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = useSelector((state) => state.authentication.token);
    console.log("token", token);

    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [showAddressForm, setShowAddressForm] = useState(false);

    const { addresses, loading: addressLoading } = useSelector((state) => state.address);
    console.log("selectedAddressId", selectedAddressId);
    const { items: cartItems, loading: cartLoading } = useSelector((state) => state.cart);

    useEffect(() => {
      dispatch(getAddress());
      dispatch(fetchCartItemsByUser());
    }, [dispatch]);

    const calculateTotal = () => {
      return cartItems.reduce((acc, item) => {
        const price = item.product?.price || 0;
        return acc + price * item.quantity;
      }, 0);
    };

    const handleSelectAddress = (id) => {
      setSelectedAddressId(id);
    };

    // const handleCheckout = () => {
    //   if (!token) {
    //     alert("Please login to place your order.");
    //     navigate('/login'); // or open modal
    //     return;
    //   }

    //   // continue with placing order
    //   // dispatch(orderThunk({...}))
    // };

    return (
      <>
      <div className="page-heading  text-center bg-bread-crumbs bg-no-repeat bg-cover bg-center py-[80px] mt-[100px]   xl:py-[120px]">
        <h1 className="font-bold text-[30px] lg:text-[60px] font-oswald text-white">
         Checkout
        </h1>
        <p className="font-medium font-oswald text-green-400">
          <NavLink className="text-[#d12525] text-[16px] mr-2" to="/">
            Home
          </NavLink>{" "}
          /
          <NavLink className="text-[#d12525] text-[16px] ml-2" to="/shop">
            Shop
          </NavLink>
        </p>
      </div>
      <div className="py-12  p-6 px-3 md:px-6 lg:px-11 xl:px-24  mx-auto space-y-8 bg-[#F4F1EA]">
        

        {/* Address Section */}
        <div className="bg-white p-4 rounded shadow">
  <h3 className="text-lg font-semibold mb-2">Delivery Address</h3>

  {!showAddressForm && addresses && addresses.length > 0 ? (
    <div className="space-y-4">
      {addresses.map((addr) => (
        <label
          key={addr.id}
          className={`block border p-3 rounded shadow cursor-pointer ${
            selectedAddressId === addr.id ? "border-blue-500 bg-blue-50" : ""
          }`}
        >
          <input
            type="radio"
            name="selectedAddress"
            value={addr.id}
            checked={selectedAddressId === addr.id}
            onChange={() => handleSelectAddress(addr.id)}
            className="mr-2"
          />
          <div className="inline-block text-gray-700">
            <p>{addr.street}</p>
            <p>{addr.city}, {addr.state} - {addr.zip}</p>
            <p>{addr.country}</p>
          </div>
        </label>
      ))}

      <button
        className="mt-2 text-sm text-blue-600 underline"
        onClick={() => setShowAddressForm(true)}
      >
        Refresh / Change Address
      </button>
    </div>
  ) : (
    <div>
      <AddressForm />
      <button
        className="mt-4 text-sm text-gray-700 underline"
        onClick={() => {
          setShowAddressForm(false);
          dispatch(getAddress());
        }}
      >
        Cancel / Use Existing Address
      </button>
    </div>
  )}
</div>


        {/* Cart Section */}
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Your Order</h3>

          {cartItems.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <div className="space-y-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{item.product?.name || "Unknown Product"}</p>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <p className="font-medium">
                    {item.product?.price ? formatPriceUSD(item.product.price * item.quantity) : "N/A"}
                  </p>
                </div>
              ))}

              <div className="flex justify-between font-bold mt-4">
                <span>Total:</span>
                <span>{formatPriceUSD(calculateTotal())}</span>
              </div>
            </div>
          )}
        </div>

        {/* Payment Section */}
        {/* <div>
    <p>Token: {token ? "Logged In" : "Not Logged In"}</p>
    <p>Selected Address Id: {selectedAddressId || "None"}</p>

    {token && selectedAddressId ? (
      <button onClick={() => alert("Ready to pay!")}>Pay Now</button>
    ) : (
      <p>Please select address and login to proceed.</p>
    )}
  </div> */}
        <div className="text-right">
          {token && selectedAddressId ? (
    <RazorpayCheckout
      amountInCents={calculateTotal()}
    selectedAddressId={selectedAddressId}
    />
  ) : (
    <p className="text-red-500">Please select address and login to proceed.</p>
  )}
        </div>
      </div>
      </>
      
      
    );
  };

  export default CheckOutPage;
