import React from "react";
import CategorySlider from "../Component/CategorySlider";
import Banner from "../Component/Banner";
import Footer from "../Component/Footer";
import PopularFoods from "../Component/PopularFoods";
import BurgerBanner from "../Component/BurgerBanner";


const UserDashboard = () => {
  return <div className="relative bg-[#F4F1EA]">
   <section>
    <Banner/>
    </section>

    <section>
    <CategorySlider />
    </section>

    <section className="py-12">
    <PopularFoods />
    </section>

    <section>
      <BurgerBanner />
    </section>
   
  
  
  <Footer />
   
  </div>;
};

export default UserDashboard;
