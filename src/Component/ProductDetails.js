import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../Slice/productSlice";
import { fetchCategories } from "../Slice/categorySlice";
import { addCartItem } from "../Slice/cartSlice";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { GoHeart } from "react-icons/go";
import { formatPriceUSD } from "./currencyFormatter";
import { toast } from "react-toastify";
import { addFavorite, removeFavorite } from "../Slice/favoriteSlice";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singleProduct, singleLoading, singleError } = useSelector(
    (state) => state.products
  );

  const token = useSelector((state) => state.authentication.token);
  const favorites = useSelector((state) => state.favorite.favorites);
  const [isFavorited, setIsFavorited] = useState(false);

  useEffect(() => {
    const isAlreadyFav = favorites.some((fav) => fav.id === Number(id));
    setIsFavorited(isAlreadyFav);
  }, [favorites, id]);

  const handleFavoriteToggle = () => {
    if (isFavorited) {
      dispatch(removeFavorite(singleProduct.id));
      toast.info("Removed from favorites");
    } else {
      dispatch(addFavorite(singleProduct));
      toast.success("Product added to favorites!");
    }

    setIsFavorited((prev) => !prev);
  };

  const {
    data: categories,
    loading,
    error,
  } = useSelector((state) => state.categories);
  const cartId = useSelector((state) => state.authentication.cartId);
  const { isGuest } = useSelector((state) => state.cart);

  const isLoggedIn = useSelector((state) => !!state.authentication.token);
  console.log(isLoggedIn);

  console.log("Categories:", categories);
console.log("Single Product:", singleProduct);

  const [quantity, setQuantity] = useState(1);
  const [addedProducts, setAddedProducts] = useState({});

  const increaseQnty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQnty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const AddByQuantity = () => {
    const cartItem = {
      cartId,
      productId: singleProduct?.id,
      quantity,
    };

    if (isLoggedIn) {
      dispatch(addCartItem(cartItem));
    } else {
      dispatch(addCartItem({ productId: singleProduct.id, quantity }));
    }
    toast.success(`${singleProduct.name} (x${quantity}) added to cart!`);
  };

  const handleAddToCart = (product) => {
    const payload = isLoggedIn
      ? { cartId, productId: product.id, quantity: 1 }
      : { productId: product.id, quantity: 1 }; // fix: send productId, not product

    dispatch(addCartItem(payload));

    toast.success(`${product.name} added to cart!`);

    setAddedProducts((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedProducts((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  useEffect(() => {
    dispatch(fetchProductById(id));
    dispatch(fetchCategories());
  }, [id, dispatch]);

  const matchedCategory = useMemo(() => {
    if (!singleProduct || !categories || categories.length === 0) return null;
    return categories.find((category) =>
      category.products?.some((prod) => prod.id === Number(singleProduct.id))
    );
  }, [categories, singleProduct]);

  const relatedProducts = useMemo(() => {
    if (!matchedCategory || !singleProduct) return [];
    const filteredProducts = matchedCategory.products.filter(
      (prod) => prod.id !== Number(singleProduct.id)
    );
    // Return first 3 (or fewer if not available)
    return filteredProducts.slice(0, 3);
  }, [matchedCategory, singleProduct]);

  if (singleLoading || loading || !singleProduct || categories.length === 0) {
    return <p>Loading product details...</p>;
  }
  if (singleError) return <div>Error: {singleError}</div>;
  if (!singleProduct) return <div>No product found</div>;

  return (
    <>
      <div className=" mt-[104px]  text-center">
        <div className="page-heading text-center bg-bread-crumbs bg-no-repeat bg-cover bg-center border py-[120px]">
          <h1 className="font-bold text-[60px] font-oswald text-white">
            {singleProduct.name}
          </h1>
          <p className="text-[#00813d] grid grid-flow-col gap-1 justify-center items-center font-oswald text-lg font-semibold">
            <NavLink className="text-[#d12525] hover:text-[#00813d] " to="/">
              Home{" "}
            </NavLink>
            /
            <NavLink className="text-[#d12525] hover:text-[#00813d]" to="/shop">
              Shop
            </NavLink>{" "}
            / <span className="text-[#d12525] ">{singleProduct.name}</span>
          </p>
        </div>
        <div className="nain-div grid grid-cols-2 gap-4 my-32 px-24">
          <div className=" grid justify-center items-center">
            <img
              src={singleProduct.imageUrl}
              alt={singleProduct.name}
              className=" w-full max-w-[400px] h-auto max-h-[400px] object-contain mb-4"
            />
          </div>
          <div className=" text-start">
            <h1 className="text-[26px] font-bold mb-2 font-oswald">
              {singleProduct.name}
            </h1>
            <p className="text-[18px] text-[#5c5c5b] font-oswald mb-3">
              {singleProduct.description}
            </p>

            <p className="text-[22px] text-[#00813d] font-oswald font-bold">
              {formatPriceUSD(singleProduct.price)}
            </p>

            <div className="flex gap-6 w-[70%] items-center my-4  ">
              {/* Quantity Selector */}
              <div className="grid grid-flow-col items-center font-oswald border-2 border-gray-300 rounded w-[150px]">
                <button
                  onClick={decreaseQnty}
                  className="px-2 py-2 text-3xl font-semibold border-r-2 hover:text-[#00813d] transition-all duration-150"
                >
                  −
                </button>
                <span className="text-2xl font-semibold flex items-center justify-center">
                  {quantity}
                </span>
                <button
                  onClick={increaseQnty}
                  className="px-2 py-2 text-3xl font-semibold border-l-2 hover:text-[#00813d] transition-all duration-150 "
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                disabled={!singleProduct.available}
                onClick={AddByQuantity}
                className="bg-[#00813d] text-white px-10 py-3  uppercase rounded-md text-xl font-oswald flex justify-center items-center hover:bg-[#d12525] transition flex-1"
              >
                <LiaShoppingBasketSolid className="text-white mr-3 text-xl" />{" "}
                Add to Cart
              </button>
            </div>

            <button
              onClick={handleFavoriteToggle}
              className={`flex items-center gap-2 font-oswald font-bold mb-6 ${
                isFavorited ? "text-green-600" : "text-[#212121]"
              }`}
            >
              <GoHeart className="text-xl" />
              {isFavorited ? "Product Added!" : "Add to Wishlist"}
            </button>
            <p className="uppercase font-oswald font-bold text-[#212121] mb-3 text-[17px]">
              Availability:{" "}
              {singleProduct.available ? "In Stock" : "Out of Stock"}
            </p>
            <p className="uppercase font-oswald font-bold text-[#212121] text-[17px]">
              Categories:{" "}
              <span>{matchedCategory ? matchedCategory.name : "Unknown"}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="Description px-24 ">
        <div className="px-12 py-4 bg-[#FFB936] rounded-md mb-10 w-[15%] flex justify-center items-center">
          <h1 className="text-[18px]  font-oswald  font-bold text-[#212121]">
            DESCRIPTION
          </h1>
        </div>
        <div className="descp-text px-3">
          <h1 className="text-[24px] font-oswald  font-bold text-[#212121] mb-5">
            EXPERIENCE IS OVER THE WORLD VISIT
          </h1>
          <p className="text-[17px] text-[#5C5C5B] font-oswald">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vulputate vestibulum Phasellus rhoncus, dolor eget viverra pretium,
            dolor Numquam odit accusantium odit aut commodi et. Nostrum est
            atque ut dolorum. Et sequi aut atque doloribus qui. Iure amet in
            voluptate reiciendis. Perspiciatis consequatur aperiam repellendus
            velit quia est minima. tellus aliquet nunc vitae ultricies erat elit
            eu lacus. Vestibulum non justo consectetur, cursus ante, tincidunt
            sapien. Nulla quis diam sit amet turpis interdum accumsan quis
            necenim. Vivamus faucibus ex sed nibh egestas elementum. Mauris et
            bibendum dui. Aenean consequat pulvinar luctus
          </p>
        </div>
        <div className="more-details px-3 mt-10">
          <h1 className="text-[24px] font-oswald  font-bold text-[#212121] mb-5">
            {" "}
            MORE DETAILS{" "}
          </h1>
          <ul className="text-[17px] text-[#5C5C5B] font-oswald space-y-3">
            <li>
              {singleProduct.moreDetails}
            </li>
            <li>
              Lorem Ipsum has been the ‘s standard dummy text. Lorem Ipsumum is
              simply dummy text.
            </li>
            <li>type here your detail one by one li more add</li>
            <li>
              {" "}
              has been the industry’s standard dummy text ever since. Lorem Ips
            </li>
          </ul>
        </div>
        <div className="my-20 py-14 flex flex-col justify-center items-center bg-[#F4F1EA]">
          <div className="headind-text font-oswald text-center mb-5">
            <p className="text-[17px] font-bold text-[#00813D]">
              crispy, every bite taste
            </p>
            <h1 className="text-[60px] font-bold text-[#212121]">
              Related Products
            </h1>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <div key={product.id} className="border p-4 rounded shadow">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-[200px] object-cover mb-2"
                  />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                  <p className="text-green-600 font-bold">{product.price} ₹</p>
                  <NavLink
                    to={`/product/${product.id}`}
                    className="text-blue-600 hover:underline mt-2 block"
                  >
                    View Product
                  </NavLink>
                </div>
              ))}
            </div> */}
          <div className="grid grid-cols-1 md:grid-cols-3  gap-6 justify-center ">
            {relatedProducts.map((product) => (
              <NavLink
                to={`/product/${product.id}`}
                key={product.id}
                className="product-card w-[20rem] h-[32rem] group shadow-xl rounded-t-xl rounded-b-xl  group-hover:shadow-xl hover:rounded-b-xl text-center transition-all duration-200  hover:bg-[#ffb936] grid grid-flow-row"
              >
                <div className="flex flex-col justify-center items-center img-button bg-white rounded-t-lg rounded-b-lg  group-hover:bg-[#ffb936]">
                  <img
                    src={product.imageUrl}
                    className="mb-6 max-h-[200px] object-contain"
                    alt={product.name}
                  />
                  <div className="Add-cart-to-button">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product);
                      }}
                      className={`relative overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 px-[95px] py-[10px] 
                ${
                  addedProducts[product.id]
                    ? "bg-green-500 text-white"
                    : "bg-black text-white"
                } 
                hover:bg-[#00813D] 
                font-oswald font-semibold text-center rounded-full`}
                    >
                      {/* Background animation */}
                      <span className="absolute inset-0 bg-black hover:bg-[#00813D] scale-x-0 hover:scale-x-100 origin-center transition-transform duration-500 rounded-full z-0"></span>

                      {/* Button Text */}
                      <span className="relative z-10 font-oswald font-semibold">
                        {addedProducts[product.id]
                          ? "Item Added ✓"
                          : "Add To Cart"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="price-name grid grid-flow-row gap-2 transition-all duration-300">
                  <div className="grid grid-flow-col justify-center items-center gap-3">
                    <span className="p-1 rounded-sm bg-[#ffb936] group-hover:bg-white font-medium font-oswald shadow-sm">
                      -10%
                    </span>
                    <p className="text-[16px] font-semibold font-oswald">
                      {formatPriceUSD(product.price)}
                    </p>
                  </div>
                  <h4 className="font-oswald text-[20px] font-semibold">
                    {product.name}
                  </h4>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
