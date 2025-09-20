import React from "react";
import grilled from "../Assets/grilled.png";
import { TbTruckDelivery } from "react-icons/tb";
import spicy from "../Assets/spicy.png";
import { motion } from "framer-motion";
import pizzatext from "../Assets/pizza-text-2-1.png";
import tomato from "../Assets/tomato-shape-2.png";
import { NavLink } from "react-router-dom";

const SecondBanner = () => {
  return <div>
  <div className="main bg-Second-banner  bg-no-repeat bg-cover bg-center w-full lg:flex  py-[100px] px-6  justify-between items-center gap-2 ">
    <div className="left-side-box text-center lg:text-start text-white px-3 leading-tight">
        <p className="text-[22px] md:text-[28px] font-oswald font-semibold mb-1">Save 20%</p>
        <h1 className="text-[46px] md:text-[66px] font-oswald font-bold mb-1">Today's <span className="text-[#ffb936]">Astackin </span>Day</h1>
        <h3 className="text-[28px] md:text-[40px] font-oswald font-semibold mb-9">Grilled <span className="text-[#ffb936]">Chiken $59,00</span> </h3>
         <NavLink
  to="/shop"
  className="relative inline-flex items-center gap-2 cursor-pointer font-oswald font-semibold bg-[#00813D] text-white px-[28px] md:px-[24px] xl:px-[24px] rounded-lg py-[8px] md:py-[16px] xl:py-[16px] overflow-hidden transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#D12525] before:duration-500 before:ease-out hover:text-white hover:before:h-40 hover:before:w-48 hover:before:opacity-80"
>
  <span className="relative z-10 flex items-center gap-2">
    <TbTruckDelivery className="text-xl" /> Order Now
  </span>
</NavLink>
    </div>

    <div className="right-side-box relative flex items-center justify-center mt-10 ">
        <img src={grilled} className="lg:w-[30rem]"  alt="" />
        <motion.div
            className="absolute top-[50%] left-[70%] lg:top-1/2 lg:left-1/2"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 8,
            }}
            style={{
              transformOrigin: "center center",
            }}
          >
            <div className=" lg:transform lg:translate-x-[70px]">
              <img src={spicy} className="w-[10rem] lg:w-[8rem] " alt="spicy" />
            </div>
          </motion.div>
          <motion.img
          animate={{ rotate: [-5, 5, -5] }}
       transition={{
         duration: 2,
         ease: "easeInOut",
         repeat: Infinity,
         repeatType: "loop",
       }}
           src={pizzatext} className=" absolute top-[100%] left-3 hidden lg:block" alt="" />
    </div>
       
  </div>
  </div>;
};

export default SecondBanner;
