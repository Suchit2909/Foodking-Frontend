import React from "react";
import burger from '../Assets/burger-1.png';
import burgerText from "../Assets/burger-text.png";
import quality from "../Assets/quality.png";
import reputation from "../Assets/reputation.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FoodProcessing from "../Component/FoodProcessing";
import OurChief from "../Component/OurChief";
import { FaShoppingCart } from "react-icons/fa";
import dileveryMan from "../Assets/delivery-man-2.png";
import Marque from "../Component/Marque";
import kfc from "../Assets/kfc (1).png";
import offer from "../Assets/50percent-off-2-1.png";
import { TbTruckDelivery } from "react-icons/tb";
import Testimonial from "../Component/Testimonial";
import PhotoSlider from "../Component/PhotoSlider";
import Footer from "../Component/Footer";
import  burgerShape from "../Assets/burger-shape-3.png";
import { NavLink } from "react-router-dom";

import { ReactComponent as Fries } from "../Assets/fry-shape-2.svg";

const AboutUs = () => {
  return <div className="mt-[100px] bg-[#F4F1EA]">
       <div className="page-heading text-center bg-bread-crumbs bg-no-repeat bg-cover bg-center border py-[120px]">
          <h1 className="font-bold text-[60px] font-oswald text-white uppercase">
            About Us
          </h1>
          <p className="text-[#00813d] grid grid-flow-col gap-1 justify-center items-center font-oswald text-lg font-semibold">
            <NavLink className="text-[#d12525] hover:text-[#00813d] " to="/">
              Home{" "}
            </NavLink>
            /
            <NavLink className="text-[#d12525] hover:text-[#00813d]" to="/about">
              About
            </NavLink>{" "}
            
          </p>
        </div>
    <section className="px-4 sm:px-6 md:px-10 xl:px-24 py-20 mt-[100px] relative">
        <div className="main-div grid lg:grid-cols-2   ">
        <div className="burger-image-div relative">
            <motion.img
            animate={{ rotate: [-5, 5, -5] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            src={burgerText}  className="absolute w-[15rem] z-10 lg:w-[25rem] -top-[28%] lg:-top-[9%] right-[30%] lg:right-[48%]" alt="" />
            <img src={burger} className=" w-[12rem] md:w-[25rem] lg:w-[36rem]" alt="" />
            <p className=" absolute text-[50px]  lg:text-[80px] top-[50%] lg:top-[76%] left-[5%] lg:left-[10%] font-oswald font-extrabold text-[#212121]">$0</p>
            <p className=" absolute top-[30%] lg:top-[75%] left-[20%] lg:left-[50%] py-[25px] px-[30px] lg:py-[25px] lg:px-[30px] rounded-lg text-[18px] md:text-[24px] lg:text-[28px] origin-bottom -rotate-12 text-white font-bold font-oswald bg-[#ffb936] translate-x-7">Since /1985</p>
            </div>

            <div className="text-content-div lg:px-3 mt-10 ">
                <p className="text-[#00813d] text-[17px] lg:text-[19px] font-oswald font-bold mb-1">About Our Food</p>
                <h1 className="text-[30px] lg:text-[48px] xl:text-[58px] font-oswald font-bold mb-3 lg:mb-8 leadin  g-tight">Where Quality Meet  Excellent <span className="text-[#00813d]">Service.</span></h1>
                <p className=" font-oswald text-[17px] lg:text-[18px] text-[#5c5c5b] mb-6 text-ellipsis ">Its the perfect dining experience where every dish is crafted with fresh, high-quality Experience quick and efficient service that ensures your food is servead fresh Its the dining experience where every dish is crafted with fresh, high-quality ingredients</p>
           
            <div className="grid xl:grid-flow-col gap-6 mb-6 ">
                <div className="flex gap-4 ">
                <img src={quality} className="w-[3rem] h-[3rem] " alt="" />
                <div className="">
                    <h3 className="text-[20px] md:text-[22px] text-[#212121] font-semibold font-oswald">Super Quality Food</h3>
                    <p className="text-[#5c5c5b] text-[17px] lg:text-[18px] font-oswald  ">A team of dreamers and doers building unique interactive music and art</p>
                </div>
            </div>

            <div className="flex gap-4 ">
                <img src={reputation} className=" w-[3rem] h-[3rem]" alt="" />
                <div className="">
                    <h3 className="text-[20px] md:text-[22px] text-[#212121] font-semibold font-oswald">Well Reputation</h3>
                    <p className="text-[#5c5c5b] text-[17px] lg:text-[18px] font-oswald  xl:w-[94%] ">A team of dreamers and doers building unique interactive music and art</p>
                </div>
            </div>
            </div>

            <div className="button-text xl :flex  gap-6 items-center">
           <Link
                         to="/about"
                         class=" relative mb-3 h-10 md:h-14 w-32 md:w-48 bg-[#D12525]  flex items-center justify-center overflow-hidden rounded-md  md:flex text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#00813D] before:duration-500 before:ease-out hover:text-white  hover:before:h-40 hover:before:w-48 hover:before:opacity-80"
                       >
                         <span class="relative font-heading font-bold flex items-center justify-center text-sm  md:text-lg z-10">
                          More About Us
                         </span>
                       </Link>
                       <p className="font-oswald font-bold text-[17px]"><span className="text-[#D12525] text-[20px]">BRENDON GARREY</span> <br />CUSTOMER’S EXPERIENCE IS OUR HIGHEST PRIORITY.</p>
                       
            </div>
            </div>
        </div>
    </section>

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

           <section>
            <Marque />
           </section>

           <section>
             <div className="grid grid-cols-1 lg:grid-cols-12 group">
      
      {/* LEFT BOX */}
      <div className="col-span-8 bg-kfc-banner-bg bg-no-repeat bg-cover flex flex-col items-center  justify-center p-6">
        <img src={offer} className="w-24 md:w-32 mb-6 " alt="Offer" />
        <img src={kfc} className=" w-[40rem] xl:w-[90rem] transition-transform duration-500 ease-in-out group-hover:translate-x-7" alt="KFC" />
      </div>

      {/* RIGHT BOX */}
      <div className="col-span-4 bg-curve-Shape bg-no-repeat bg-cover bg-center bg-[#00813D] flex flex-col justify-center p-8 text-center xl:text-left">
        <div className="space-y-10">
          
          <h3 className="text-[17px] font-oswald text-white font-semibold">
           Deal Of The Day
          </h3>
          <h1 className="text-[32px] lg:text-[40px] font-oswald text-white capitalize font-bold leading-tight">
            TODAY’S the hamburger’ DAY
          </h1>
          <p className="text-[17px] font-oswald text-white ">
            Wheat tortilla with spicy chicken bites, cheese sauce, tomatoes and soft cheese.
            Savor the perfect symphony of flavors It’s the perfect dining experience where Experience quick and efficient with our signature hamburger, a culinary
          </p>
        </div>

        {/* TIMER */}
        {/* <div className="mt-8">
          <ul className="flex justify-center xl:justify-start gap-6 text-center">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
              <li key={i} className="font-oswald">
                <span className="text-[28px] text-[#D12525] font-bold block">30</span>
                <p className="text-[14px] text-[#212121] uppercase font-semibold ">{label}</p>
              </li>
            ))}
          </ul>
        </div> */}

        <button
  type="submit"
  className="relative mt-20 w-fit mx-auto xl:ml-0 cursor-pointer font-oswald font-semibold  border border-[#D12525] text-white px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-white before:duration-500 before:ease-out hover:text-black hover:before:h-40 hover:before:w-48 hover:before:opacity-80"
>
  <span className="relative z-10 inline-flex items-center gap-2">
    <TbTruckDelivery className="text-xl" /> Order Now
  </span>
</button>
      </div>

    </div>
           </section>

           <section>
      <OurChief/>
    </section>

     <section>
      <FoodProcessing/>
    </section>


           <section>
      <Testimonial />
    </section>

    <section>
      <PhotoSlider />
    </section>

   

   
    

    

    

     

    
  </div>;
};

export default AboutUs;
