import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../Slice/productSlice";
import { NavLink } from "react-router-dom";
import { formatPriceUSD } from "../Component/currencyFormatter";
import { fetchCategories } from "../Slice/categorySlice";
import { toast } from "react-toastify";

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const { data: products, loading, error } = useSelector((state) => state.products);
  const { data: categories = [] } = useSelector((state) => state.categories);

  const [activeView, setActiveView] = useState("all");

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    imageUrl: "",
    moreDetails: "",
    available: true,
    categoryId: "",
  });

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      id: "",
      name: "",
      description: "",
      price: "",
      imageUrl: "",
      moreDetails: "",
      available: true,
      categoryId: "",
    });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      price: Number(formData.price),
      category_id: {
        categoryId: Number(formData.categoryId),
      },
    };

    dispatch(addProduct(dataToSend))
      .unwrap()
      .then(() => {
        toast.success("✅ Product added successfully!");
        resetForm();
        setActiveView("all");
        dispatch(fetchProducts());
      })
      .catch((err) => {
        toast.error("❌ Failed to add product: " + err.message);
      });
  };

  const handleUpdateProduct = (e) => {
    e.preventDefault();
    const dataToSend = {
      ...formData,
      price: Number(formData.price),
        categoryId: Number(formData.categoryId),
      
    };

    dispatch(updateProduct({ id: formData.id, data: dataToSend }))
      .unwrap()
      .then(() => {
        toast.success("✅ Product updated successfully!");
        resetForm();
        setActiveView("all");
        dispatch(fetchProducts());
      })
      .catch((err) => {
        toast.error("❌ Failed to update product: " + err.message);
      });
  };

  const handleEditClick = (product) => {
    setFormData({
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
      moreDetails: product.moreDetails,
      available: product.available,
      categoryId: product.category_id?.categoryId || "",
    });
    setActiveView("update");
  };
  
 const handleDeleteProduct = (id) => {
  if (!window.confirm("Are you sure you want to delete this product?")) return;

  console.log("Deleting id:", id, "current products count:", products.length);

  dispatch(deleteProduct(id))
    .unwrap()
    .then(() => {
      toast.success("🗑️ Product deleted successfully!");
      // Option A: rely on slice to remove the item (recommended)
      // Option B: if backend returns authoritative list, re-fetch
      // dispatch(fetchProducts());
    })
    .catch((err) => {
      console.error("Delete failed:", err);
      toast.error("❌ Failed to delete product: " + (err?.message || JSON.stringify(err)));
    });
};

  return (
    <div className="flex w-full min-h-screen mt-[100px] bg-[#F4F1EA]">
      {/* Sidebar */}
      <div className="w-[250px] bg-[#333] text-white p-6">
        <h2 className="text-2xl font-bold mb-8 text-center">Admin Panel</h2>
        <ul className="space-y-4">
          <li
            onClick={() => setActiveView("all")}
            className={`cursor-pointer p-3 rounded-lg ${
              activeView === "all" ? "bg-[#555]" : "hover:bg-[#444]"
            }`}
          >
            All Products
          </li>
          <li
            onClick={() => {
              resetForm();
              setActiveView("add");
            }}
            className={`cursor-pointer p-3 rounded-lg ${
              activeView === "add" ? "bg-[#555]" : "hover:bg-[#444]"
            }`}
          >
            Add Product
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {activeView === "all" && (
          <>
            <h2 className="text-2xl font-bold mb-4">All Products</h2>
            {loading ? (
              <p>Loading...</p>
            ) : error ? (
              <p className="text-red-600">Error: {error}</p>
            ) : (
              <div className="flex flex-col gap-4">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center bg-white border rounded shadow hover:bg-[#ffb936] transition-all p-4"
                  >
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-[60px] h-[60px] object-cover rounded mr-6"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-xl font-bold font-oswald">
                        {product.name}
                      </h3>
                      <p className="text-lg font-medium font-oswald text-[#212121]">
                        {formatPriceUSD(product.price)}
                      </p>
                      <p className="font-oswald text-[#212121]">
                        {product.description}
                      </p>
                     <div className="flex gap-4"> 
                       <button
                        className="mt-2 w-fit px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        onClick={() => handleEditClick(product)}
                      >
                        Edit
                      </button>
                      <button
    className="mt-2 w-fit px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
    onClick={(e) => {
      e.preventDefault();
      handleDeleteProduct(product.id);
    }}
  >
    Delete
  </button>
                     </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}

        {(activeView === "add" || activeView === "update") && (
          <>
            <h2 className="text-2xl font-bold mb-4">
              {activeView === "add" ? "Add New Product" : "Edit Product"}
            </h2>
            <form
              onSubmit={
                activeView === "add" ? handleAddProduct : handleUpdateProduct
              }
              className="space-y-4 bg-white p-6 rounded shadow-md w-full max-w-xl"
            >
              <input
                type="text"
                name="name"
                placeholder="Product Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                value={formData.price}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="text"
                name="imageUrl"
                placeholder="Image URL"
                value={formData.imageUrl}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="number"
                name="categoryId"
                placeholder="Category ID"
                value={formData.categoryId}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
                required
              />
              <textarea
                name="moreDetails"
                placeholder="More Details"
                value={formData.moreDetails}
                onChange={handleInputChange}
                className="w-full border p-2 rounded"
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="available"
                  checked={formData.available}
                  onChange={handleInputChange}
                />
                <span>Available</span>
              </label>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  {activeView === "add" ? "Add Product" : "Update Product"}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setActiveView("all");
                  }}
                  className="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
