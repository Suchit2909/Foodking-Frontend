import React from "react";
import mainFood from "../Assets/main-food.png";
import pizzaText from "../Assets/pizza-text.png";
import pizza from "../Assets/pizza-2.png";
import whiteText from "../Assets/pizza-text-2.png";
import Percentoff from "../Assets/50percent-off.png";
import { motion } from "framer-motion";
import burgerText from "../Assets/burger-text.png";

const BurgerBanner = () => {
  return <div className="xl:grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-6 px-3 md:px-8 lg:px-11  xl:px-24 items-center">
  {/* First box – smaller */}
  <div className=" offer-background bg-offer-bg bg-center bg-no-repeat bg-cover group grid grid-rows-2 md:grid-cols-2 overflow-hidden  md:py-[100px]  md:px-[50px] h-[350px] rounded-2xl">
  
    <div className="textContent-left relative -top-10 leading-tight z-10 py-[90px] px-[30px] lg:py-0 lg:px-0  ">
   
      <h3 className="text-[#d12525] font-bold font-oswald">CRISPY, EVERY BITE TASTE</h3>
      <h1 className="text-[40px] lg:text-[55px] text-white font-bold font-oswald">SUPER DELICIOUS</h1>
      <motion.img
        initial={{ scale: 0.4 }}
        animate={{ scale: [0.4, 1, 0.4] }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        src={Percentoff}
        className="opacity-0 md:opacity-100 w-[9rem] h-[8rem] relative right-10 -top-6"
        alt=""
      />
    </div>
    
    <div className="imageContent-right w-[20rem] h-[20rem] relative -top-9 right-10  transition-all ease-in-out duration-200">
    <div className=" ">
   <motion.img
       animate={{ rotate: [-5, 5, -5] }}
       transition={{
         duration: 2,
         ease: "easeInOut",
         repeat: Infinity,
         repeatType: "loop",
       }}
      src={burgerText} className="absolute -top-16 left-30" alt="" />
   </div >
      <img src={mainFood} className="w-[15rem] absolute left-24 xl:left-0 object-cover md:relative md:w-full group-hover:scale-110" alt="" />
    </div>
  </div>

  {/* Second box – bigger */}
  <div className="pizza_offer overflow-hidden group bg-pizza-offer bg-center bg-no-repeat bg-cover md:grid grid-cols-2 rounded-2xl h-[350px]">
    <motion.div
      initial={{ scale: 0.4 }}
      animate={{ scale: [0.4, 0.8, 0.4] }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
      }}
      className="textContent-left hidden  md:grid justify-start items-center"
    >
      <img src={pizzaText} alt="" />
    </motion.div>
    <div className=" relative imageContent-right">
      <motion.img
        animate={{ rotate: [-5, 5, -5] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
        src={whiteText}
        className=" absolute top-2 md:left-24 "
        alt=""
      />
      <div className="">
        <img
        src={pizza}
        className="absolute w-[18rem] xl:w-[24rem] top-20 xl:left-5   md:top-20 lg:left-20 md:w-[20rem]   group-hover:scale-110"
        alt=""
      />
      </div>
      
    </div>
    
  </div>
</div>
};

export default BurgerBanner;
