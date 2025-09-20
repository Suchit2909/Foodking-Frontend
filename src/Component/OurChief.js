import React from "react";
import chef1 from "../Assets/chef-1.jpg";
import chef2 from "../Assets/chef-2.jpg";
import chef3 from "../Assets/chef-3.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const OurChief = () => {
  return <div>
    <div className="mani relative px-8 lg:px-16 xl:px-24 py-20">
      <div className="text-content text-center mb-5 ">
        <h4 className="text-[17px] font-oswald text-[#00813D] font-semibold capitalize">about our food</h4>
        <h1 className="text-[48px] font-oswald text-[#212121] font-extrabold">Meet Our Expert Chefs</h1>
      </div>

      <div className="chef-flex-box grid md:grid-cols-2 xl:grid-cols-3 gap-10 ">
        <div className="box1 relative mt-7 group">
          <div className=" absolute -top-5 left-10 w-[95%] xl:w-[80%]   lg:w-[70%] h-[85%] z-0  border-2 border-dotted rounded-xl border-[#00813D] transition-transform duration-300 group-hover:-rotate-[3deg]  transform"></div>
          <img src={chef1} className="rounded-xl relative" alt="chef" />
          <div className=" opacity-0 absolute  border-t-[27px]  group-hover:opacity-100 border-[#00813D] border-r-[31px]  transition-transform duration-300 -skew-y-6 top-[27.2%] -left-[30px] ease-in-out "></div>
          <div className="opacity-0 social-links absolute top-[15%] group-hover:opacity-100 bg-[#00813D] grid grid-flow-row gap-4 items-center justify-center p-5 transition-transform duration-300 transform -translate-x-2/4 translate-y-2/4 ease-in-out ">
              <a className="text-white text-xl" href=""><FaFacebookF /></a>  
              <a className="text-white text-xl" href=""><FaYoutube /> </a> 
              <a className="text-white text-xl" href=""><FaLinkedinIn /></a>   
              <a className="text-white text-xl" href=""><FaTwitter /></a>   
          </div>
          <div className="opacity-0 arrow border-t-[20px] border-r-[16px] group-hover:opacity-100  border-[#00813D] absolute left-5 bottom-[50%] transition-transform duration-300 transform rotate-[139deg] ease-in-out "></div>
          <div className=" text-center mt-8">
            <h5 className="text-[17px] text-[#00813D] font-semibold font-oswald capitalize">sr table manager</h5>
            <h1 className="text-[28px] font-oswald text-[#212121] font-extrabold">HENRY LUCAS</h1>
          </div>
        </div>

         <div className="box1 relative mt-7 group">
          <div className=" absolute -top-5 left-10 w-[95%] xl:w-[80%]   lg:w-[70%] h-[85%] z-0  border-2 border-dotted rounded-xl border-[#00813D] transition-transform duration-300 group-hover:-rotate-[3deg]  transform"></div>
          <img src={chef2} className="rounded-xl relative" alt="chef" />
          <div className=" opacity-0 absolute  border-t-[27px]  group-hover:opacity-100 border-[#00813D] border-r-[31px]  transition-transform duration-300 -skew-y-6 top-[27.2%] -left-[30px] ease-in-out "></div>
          <div className="opacity-0 social-links absolute top-[15%] group-hover:opacity-100 bg-[#00813D] grid grid-flow-row gap-4 items-center justify-center p-5 transition-transform duration-300 transform -translate-x-2/4 translate-y-2/4 ease-in-out ">
              <a className="text-white text-xl" href=""><FaFacebookF /></a>  
              <a className="text-white text-xl" href=""><FaYoutube /> </a> 
              <a className="text-white text-xl" href=""><FaLinkedinIn /></a>   
              <a className="text-white text-xl" href=""><FaTwitter /></a>   
          </div>
          <div className="opacity-0 arrow border-t-[20px] border-r-[16px] group-hover:opacity-100  border-[#00813D] absolute left-5 bottom-[50%] transition-transform duration-300 transform rotate-[139deg] ease-in-out "></div>
          <div className=" text-center mt-8">
            <h5 className="text-[17px] text-[#00813D] font-semibold font-oswald capitalize">senior cooker</h5>
            <h1 className="text-[28px] font-oswald text-[#212121] font-extrabold">MATEO LEVI</h1>
          </div>
        </div>

         <div className="box1 relative mt-7 group">
          <div className=" absolute -top-5 left-10 w-[95%] xl:w-[80%]   lg:w-[70%] h-[79%] z-0  border-2 border-dotted rounded-xl border-[#00813D] transition-transform duration-300 group-hover:-rotate-[3deg]  transform"></div>
          <img src={chef3} className=" rounded-xl relative" alt="chef" />
          <div className=" opacity-0 absolute  border-t-[27px]  group-hover:opacity-100 border-[#00813D] border-r-[31px]  transition-transform duration-300 -skew-y-6 top-[27.2%] -left-[30px] ease-in-out "></div>
          <div className="opacity-0 social-links absolute top-[15%] group-hover:opacity-100 bg-[#00813D] grid grid-flow-row gap-4 items-center justify-center p-5 transition-transform duration-300 transform -translate-x-2/4 translate-y-2/4 ease-in-out ">
              <a className="text-white text-xl" href=""><FaFacebookF /></a>  
              <a className="text-white text-xl" href=""><FaYoutube /> </a> 
              <a className="text-white text-xl" href=""><FaLinkedinIn /></a>   
              <a className="text-white text-xl" href=""><FaTwitter /></a>   
          </div>
          <div className="opacity-0 arrow border-t-[20px] border-r-[16px] group-hover:opacity-100  border-[#00813D] absolute left-5 bottom-[50%] transition-transform duration-300 transform rotate-[139deg] ease-in-out "></div>
          <div className=" text-center mt-8">
            <h5 className="text-[17px] text-[#00813D] font-semibold font-oswald capitalize">senior cooker</h5>
            <h1 className="text-[28px] font-oswald text-[#212121] font-extrabold">Daniel Jack</h1>
          </div>
        </div>

      </div>
        <div className="text-center mt-4 ">
          <button
        type="submit"
        className="relative  mt-12 w-fit mx-auto xl:ml-0 cursor-pointer font-oswald font-semibold bg-[#00813D] text-white px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#D12525] before:duration-500 before:ease-out hover:text-white hover:before:h-40 hover:before:w-48 hover:before:opacity-80"
      >
        <span className="relative z-10 inline-flex items-center gap-2">
          Meet Our Team
        </span>
      </button>
        </div>
    </div>
  </div>;
};

export default OurChief;
