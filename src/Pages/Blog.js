import React, { useState,useEffect } from "react";
import firstimg from "../Assets/06-3.jpg";
import secondimg from "../Assets/05-3.jpg";
import thirdimg from "./04-4.jpg";
import fourthimg from "./post-2.jpg";
import fiveimg from "../Assets/post-inner.jpg";
import SearchButton from "../Component/SearchButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../Slice/categorySlice";
import { useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { NavLink } from "react-router-dom";



const Blog = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const {
      data: products,
      loading,
      error,
    } = useSelector((state) => state.products);

  const [filteredProducts, setFilteredProducts] = useState([]);

  const { data: categories } = useSelector((state) => state.categories);
  console.log("categories", categories);

   const handleCategoryClick = (categoryName) => {
  navigate(`/shop?<category className="product"></category>=${encodeURIComponent(categoryName)}`);
};

   useEffect(() => {
      dispatch(fetchCategories());
    }, [dispatch]);
  return (
    <div className="mt-[104px] bg-[#F4F1EA]">
      <div className="page-heading text-center bg-bread-crumbs bg-no-repeat bg-cover bg-center border py-[120px]">
          <h1 className="font-bold text-[60px] font-oswald text-white">
            Blog Page
          </h1>
          <p className="text-[#00813d] grid grid-flow-col gap-1 justify-center items-center font-oswald text-lg font-semibold">
            <NavLink className="text-[#d12525] hover:text-[#00813d] " to="/">
              Home{" "}
            </NavLink>
            /
            <NavLink className="text-[#d12525] hover:text-[#00813d]" to="/blog">
              BlogPage
            </NavLink>{" "}
            
          </p>
        </div>

      <div className="main-blog-box  lg:flex flex-row w-full gap-6 px-3 sm:px-5 md:px-6 lg:px-11 xl:px-24 py-24">
        <div className="left-side-blog-box w-full ">
          <div className="first-img-blog">
            <img
              src={firstimg}
              className=" w-full h-full object-cover rounded-xl mb-5"
              alt=""
            />
            <div className="comments flex flex-row gap-6 font-oswald mb-5 ">
              <p>Smit Samus</p>
              <p>0 Comments</p>
              <p>29 Feb 2024</p>
            </div>
            <h1 className="text-[44px] font-bold font-oswald leading-normal  mb-5">
              Epicurean Insights Blogging Odyss Through Restaurant Name Culinary
              Universe
            </h1>
            <p className="text-base font-oswald mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but majority have suffered Lorem haca ullamcorper donec ante habi
              believable.
            </p>
            <p className="text-lg font-oswald font-medium mb-10">Read More</p>
          </div>

          <div className="second-img-blog">
            <img
              src={secondimg}
              className=" w-full h-full object-cover rounded-xl mb-5"
              alt=""
            />
            <div className="comments flex flex-row gap-6 font-oswald mb-5">
              <p>Smit Samus</p>
              <p>0 Comments</p>
              <p>29 Feb 2024</p>
            </div>
            <h1 className="text-[44px] font-bold font-oswald leading-snug  mb-5">
              Epicurean Insights Blogging Odyss Through Restaurant Name Culinary
              Universe
            </h1>
            <p className="text-base font-oswald mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but majority have suffered Lorem haca ullamcorper donec ante habi
              believable.
            </p>
            <p className="text-lg font-oswald font-medium mb-10">Read More</p>
          </div>

          <div className="third-img-blog">
            <img src={thirdimg} className=" w-full rounded-xl mb-5" alt="" />
            <div className="comments flex flex-row gap-6 font-oswald mb-5">
              <p>Smit Samus</p>
              <p>0 Comments</p>
              <p>29 Feb 2024</p>
            </div>
            <h1 className="text-[44px] font-bold font-oswald leading-snug  mb-5">
              Epicurean Insights Blogging Odyss Through Restaurant Name Culinary
              Universe
            </h1>
            <p className="text-base font-oswald mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but majority have suffered Lorem haca ullamcorper donec ante habi
              believable.
            </p>
            <p className="text-lg font-oswald font-medium mb-10">Read More</p>
          </div>

          <div className="fourth-img-blog">
            <img src={fourthimg} className=" w-full rounded-xl mb-5" alt="" />
            <div className="comments flex flex-row gap-6 font-oswald mb-5">
              <p>Smit Samus</p>
              <p>0 Comments</p>
              <p>29 Feb 2024</p>
            </div>
            <h1 className="text-[44px] font-bold font-oswald leading-snug  mb-5">
              Epicurean Insights Blogging Odyss Through Restaurant Name Culinary
              Universe
            </h1>
            <p className="text-base font-oswald mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but majority have suffered Lorem haca ullamcorper donec ante habi
              believable.
            </p>
            <p className="text-lg font-oswald font-medium mb-10">Read More</p>
          </div>

          <div className="fifth-img-blog">
            <img src={fiveimg} className=" w-full rounded-xl mb-5" alt="" />
            <div className="comments flex flex-row gap-6 font-oswald mb-5">
              <p>Smit Samus</p>
              <p>0 Comments</p>
              <p>29 Feb 2024</p>
            </div>
            <h1 className="text-[44px] font-bold font-oswald leading-snug  mb-5">
              Epicurean Insights Blogging Odyss Through Restaurant Name Culinary
              Universe
            </h1>
            <p className="text-base font-oswald mb-5">
              There are many variations of passages of Lorem Ipsum available,
              but majority have suffered Lorem haca ullamcorper donec ante habi
              believable.
            </p>
            <p className="text-lg font-oswald font-medium mb-10">Read More</p>
          </div>
        </div>
        <div className="right-side-blog-box lg:w-[50%] ">
          <div className="search-box  space-y-4 p-8 mb-10 shadow-sm">
            <h1>Search</h1>
             {/* <SearchButton /> */}
            <form class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search "
                  required
                />
                <button
                  type="submit"
                  class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>

          <div className="popular-Feeds-box border space-y-4 p-[35px] mb-[40px] shadow-sm">
            <h1 className="text-xl font-bold font-oswald border-l-[3px] border-lime-600 pl-1 capitalize mb-10">Popular Feeds</h1>

            <div className="food-box flex gap-2">
                <img src={thirdimg} className="w-[5rem] rounded-xl" alt="" />
                <div className="">
                    <h1 className="font-oswald font-bold">Bold Bite: Exotic Flavors, Global Adventure</h1>
                <p className="font-oswald font-medium text-[#00831D]">15th February 2024</p>
                </div>
            </div>

             <div className="food-box flex gap-2">
                <img src={fourthimg} className="w-[5rem] rounded-xl" alt="" />
                <div className="">
                    <h1 className="font-oswald font-bold">Bold Bite: Exotic Flavors, Global Adventure</h1>
                <p className="font-oswald font-medium text-[#00831D]">15th February 2024</p>
                </div>
            </div>

             <div className="food-box flex gap-2">
                <img src={fiveimg} className="w-[5rem] rounded-xl" alt="" />
                <div className="">
                    <h1 className="font-oswald font-bold">Bold Bite: Exotic Flavors, Global Adventure</h1>
                <p className="font-oswald font-medium text-[#00831D]">15th February 2024</p>
                </div>
            </div>
          </div>

          <div className="categories border p-[35px] mb-10 shadow-sm">
             <h2 className="text-xl font-bold font-oswald border-l-[3px] border-lime-600 pl-1 capitalize mb-10">Categories</h2>

             <div className="space-y-6">
              <div className="main-box flex justify-between border">
              <div className=" w-full bg-white px-[17px] py-[20px] font-bold font-oswald text-[18px] text-[#212121]">Bread </div>
             <div className="bg-[#00831D] px-[17px] py-[20px] text-white font-oswald font-semibold">(1)</div>
             </div>

             <div className="main-box flex justify-between border">
              <div className=" w-full bg-white px-[17px] py-[20px] font-bold font-oswald text-[18px] text-[#212121]">Bread </div>
             <div className="bg-[#00831D] px-[17px] py-[20px] text-white font-oswald font-semibold">(1)</div>
             </div>

             <div className="main-box flex justify-between border">
              <div className=" w-full bg-white px-[17px] py-[20px] font-bold font-oswald text-[18px] text-[#212121]">Bread </div>
             <div className="bg-[#00831D] px-[17px] py-[20px] text-white font-oswald font-semibold">(1)</div>
             </div>

             <div className="main-box flex justify-between border">
              <div className=" w-full bg-white px-[17px] py-[20px] font-bold font-oswald text-[18px] text-[#212121]">Bread </div>
             <div className="bg-[#00831D] px-[17px] py-[20px] text-white font-oswald font-semibold">(1)</div>
             </div>

             <div className="main-box flex justify-between border">
              <div className=" w-full bg-white px-[17px] py-[20px] font-bold font-oswald text-[18px] text-[#212121]">Bread </div>
             <div className="bg-[#00831D] px-[17px] py-[20px] text-white font-oswald font-semibold">(1)</div>
             </div>
             
             <div className="main-box flex justify-between border">
              <div className=" w-full bg-white px-[17px] py-[20px] font-bold font-oswald text-[18px] text-[#212121]">Bread </div>
             <div className="bg-[#00831D] px-[17px] py-[20px] text-white font-oswald font-semibold">(1)</div>
             </div> 
             </div>

          </div>
          <div className="Product-catogaries p-[30px] shadow-sm">
               <h2 className="text-xl font-bold font-oswald border-l-[3px] border-lime-600 pl-1 capitalize mb-10">Product Categories</h2>


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
          </ul>
             </div>

             <div className="news p-[30px]  mt-10 shadow-sm">
              <h2 className="text-xl font-bold font-oswald border-l-[3px] border-lime-600 pl-1 capitalize mb-10">Never Miss news</h2>

              <div className="flex flex-wrap lg:flex-row gap-7 ">
                <a className=" rounded-full bg-white p-3 group hover:bg-[#00831D] " href=""><FaFacebookF className="text-black group-hover:text-white  text-2xl" /></a>  
                             <a className="rounded-full bg-white p-3 group hover:bg-[#00831D]" href=""><FaYoutube className="text-black group-hover:text-white   text-2xl" /> </a> 
                             <a className="rounded-full bg-white p-3 group hover:bg-[#00831D]" href=""><FaLinkedinIn className="text-black group-hover:text-white   text-2xl" /></a>   
                             <a className="rounded-full bg-white p-3 group hover:bg-[#00831D]" href=""><FaTwitter className="text-black group-hover:text-white   text-2xl" /></a> 
                              <a className="rounded-full bg-white p-3 group hover:bg-[#00831D]" href=""><FaInstagram className="text-black group-hover:text-white   text-2xl" /></a>  
              </div>

             </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
