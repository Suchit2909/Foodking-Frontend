import React from "react";
import  delivery from "../Assets/delivery-man-1.png";

const DeliveryBanner = () => {
  return <div>
    <div className="main py-[50px]   px-4 md:px-8 lg:px-11 xl:px-24   relative  ">
        <div className=" relative bg-delivery-banner-bg bg-no-repeat py-[60px] px-[40px]   md:py-[120px] md:px-[60px] bg-cover bg-center rounded-xl  ">
         
           <div className="relative text-content text-center md:text-left ">
            <h4 className="text-[17px] font-oswald font-semibold text-[#FFB936]  ">Crispy, Every Bite Taste</h4>
            <h1 className="text-[30px] lg:text-[48px] font-oswald font-bold leading-tight text-white">30 Minutes Fast <br /> Delivery Challenge</h1>
           
           </div>
            
            
        </div>
         <div className=" hidden md:block">
               <img src={delivery} className=" absolute w-[20rem] lg:w-[35rem] top-[28%] lg:-top-[3%] left-[50%] xl:left-[55%] lg:-bottom-5 lg:left-[45%] " alt="" />
            </div>
    </div>
  </div>;
};

export default DeliveryBanner;
