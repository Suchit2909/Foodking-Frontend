import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../Slice/favoriteSlice";
import { Link } from "react-router-dom";
import { formatPriceUSD } from "./currencyFormatter";

const WishlistPage = () => {
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFavorite(id));
  };

  return (
    <div className="mt-[60px] lg:mt-[100px] px-3 md:px-6 lg:px-11 xl:px-24 py-10 bg-[#f4f1ea] min-h-screen">
      <h1 className="text-xl  md:text-3xl xl:text-5xl font-bold font-oswald text-center mb-10">
        Your Wishlist 
      </h1>

      {favorites.length === 0 ? (
        <p className="text-gray-600 text-center text-lg">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-6 max-w-5xl mx-auto">
          {favorites.map((product) => (
            <div
              key={product.id}
              className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white p-4 rounded-xl shadow"
            >
              <div className="flex items-center gap-6 w-full sm:w-[70%]">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-[100px] h-[100px] object-contain rounded-md bg-gray-100"
                />
                <div>
                  <h2 className="md:text-xl font-bold font-oswald mb-1">{product.name}</h2>
                  <p className="text-green-600 font-oswald font-semibold">
                    {formatPriceUSD(product.price)}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 justify-center sm:justify-end w-full sm:w-[30%]">
                <Link
                  to={`/product/${product.id}`}
                  className="bg-[#00813D] text-white px-4 py-2 text-sm rounded-full font-oswald hover:bg-[#d12525] transition"
                >
                  View Product
                </Link>

                <button
                  onClick={() => handleRemove(product.id)}
                  className="text-red-600 font-semibold font-oswald text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
