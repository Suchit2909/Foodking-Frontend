import React from "react";
import kfc from "../Assets/kfc (1).png";
import offer from "../Assets/50percent-off-2-1.png";
import { TbTruckDelivery } from "react-icons/tb";

const Kfc = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 group py-[100px]">
      
      {/* LEFT BOX */}
      <div className="col-span-8 bg-kfc-banner-bg bg-no-repeat bg-cover flex flex-col items-center  justify-center p-6">
        <img src={offer} className="w-24 md:w-32 mb-6 " alt="Offer" />
        <img src={kfc} className=" w-[40rem] xl:w-[90rem] transition-transform duration-500 ease-in-out group-hover:translate-x-7" alt="KFC" />
      </div>

      {/* RIGHT BOX */}
      <div className="col-span-4 bg-white flex flex-col justify-center p-8 text-center xl:text-left">
        <div className="space-y-4">
          <h3 className="text-[17px] font-oswald text-[#00813D] font-semibold">
            Crispy, Every Bite Taste
          </h3>
          <h1 className="text-[32px] lg:text-[40px] font-oswald text-[#212121] capitalize font-bold leading-tight">
            KFC Chicken Hot Wing & French Fries
          </h1>
          <p className="text-[17px] font-oswald text-[#5C5C5B]">
            Wheat tortilla with spicy chicken bites, cheese sauce, tomatoes and soft cheese.
          </p>
        </div>

        {/* TIMER */}
        <div className="mt-8">
          <ul className="flex justify-center xl:justify-start gap-6 text-center">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
              <li key={i} className="font-oswald">
                <span className="text-[28px] text-[#D12525] font-bold block">30</span>
                <p className="text-[14px] text-[#212121] uppercase font-semibold ">{label}</p>
              </li>
            ))}
          </ul>
        </div>

        <button
  type="submit"
  className="relative mt-12 w-fit mx-auto xl:ml-0 cursor-pointer font-oswald font-semibold bg-[#00813D] text-white px-6 py-3 rounded-lg overflow-hidden transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#D12525] before:duration-500 before:ease-out hover:text-white hover:before:h-40 hover:before:w-48 hover:before:opacity-80"
>
  <span className="relative z-10 inline-flex items-center gap-2">
    <TbTruckDelivery className="text-xl" /> Order Now
  </span>
</button>
      </div>

    </div>
  );
};

export default Kfc;
