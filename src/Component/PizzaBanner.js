import React from "react";
import chicken from "../Assets/chicken.png";
import bigPizza from "../Assets/big-pizza.png"
import pizzaText from "../Assets/combo-pizza-text.png";
import offer from "../Assets/50percent-off-2-1.png";

const PizzaBanner = () => {
  return <div>
    <div className="main-box w-full  bg-pizza-background bg-no-repeat bg-cover bg-center grid xl:grid-cols-12 grid-cols-1  ">

        <div className="first-box-left-side px-4 md:px-12 pt-[100px] mb-12 col-span-12 xl:col-span-5">
            <div className="texrt mb-12">
                <h4 className="text-[17px] text-[#00813D] font-oswald font-semibold">CRISPY, EVERY BITE TASTE</h4>
            <h1 className="text-[48px] font-oswald font-bold text-[#212121] capitalize">trending Food combo offer less <span className="text-[#00813D]">20%</span></h1>
            <p className="text-[17px] font-oswald ">A term of dreams and doers building  unquie interactive music and art festival.</p>
            </div>

            <div className=" grid grid-rows-3 gap-6 max-w-fit">
              <div className="chicken-box px-6 py-2 flex items-center bg-[#F4F1EA] rounded-lg  gap-4">
                <img src={chicken} alt="" />
                <p className="text-[17px] font-oswald text-[#212121] ">30% off 4pcs Hot Crispy & 8 Pcs Wing</p>
              </div>

              <div className="chicken-box px-6 py-2 flex items-center bg-[#FFB936] rounded-lg  gap-4">
                <img src={chicken} alt="" />
                <p className="text-[17px] font-oswald text-[#212121] ">30% off 4pcs Hot Crispy & 8 Pcs Wing</p>
              </div>

              <div className="chicken-box px-6 py-2 flex items-center bg-[#F4F1EA] rounded-lg  gap-4">
                <img src={chicken} alt="" />
                <p className="text-[17px] font-oswald text-[#212121] ">30% off 4pcs Hot Crispy & 8 Pcs Wing</p>
              </div>
                
            </div>
        </div>

        <div className="right-side-box bg-pizza-banner-bg bg-no-repeat bg-cover  flex justify-between relative py-20 col-span-12 xl:col-span-7">
          <div className=" absolute left-[50%] lg:left-[35%] top-1">
            <img src={offer} className="w-[5rem] md:w-[8rem]" alt="" />
          </div>
          <div className="pizza-text-img hidden md:block">
            <img src={pizzaText} alt="" />

          </div>
          <div className="pizza-img absolute left-8 md:left-[30%] xl:-left-12 bottom-0  ">
            <img src={bigPizza} className="w-[16rem] md:w-[26rem] lg:w-[35rem] xl:w-[60rem]" alt="" />
          </div>

        </div>
    </div>
  </div>;
};

export default PizzaBanner;
