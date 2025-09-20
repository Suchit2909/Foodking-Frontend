import React from "react";
import categoryImage from "../Assets/catagory-card-shape (1).png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../Slice/categorySlice";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const catebgImage = {
  backgroundImage: `url(${categoryImage})`,
  backgroundSize: "",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const CategorySlider = () => {
  const dispatch = useDispatch();

  const {
    data: categories,
    loading,
    error,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-[#F4F1EA] px-3 md:px-8 lg:px-11 xl:px-24 w-full">
      <div className=" pt-24 pb-10 mx-1 ">
        <div className=" text-content leading-9 text-left px-3 ">
          <p className="text-[17px] mb-[5px] font-oswald font-bold text-[#00813D]">
            crispy, every bite taste
          </p>
          <h1 className="text-[30px] md:text-[49px] text-[#212121] font-bold font-oswald mb-[60px] ">
            Popular Food Items
          </h1>
        </div>

        <div className="swiper-box ">
          <Swiper
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 30,
              },

              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1440: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            pagination={{
              clickable: false,
            }}
            modules={[Autoplay]}
            className="mySwiper  "
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.id} className="">
                <div className="grid grid-flow-col gap-3 ">
                  <NavLink
                    to={`/category/${cat.categoryId}`}
                    className="group background--box xl:w-[18rem] xl:h-[25rem] hover:animate-bgchange shadow-sm z-30  rounded-xl bg-category-background bg-white bg-no-repeat bg-center bg-cover pt-5 pb-12 px-7 grid items-center justify-center delay-75 "
                  >
                    <div className="images">
                      <img
                        src={cat.imageUrl}
                        className="w-[14rem] h-[14rem] xl:w-[14rem] xl:h-[14rem] z-50"
                        alt={cat.name}
                      />
                    </div>
                    <h1 className=" text-center text-[28px] text-[#212121] font-bold font-oswald duration-300 delay-75 group-hover:text-white">
                      {cat.name}
                    </h1>
                    <span className="border-b-[3px] mt-1 mx-auto border-[#D22B2A] w-[20%] duration-300 delay-75 group-hover:border-white"></span>
                    <p className="text-center mt-2 mb-3 text-[17px] font-oswald font-bold text-[#D22B2A] duration-300 delay-75 group-hover:text-white">
                      {cat.products.length} products
                    </p>
                  </NavLink>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default CategorySlider;
