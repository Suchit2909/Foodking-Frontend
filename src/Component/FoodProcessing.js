import React from "react";
import food1 from "../Assets/food-1.png";
import food2 from "../Assets/food-2.png";
import food3 from "../Assets/food-3.png";

const FoodProcessing = () => {
  return <div>
    <div className="main px-4 md:px-10 lg:px-14 xl:px-24 bg-pizza-background bg-no-repeat bg-cover bg-center py-[100px]">
        <div className="headint-text text-center mb-8">
            <h4 className="text-[17px] font-semibold font-oswald text-[#00813D]">Food Processing</h4>
            <h1 className="text-[#212121] text-[30px] md:text-[38px] lg:text-[48px] font-oswald font-bold ">How We Serve You?</h1>
        </div>
        <div className=" grid md:grid-cols-2 xl:grid-cols-3 gap-10">
            <div className="box-1 p-12 grid grid-flow-row hover:bg-[#ffb936] mt-[30px]  justify-center items-center rounded-xl">
            <div className="text-center">
                <span className="p-2 rounded-full bg-[#00813D] text-white font-medium">01</span>
            <img src={food1} className="mx-auto" alt="" />
            </div>
            <h1 className="text-[#212121] text-[28px] font-oswald font-bold text-center ">cooking with care</h1>
            <p className="text-[#5C5C5B] text-[17px] font-oswald text-center">Its the perfect dining experience where Experience quick and efficient</p>
        </div>

        <div className="box-1 p-12 grid grid-flow-row hover:bg-[#ffb936] mt-[30px]  justify-center items-center rounded-xl">
            <div className="text-center">
                <span className="p-2 rounded-full bg-[#00813D] text-white font-medium">02</span>
            <img src={food2} className=" mx-auto" alt="" />
            </div>
            <h1 className="text-[#212121] text-[28px] font-oswald font-bold text-center ">cooking with care</h1>
            <p className="text-[#5C5C5B] text-[17px] font-oswald text-center">Its the perfect dining experience where Experience quick and efficient</p>
        </div>

        <div className="box-1 p-12 grid grid-flow-row hover:bg-[#ffb936] mt-[30px]  justify-center items-center rounded-xl">
            <div className="text-center">
                <span className="p-2 rounded-full bg-[#00813D] text-white font-medium">03</span>
            <img src={food3} className="mx-auto" alt="" />
            </div>
            <h1 className="text-[#212121] text-[28px] font-oswald font-bold text-center ">cooking with care</h1>
            <p className="text-[#5C5C5B] text-[17px] font-oswald text-center">Its the perfect dining experience where Experience quick and efficient</p>
        </div>

    
        </div>
        
    </div>
  </div>;
};

export default FoodProcessing;
