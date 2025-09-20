import React from "react";
import Marquee from "react-fast-marquee";
import pizza from "../Assets/pizza-1.png";
import burger from "../Assets/burger-1 (2).png";
 
const Marque = () => {
  return (
    <div className="py-[50px]">
  <Marquee speed={50} gradient={false}>
    {/* First block */}
    <div className="flex items-center gap-10">
      <span className="text-outline text-[65px] md:text-[125px] font-oswald font-bold capitalize italic ">
        Popular Dishes
      </span>
      <img
        src={pizza}
        className="w-[50px] md:w-[7rem]"
        alt="pizza"
      />
    </div>

    {/* Second block */}
    <div className="flex items-center gap-10">
      <span className="text-outline-grey text-[65px] md:text-[125px] font-oswald font-bold capitalize italic">
        Trending Food
      </span>
      <img
        src={burger}
        className="w-[50px] md:w-[7rem]"
        alt="burger"
      />
    </div>
  </Marquee>
</div>

  );
};

export default Marque;
