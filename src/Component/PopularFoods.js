import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Slice/productSlice";
import { addCartItem} from "../Slice/cartSlice";
import { Link } from "react-router-dom";
import { formatPriceUSD } from "./currencyFormatter";
import { NavLink } from "react-router-dom";

const PopularFoods = () => {
  const dispatch = useDispatch();
  const { popularFoods, loading } = useSelector((state) => state.products);
  const isLoggedIn = useSelector((state) => !!state.authentication.token);
  console.log(isLoggedIn);

  const cartId = useSelector((state) => state.cart.cartId);
  console.log("Redux cartId:", cartId);

  const [addedProducts, setAddedProducts] = useState({});

  const handleAddToCart = (product) => {
    const payload = isLoggedIn
      ? { cartId, productId: product.id, quantity: 1 }
      : { productId: product.id, quantity: 1 }; // fix: send productId, not product

    dispatch(addCartItem(payload));

    setAddedProducts((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedProducts((prev) => ({ ...prev, [product.id]: false }));
    }, 2000);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="  bg-[#F4F1EA] py-[100px] ">
      <div className="flex flex-col justify-center items-center mb-16 space-y-2">
        <h3 className="text-[17px] md:text-[20px] font-semibold font-oswald text-[#00813D]">
          crispy, every bite taste
        </h3>
        <h2 className="text-[32px] lg:text-6xl text-[#212121] font-bold font-oswald">
          Popular Fast Foods
        </h2>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="product-grid mx-1 px-3 md:px-8 lg:px-11 xl:px-24 grid md:grid-cols-2 xl:grid-cols-4 gap-4 xl:gap-6 ">
          {popularFoods.map((prod) => (
            <NavLink
              to={`/product/${prod.id}`}
              key={prod.id}
              className="product-card w-full  group rounded-t-xl group-hover:shadow-xl hover:rounded-b-xl text-center transition-all duration-500 hover:bg-[#ffb936]  "
            >
              <div className="px-[30px] flex flex-col justify-center items-center img-button rounded-t-lg  rounded-b-lg  hover:rounded-b-none bg-white group-hover:bg-[#ffb936]     ">
                <img
                  src={prod.imageUrl}
                  className="w-full h-[200px] object-contain my-6 transition-transform duration-300 group-hover:scale-110"
                  alt=""
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(prod);
                  }}
                  className={`relative opacity-0 m-2 overflow-hidden  group-hover:opacity-100 transition-all duration-300 flex justify-center items-center px-14 md:px-24  py-3 
    whitespace-nowrap 
    ${
      addedProducts[prod.id] ? "bg-green-500 text-white" : "bg-black text-white"
    } 
    hover:bg-[#00813D] 
    font-oswald font-semibold text-center rounded-full`}
                >
                  {/* Background animation */}
                  <span className="absolute inset-0 bg-black hover:bg-[#00813D] scale-x-0 hover:scale-x-100  transition-transform duration-500 rounded-full z-0"></span>

                  {/* Button Text */}
                  <span className="relative z-10  font-oswald font-semibold">
                    {addedProducts[prod.id] ? "Item Added ✓" : "Add To Cart"}
                  </span>
                </button>
              </div>
              <div className="price-name grid grid-flow-row gap-2 my-8  transition-all duration-300  ">
                <div className="grid grid-flow-col justify-center items-center gap-3  ">
                  <span className="p-1 rounded-sm bg-[#ffb936] group-hover:bg-white font-medium font-oswald shadow-sm">
                    -10%
                  </span>
                  <p className="text-[16px] font-semibold font-oswald ">
                    {formatPriceUSD(prod.price)}
                  </p>
                </div>
                <h4 className="font-oswald text-[20px] font-semibold hover:text-white  ">
                  {prod.name}
                </h4>
              </div>
            </NavLink>
          ))}
        </div>
      )}
      <div className="button-view-more flex justify-center items-center  mt-5">
        <Link
          to="/shop"
          className="  relative  h-16 w-48 bg-[#00813D] py-5 px-14  overflow-hidden rounded-md  md:flex text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#D12525] before:duration-500 before:ease-out hover:text-white  hover:before:h-40 hover:before:w-48 hover:before:opacity-80"
        >
          <span class="relative font-heading font-bold flex justify-center items-center  text-lg z-10">
            View More
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PopularFoods;
