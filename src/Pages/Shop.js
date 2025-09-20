import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Slice/productSlice";
import { Link, NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { addCartItem } from "../Slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { formatPriceUSD } from "../Component/currencyFormatter";
import { fetchCategories } from "../Slice/categorySlice";
import { categoriesId } from "../Slice/categorySlice";
import Slider from "@mui/material/Slider";
import { CiHeart } from "react-icons/ci";
import { useSearchParams } from "react-router-dom";
import { addFavorite, removeFavorite } from "../Slice/favoriteSlice";
import { toast } from "react-toastify";
import { fetchCart} from "../Slice/cartSlice";

const Shop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    data: products,
    loading,
    error,
  } = useSelector((state) => state.products);

 

  const favorites = useSelector((state) => state.favorite.favorites);

 const DEFAULT_PRICE_RANGE = [100, 500];
const [priceRange, setPriceRange] = useState(DEFAULT_PRICE_RANGE);

  const { data: categories } = useSelector((state) => state.categories);

  const token = useSelector((state) => state.authentication.token);
  console.log(token);



  const [searchParams] = useSearchParams();
  
  const categoryFilter = searchParams.get("category");
  const { cartId, isLoggedIn } = useSelector((state) => state.authentication);

  const [currentPage, setCurrentPage] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [addedProducts, setAddedProducts] = useState({});

  const itemsPerPage = 8;

  const handleFavoriteToggle = (product) => {
    const isFavorited = favorites.some((fav) => fav.id === product.id);

    if (isFavorited) {
      dispatch(removeFavorite(product.id));
      toast.info("Removed from favorites");
    } else {
      dispatch(addFavorite(product));
      toast.success("Added to favorites");
    }
  };

  useEffect(() => {
  if (isLoggedIn && !cartId) {
    dispatch(fetchCart({}));
  }
}, [isLoggedIn, cartId, dispatch]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top on page change
  }, [currentPage]);

useEffect(() => {
  let filtered = products;

  if (categoryFilter) {
    // Apply only category filter
    filtered = products.filter((p) => {
       console.log("Full product:", p)
      return p.category?.name?.toLowerCase() === categoryFilter.toLowerCase();
    });
  } else {
    // No category → apply price filter
    filtered = products.filter((p) => {
      const price = parseFloat(p.price);
      return price >= priceRange[0] && price <= priceRange[1];
    });
  }

  setFilteredProducts(filtered);
  setCurrentPage(0);
}, [products, priceRange, categoryFilter]);




  const offset = currentPage * itemsPerPage;
  const currentItems = filteredProducts.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

 const handleAddToCart = (product) => {
   if (!cartId) {
    toast.error("Cart is still initializing. Please wait...");
    return;
  }

  const payload = isLoggedIn
    ? { cartId, productId: product.id, quantity: 1 }
    : { productId: product.id, quantity: 1 };

  dispatch(addCartItem(payload));
  setAddedProducts((prev) => ({ ...prev, [product.id]: true }));
  setTimeout(() => {
    setAddedProducts((prev) => ({ ...prev, [product.id]: false }));
  }, 2000);
};


  const handleCategoryClick = (categoryName) => {
  navigate(`/shop?category=${categoryName}`);
};

  // ✅ These returns MUST be inside the function!
  if (loading) return <p>Loading products...</p>;
  if (error)
    return (
      <p className="mt-[104px] flex items-center justify-center p-5 ">
        {error}
      </p>
    );

  return (
    <div className="mt-[60px] max-h-max xl:mt-[104px] pb-10 bg-[#F4F1EA]">
      <div className="page-heading text-center bg-bread-crumbs bg-no-repeat bg-cover bg-center py-[80px]   xl:py-[120px]">
        <h1 className="font-bold text-[30px] xl:text-[60px] font-oswald text-white">
          SHOP
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

      <div className=" w-full lg:flex  justify-between   mt-20 xl:gap-6   px-3 md:px-6 lg:px-11  xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8  ">
          {currentItems.length > 0 ? (
            currentItems.map((prod) => (
              <NavLink
                to={`/product/${prod.id}`}
                key={prod.id}
                className="product-card w-[20rem] h-[32rem] group shadow-xl rounded-t-xl rounded-b-xl bg-white group-hover:shadow-xl hover:rounded-b-xl text-center transition-all duration-200  hover:bg-[#ffb936] grid grid-flow-row"
              >
                <div className="flex relative flex-col justify-center items-center img-button rounded-t-lg hover:rounded-b-none  group-hover:bg-[#ffb936]">
                  <CiHeart
                    onClick={(e) => {
                      e.preventDefault(); // Prevents navigation when clicking heart
                      handleFavoriteToggle(prod);
                    }}
                    className={`absolute top-4 left-6 p-1 rounded-lg text-[2.5rem] cursor-pointer transition-all duration-200 
    ${
      favorites.some((fav) => fav.id === prod.id)
        ? "bg-[#d12525] text-white"
        : "bg-[#212121] text-white"
    }`}
                  />
                  <img src={prod.imageUrl} className="mb-8" alt={prod.name} />
                  <div className="Add-cart-to-button">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(prod);
                      }}
                      className={`relative overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300 px-[95px] py-[10px] 
    ${
      addedProducts[prod.id] ? "bg-green-500 text-white" : "bg-black text-white"
    } 
    hover:bg-[#00813D] 
    font-oswald font-semibold text-center rounded-full`}
                    >
                      {/* Background animation */}
                      <span className="absolute inset-0 bg-black hover:bg-[#00813D] scale-x-0 hover:scale-x-100 origin-center transition-transform duration-500 rounded-full z-0"></span>

                      {/* Button Text */}
                      <span className="relative z-10 font-oswald font-semibold">
                        {addedProducts[prod.id]
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
                      {formatPriceUSD(prod.price)}
                    </p>
                  </div>
                  <h4 className="font-oswald text-[20px] font-semibold">
                    {prod.name}
                  </h4>
                </div>
              </NavLink>
            ))
          ) : (
            <p>No products available.</p>
          )}
        </div>

        <div className="  lg:w-[250px]  p-6 rounded-lg  h-fit ">
          <h2 className="text-xl font-bold font-oswald border-l-[3px] border-lime-600 pl-1 uppercase mb-4">
            Categories
          </h2>

          <ul className="space-y-3">
            {categories.map((cat) => (
              <li
                key={cat.id}
                className="text-[17px] font-oswald text-[#212121]  font-semibold cursor-pointer"
                onClick={() => handleCategoryClick(cat.name)}
              >
                {cat.name}
              </li>
            ))}
            <li
              onClick={() => navigate("/shop")}
              className="text-[17px] font-oswald text-blue-600 underline cursor-pointer"
            >
              All Products
            </li>
          </ul>

          <div className="mt-8">
            <h2 className="text-xl font-bold font-oswald  border-l-[3px] border-lime-600 pl-1  uppercase mb-4">
              Filter by Price
            </h2>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-700 font-oswald mb-2">
                <span>Min: ₹{priceRange[0]}</span>
                <span>Max: ₹{priceRange[1]}</span>
              </div>

              <Slider
                value={priceRange}
                onChange={(e, newValue) => setPriceRange(newValue)}
                valueLabelDisplay="auto"
                min={100}
                max={500}
                step={10}
                sx={{ color: "#00813D" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <ReactPaginate
          previousLabel={<span className="text-lg lg:text-2xl">←</span>}
          nextLabel={<span className="text-2xl">→</span>}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"flex items-center gap-2"}
          pageLinkClassName="rounded-full w-12 h-12 font-oswald font-medium flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-[#00813D] hover:text-white transition"
          previousClassName="page-item"
          previousLinkClassName="rounded-full w-12 h-12 flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-green-500 hover:text-white cursor-pointer transition"
          nextClassName="page-item"
          nextLinkClassName="rounded-full w-12 h-12 flex items-center justify-center border border-gray-300 text-gray-700 hover:bg-green-500 hover:text-white cursor-pointer transition"
          pageClassName="px-3 py-1"
          activeClassName="text-white font-medium"
          breakLabel="..."
        />
      </div>
    </div>
  );
};

export default Shop;
