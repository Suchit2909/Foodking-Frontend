// src/components/AddressForm.js
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress } from "../Slice/addressSlice";

const AddressForm = () => {
  const dispatch = useDispatch();
  const{address,loading,error}= useSelector((state) => state.address);

  const [formData, setFormData] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addAddress(formData));
    setFormData({
     street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 p-4 bg-white rounded shadow"
    >
      
      <input
        name="street"
        value={formData.street}
        onChange={handleChange}
        placeholder="Street Address"
        required
      />
      <input
        name="city"
        value={formData.city}
        onChange={handleChange}
        placeholder="City"
        required
      />
      <input
        name="state"
        value={formData.state}
        onChange={handleChange}
        placeholder="State"
        required
      />
      <input
        name="zip"
        value={formData.zip}
        onChange={handleChange}
        placeholder="Pincode"
        required
      />

      <input
        name="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="country"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 rounded">
        Add Address
      </button>
    </form>
  );
};

export default AddressForm;
