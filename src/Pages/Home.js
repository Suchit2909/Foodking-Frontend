import React from "react";
import CategorySlider from "../Component/CategorySlider";
import Banner from "../Component/Banner";
import Footer from "../Component/Footer";
import PopularFoods from "../Component/PopularFoods";
import BurgerBanner from "../Component/BurgerBanner";
import BrandSponser from "../Component/BrandSponser";
import FoodWrapper from "../Component/FoodWrapper";
import SecondBanner from "../Component/SecondBanner";
import Testimonial from "../Component/Testimonial";
import PizzaBanner from "../Component/PizzaBanner";
import Marque from "../Component/Marque";
import Kfc from "../Component/Kfc";
import PhotoSlider from "../Component/PhotoSlider";
import DeliveryBanner from "../Component/DeliveryBanner";
import burger from '../Assets/burger-1.png';
import burgerText from "../Assets/burger-text.png";
import quality from "../Assets/quality.png";
import reputation from "../Assets/reputation.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return <div className="bg-[#F4F1EA]  ">
    <section>
    <Banner/>
    </section>

    <section>
    <CategorySlider />
    </section>

    <section>
      <BurgerBanner />
    </section>

    <section>
      <BrandSponser />
    </section>

     <section>
      <SecondBanner/>
    </section>  
 
    <section className="">
    <PopularFoods />
    </section>

    <section>
      <PizzaBanner/>
    </section>

     <section>
      <Marque/>
    </section>

    <section>
      <FoodWrapper />
    </section>

     <section className="px-4 sm:px-6 md:px-8 lg:px-11 xl:px-24 py-20 mt-[100px] relative">
        <div className="main-div grid lg:grid-cols-2   ">
        <div className="burger-image-div flex justify-center items-center relative">
            <motion.img
            animate={{ rotate: [-5, 5, -5] }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            src={burgerText}  className="absolute w-[15rem] z-10 lg:w-[25rem] -top-[28%] lg:top-[5%] xl:-top-[9%] right-[30%] lg:right-[37%]" alt="" />
            <img src={burger} className=" w-[12rem]  md:w-[25rem] lg:w-[36rem]" alt="" />
            <p className=" absolute text-[50px] md:text-[60px] lg:text-[80px] md:top-[75%] top-[50%] lg:top-[63%] xl:top-[70%] left-[5%] lg:left-[10%] font-oswald font-extrabold text-[#212121]">$0</p>
            <p className=" absolute top-[30%] lg:top-[65%] xl:top-[75%] left-[20%] lg:left-[50%] py-[25px] px-[30px] lg:py-[25px] lg:px-[30px] rounded-lg text-[18px] md:text-[24px] lg:text-[28px] origin-bottom -rotate-12 text-white font-bold font-oswald bg-[#ffb936] translate-x-7">Since /1985</p>
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

    <section>
      <BurgerBanner />
    </section>

    <section>
      <Kfc/>
    </section>

    

     <section>
      <Testimonial/>
    </section>

    
    <section>
      <DeliveryBanner/>
    </section>

   
    <section>
      <PhotoSlider/>
    </section>

 
  </div>;
};

export default Home;
