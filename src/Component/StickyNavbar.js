import React from "react";
import { useEffect, useState } from "react";
import logo from "../Assets/foodking-logo.svg";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Slice/authSlice";
import {  fetchCartItemsByUser, clearCart} from "../Slice/cartSlice";
import { useNavigate } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import { GoHeart } from "react-icons/go";

const StickyNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const { token,username } = useSelector(
    (state) => state.authentication);

const role = useSelector((state) => state.authentication.role);
console.log(role);


const auth = useSelector((state) => state.authentication);
console.log(auth);


   const favorites = useSelector((state) => state.favorite.favorites);

  const cartItems = useSelector((state) => state.cart.items || []);

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cartId");
    dispatch(logout());
    dispatch(clearCart());
    navigate("/");
  };

  useEffect(() => {
  if (token && role === "USER") {
    dispatch(fetchCartItemsByUser());
  }
}, [token, role, dispatch]);

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  const firstLetter =
    typeof username === "string" && username.length > 0
      ? username.charAt(0).toUpperCase()
      : "";

  return (
    <div>
      <nav
        className={`bg-[#F4F1EA] dark:bg-gray-900 fixed w-full shadow-sm z-20 top-0 left-0 `}
      >
        <div className="max-w-screen-2xl py-[10px] flex flex-wrap px-2 items-center  justify-between mx-auto lg:px-[32px] lg:py-5">
          <NavLink to="/" className="flex items-center space-x-3 ">
            <img src={logo} className="h-12" alt="foodking Logo" />
          </NavLink>
          <div className="flex md:order-2 justify-center items-center space-x-2 md:space-x-4 ">
            {/* Favorite Icon */}
        <Link to="/wishlist" className=" hidden lg:flex relative group">
          <GoHeart className="text-2xl hover:text-red-500" />
          {favorites.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </Link>
            {(!token || role === "USER") && (
              <button
                onClick={() => navigate("/cartpage")}
                className="hidden lg:flex cart-icon-reacticon m-2 items-center justify-center relative"
              >
                <BsCart4 className="text-2xl" />
                {itemCount > 0 && (
                  <span className="absolute top-[-5px] right-[-5px] bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                    {itemCount}
                  </span>
                )}
              </button>
            )}


            {!token && (
              <NavLink
                to="/login"
                className="hidden  relative  h-14  bg-[#D12525] py-5 px-12 overflow-hidden rounded-md  lg:flex text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#00813D] before:duration-500 before:ease-out hover:text-white  hover:before:h-40 hover:before:w-48 hover:before:opacity-80"
              >
                <span className="relative font-heading font-bold flex items-center justify-center  text-lg z-10">
                  Register
                </span>
              </NavLink>
            )}

            <div className="flex justify-center items-center gap-4">
              {token && (role === "ADMIN" || role === "USER") && (
                <>
                  <div className="relative">
  <div
    onClick={() => setIsMenuOpen(prev => !prev)}
    className="w-10 h-10 font-oswald rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-lg cursor-pointer"
  >
    {firstLetter}
  </div>

  {isMenuOpen && (
    <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg border rounded-lg p-4 z-50">
      <h3 className="font-bold text-gray-800 text-lg mb-2">{username}</h3>
      {/* Add other details if available */}
      <p className="text-sm text-gray-600 mb-3">Role: {role}</p>
      {/* Orders button */}
      <NavLink
        to="/orders"
        onClick={() => setIsMenuOpen(false)}
        className="block text-left text-blue-600 hover:underline mb-2"
      >
        My Orders
      </NavLink>
      {/* Logout */}
      <button
        onClick={handleLogout}
        className="w-full mt-2 bg-red-500 text-white py-1 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  )}
</div>

                </>
              )}
            </div>

            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex  items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          <div
            id="navbar-sticky"
            className={`${
              isMenuOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto`}
          >
            <ul className="flex flex-col p-4  mt-4 font-medium border border-gray-100 rounded-lg bg-[#F4F1EA] lg:space-x-9 md:space-y-9 lg:space-y-0 rtl:space-x-reverse md:flex-col lg:flex-row md:mt-0 md:border-0 ">
              <li>
                <NavLink
                  to="/"
                  onClick={handleNavLinkClick}
                  className=" font-medium text-xl font-heading block py-2 px-5 md:hover:bg-transparent hover:text-[#00831D]  md:p-0 "
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  onClick={handleNavLinkClick}
                  className=" font-medium text-xl font-heading block py-2 px-5 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-[#00831D] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  AboutUs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/shop"
                  onClick={handleNavLinkClick}
                  className=" font-medium text-xl font-heading block py-2 px-5 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-[#00831D] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className=" font-medium text-xl font-heading block py-2 px-5 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-[#00831D] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={handleNavLinkClick}
                  className=" font-medium text-xl font-heading block py-2 px-5 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent hover:text-[#00831D] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default StickyNavbar;
