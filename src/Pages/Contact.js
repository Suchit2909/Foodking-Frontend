import React from "react";
import { ReactComponent as LocationIcon } from "../Assets/location.svg";
import { useState } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { VscMail } from "react-icons/vsc";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import dileveryMan from "../Assets/delivery-man-2.png";
import Footer from "../Component/Footer";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };  

  return (
    <div className="relative mt-[100px] bg-[#F4F1EA] ">
      <div className="page-heading text-center bg-bread-crumbs bg-no-repeat bg-cover bg-center border py-[120px]">
          <h1 className="font-bold text-[60px] font-oswald text-white uppercase">
            Contact
          </h1>
          <p className="text-[#00813d] grid grid-flow-col gap-1 justify-center items-center font-oswald text-lg font-semibold">
            <NavLink className="text-[#d12525] hover:text-[#00813d] " to="/">
              Home{" "}
            </NavLink>
            /
            <NavLink className="text-[#d12525] hover:text-[#00813d]" to="/about">
              Contact
            </NavLink>{" "}
            
          </p>
        </div>
      <div className="contact-div grid  grid-flow-row  md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 px-4 lg:px-[40px] xl:px-[100px] pt-20 ">
        <div className="box-1  py-[60px] px-[30px] bg-white shadow-sm flex justify-center flex-col group hover:bg-[#00813d] hover:bg-category-background items-center  text-center rounded-lg">
          <SlLocationPin className="text-6xl text-[#00813d] group-hover:text-white" />
          <h1 className="text-[28px] font-extrabold font-oswald group-hover:text-white ">
            Address Line
          </h1>
          <p className="text-[17px] text-[#5C5C5B] font-medium font-oswald group-hover:text-white ">
            Bowery St, New York, 37 USA <br />
            NY 10013,USA
          </p>
        </div>

        <div className="box-1  py-[60px] px-[30px] bg-white shadow-sm flex justify-center flex-col group hover:bg-[#00813d] hover:bg-category-background items-center  text-center  rounded-lg">
          <LuPhoneCall className="text-6xl text-[#00813d] group-hover:text-white" />
          <h1 className="text-[28px] font-extrabold font-oswald group-hover:text-white ">
            Address Line
          </h1>
          <p className="text-[17px] text-[#5C5C5B] font-medium font-oswald group-hover:text-white ">
            Bowery St, New York, 37 USA <br />
            NY 10013,USA
          </p>
        </div>

        <div className="box-1  py-[60px] px-[30px] bg-white shadow-sm flex justify-center flex-col group hover:bg-[#00813d] hover:bg-category-background items-center  text-center rounded-lg">
          <VscMail className="text-7xl text-[#00813d] group-hover:text-white" />
          <h1 className="text-[28px] font-extrabold font-oswald group-hover:text-white ">
            Address Line
          </h1>
          <p className="text-[17px] text-[#5C5C5B] font-medium font-oswald group-hover:text-white ">
            Bowery St, New York, 37 USA <br />
            NY 10013,USA
          </p>
        </div>
      </div>

      <div className="grid grid-flow-row lg:grid-cols-2 gap-16 px-4 py-10 lg:px-[40px] xl:px-[100px]  ">
        <div className="contact-form-heading ">
          <h1 className="mb-4 text-[#212121] font-oswald text-[36px] font-bold">
            Get In Touch
          </h1>
          <p className="mb-3 text-[#5C5C5B] text-[17px] font-oswald ">
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis <br />{" "}
            faucibus odio feugiat arc dolor.
          </p>

          <div className="w-full h-[400px] sm:h-[500px] md:h-[400px] overflow-hidden mt-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.797751832089!2d144.95942828399987!3d-37.81820599971258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b384a66f05%3A0xa794a69d25e1af07!2sEnvato!5e0!3m2!1sen!2sin!4v1746216330188!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>


        <div className="contact-form-start">
          <h2 className="text-[#212121] font-oswald text-[36px] font-bold mb-5">
            Fill Up The Form
          </h2>
          <p className="text-[#5C5C5B] text-[17px] font-oswald mb-16  ">
            Your email address will not be published. Required fields are marked
            *
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Your Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-transparent border-b border-gray-400 focus:outline-none focus:border-black placeholder-gray-500  "
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="l px-4 py-2 mt-1 block w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black placeholder-gray-500"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Your Message here*
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className=" px-4 py-2 mt-1 block w-full bg-transparent border-b border-gray-400 focus:outline-none focus:border-black placeholder-gray-500 transition-all duration-300 resize-none"
                rows="4"
              ></textarea>
            </div>

            <button
              type="submit"
              className="relative cursor-pointer font-oswald font-semibold bg-[#00813D] text-white px-[24px] md:px-[24px] xl:px-[24px] rounded-lg py-[8px] md:py-[16px] xl:py-[16px] overflow-hidden transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#D12525] before:duration-500 before:ease-out hover:text-white hover:before:h-40 hover:before:w-48 hover:before:opacity-80"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                {" "}
                <FaRegPaperPlane className="text-xl" /> Get in Touch
              </span>
            </button>
          </form>
        </div>
      </div>

      <div className="addbanner-ordernow-box relative bg-order-banner bg-center bg-cover bg-no-repeat py-[90px] lg:px-[40px] xl:px-[110px] px-4 grid grid-flow-row justify-center items-center md:justify-between   md:grid-flow-col   gap-4 mt-10 mb-14 ">
        <div className="text-div text-center md:text-left md:leading-none">
          <h1 className="text-[#FFB936] text-[17px] font-oswald mb-3  font-bold">
            Crispy, Every Bite Taste
          </h1>
          <h1 className=" text-[30px] xl:text-[60px] text-white font-oswald  font-extrabold">
            30 Minutes Fast
          </h1>
          <h1 className=" text-[30px] xl:text-[60px]   text-white   font-oswald  font-extrabold">
            <span className="text-[#FFB936] ">Delivery</span> Challenge
          </h1>
        </div>
        
        <button className=" relative w-44 ml-6 cursor-pointer font-oswald font-semibold bg-white   text-black px-[16px] md:px-[16px] xl:px-[16px] group rounded-lg py-[8px] md:py-[16px] xl:py-[16px] overflow-hidden transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#FFB936] before:duration-500 before:ease-out hover:text-white hover:before:h-40 hover:before:w-48 hover:before:opacity-80">
          <span className="relative z-10 inline-flex items-center justify-center gap-2">
            {" "}
            <FaShoppingCart className="text-xl text-[#00813D] group-hover:text-white" />{" "}
            Order Now
          </span>
        </button>
        <div className="img-boy absolute opacity-0 lg:opacity-100 left-[45%] xl:left-[50%] xl:bottom-4 ">
          <img src={dileveryMan} className="w-[19rem] xl:w-[24rem]" alt="" />
        </div>
      </div>

    
    </div>
  );
};

export default Contact;
