import React from "react";
import { ReactComponent as QualityIcon } from "../Assets/quality (1) (1).svg";
import reputation from "../Assets/reputation.png";

const FoodWrapper = () => {
  return (
    <div className="px-3 md:px-8 lg:px-11 xl:px-24 ">
      <div className="background-of-box  w-full bg-foodWrapper-banner bg-center bg-no-repeat bg-cover bg-black/90 rounded-2xl    ">
        <div className="main-box grid grid-flow-row md:grid-cols-2 lg:grid-cols-4 justify-center items-center   gap-6  px-[75px] py-[70px] ">
          <div className="box-1 flex flex-wrap items-center justify-center  lg:block">
            <QualityIcon className="w-[4rem]  " />
            <div className="box-content text-white mt-3 ">
              <h1 className="font-oswald text-[20px] text-center lg:text-left font-semibold mb-2 ">
                Super Quality Food
              </h1>
              <p className="font-oswald ">
                A team of dreamers and doers building unique interactive music
                and art
              </p>
            </div>
          </div>

          <div className="box-1 flex flex-wrap items-center justify-center  lg:block ">
            <QualityIcon className="w-[4rem] " />
            <div className="box-content text-white mt-3">
              <h1 className="font-oswald text-[20px] font-semibold mb-2 text-center lg:text-left ">
                ORIGINAL RECIPES
              </h1>
              <p className="font-oswald ">
                A team of dreamers and doers building unique interactive music
                and art
              </p>
            </div>
          </div>

          <div className="box-1 flex flex-wrap items-center justify-center  lg:block ">
            <QualityIcon className="w-[4rem] " />
            <div className="box-content text-white mt-3">
              <h1 className="font-oswald text-[20px] font-semibold mb-2 text-center lg:text-left ">
                QUICK FAST DELIVERY
              </h1>
              <p className="font-oswald ">
                A team of dreamers and doers building unique interactive music
                and art
              </p>
            </div>
          </div>

          <div className="box-1 flex flex-wrap items-center justify-center  lg:block ">
            <QualityIcon className="w-[4rem] " />
            <div className="box-content text-white mt-3">
              <h1 className="font-oswald text-[20px] font-semibold mb-2 text-center lg:text-left ">
                100% FRESH FOODS
              </h1>
              <p className="font-oswald ">
                A team of dreamers and doers building unique interactive music
                and art
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodWrapper;
