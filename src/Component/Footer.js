import React from "react";
import Logo from "../Assets/foodking-logo.svg";
import { NavLink } from "react-router-dom";
import card from "../Assets/card-1.png";

const Footer = () => {
  return <>

<footer className="bg-[#F4F1EA]  relative bottom-0 inset-x-0 overflow-hidden  shadow-md border-t-[1px] ">
  <div className="max-w-screen-2xl px-4 lg:px-10  py-16 2xl:px-32    ">
    <div className=" grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div className="">
      <img src={Logo} className=" mr-5 h-12 sm:h-9" alt="logo" />
        <p className="max-w-64 mt-4 text-lg text-[#656564] mb-7 font-oswald">
        We believe it has the power to do
        amazing things.
        </p>

      
         <p className="text-[17px] max-w-64 font-oswald font-medium text-[#5c5c5b] mb-3">Interested in working with us?</p>
       <span className="text-[20px] font-oswald font-bold text-[#00813D]">info@example.com</span>

        <div className="flex mt-8 space-x-2 text-[#212121]">
          <a className=" p-2 rounded-full duration-500 transition-all group hover:bg-[#00813D]" href target="_blank" rel="noreferrer">
            <span className="sr-only"> Facebook </span>
            <svg className="w-6 h-6 group-hover:text-white  " fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a className="p-2 rounded-full duration-500 transition-all group hover:bg-[#00813D]" href target="_blank" rel="noreferrer">
            <span className="sr-only"> Instagram </span>
            <svg className="w-6 h-6 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a className="p-2 rounded-full duration-500 transition-all group hover:bg-[#00813D]" href target="_blank" rel="noreferrer">
            <span className="sr-only"> Twitter </span>
            <svg className="w-6 h-6 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a className="p-2 rounded-full duration-500 transition-all group hover:bg-[#00813D]" href target="_blank" rel="noreferrer">
            <span className="sr-only"> GitHub </span>
            <svg className="w-6 h-6 group-hover:text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          
        </div>
      </div>
      <div className="  grid grid-cols-2 gap-8 lg:col-span-2  sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-semibold text-[20px] font-oswald">
          Quick Links
          </p>
          <nav className="flex flex-col font-oswald mt-4 space-y-4 text-[17px] text-[#212121] cursor-pointer">
            <a className="transition duration-600 delay-200 ease-out hover:ml-5 cursor-pointer hover:text-[#00813D]" href> Services </a>
            <NavLink className="transition duration-600 delay-200 ease-out hover:ml-5 cursor-pointer hover:text-[#00813D]" to="/about"> About Company </NavLink>
            <NavLink className="transition duration-600 delay-200 ease-out hover:ml-5 cursor-pointer hover:text-[#00813D]" to="/blog" > Latest News </NavLink>
            <NavLink className="transition duration-600 delay-200 ease-out hover:ml-5 cursor-pointer hover:text-[#00813D]" to="/testi">Testimonials</NavLink>
          </nav>
        </div>
        <div>
          <p className="font-semibold text-[20px] font-oswald">
          My Account
          </p>
          <nav className="flex flex-col font-oswald mt-4 space-y-4 text-[17px] text-[#212121]">
            <a className="transition duration-600 delay-200 ease-out hover:ml-5 hover:text-[#00813D]" href> My Profile </a>
            <a className="transition duration-600 delay-200 ease-out hover:ml-5 hover:text-[#00813D]" href> My Order History </a>
            <a className="transition duration-600 delay-200 ease-out hover:ml-5 hover:text-[#00813D]" href> My Wishlist </a>
            <a className="transition duration-600 delay-200 ease-out hover:ml-5 hover:text-[#00813D]" href> Order Tracking</a>
            <a className="transition duration-600 delay-200 ease-out hover:ml-5 hover:text-[#00813D]" href> Shoping Cart </a>
          </nav>
        </div>
        <div>
          <p className="font-semibold text-[20px] font-oswald mb-5 text-[#212121] ">
          Address:
          </p>

          <p className="font-oswald text-[20px] mr-1 w-[110%]">
          570 8th Ave, New York,NY <span className="text-[#D22B2A] font-oswald">10018</span> United States
          </p>
          <nav className="flex flex-col  mt-3 space-y-2   font-medium text-[19px]  font-oswald text-[#212121]">
            Hours:
            <a className="text-[#5c5c5b] font-normal text-[18px] mt-2 " href> 9.30am - 6.30pm </a>
            <a className="text-[#5c5c5b] font-normal text-[18px] " href> Monday to Friday </a>
            
          </nav>
        </div>
       
      </div>
    </div>
   
  </div>
  <div className="w-[100%] px-3 md:px-6 lg:px-11 xl:px-24 flex justify-between items-center bg-[#00831D] py-8 text-gray-800 ">
  <p className=" font-semibold text-white  text-lg font-oswald ">
      ©CopyRight <span className="text-[#ffb936]">2025</span> FoodKing. All Rights Reserved.
      
    </p>

    <div className="">
        <img src={card} alt="" />
      </div>
  </div>
   
    
</footer>
  </>
};

export default Footer;
