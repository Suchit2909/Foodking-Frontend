import React from "react";
import { useState, useEffect } from "react";
import BgImage from "../Assets/hero-bg.jpg";
import chicken from "../Assets/chiken.png";
import offer from "../Assets/offer-shape.png";
import chilly1 from "../Assets/chilli-shape-2.png";
import chilly2 from "../Assets/chilli-shape.png";
import fire_shape from "../Assets/fire-shape.png";
import chilly_3 from "../Assets/chilli-shape-3.png";
import icon from "../Assets/icon.png";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import { NavLink } from "react-router-dom";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Banner = () => {
  const slides = [
    {
      id: 1,
      title: "AWESOME FRIED CHICKEN",
    },
    {
      id: 2,
      title: "FAVORITE FRIED CHICKEN",
    },
    {
      id: 3,
      title: "DELICIOUS FRIED CHICKEN",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(slides[0].id);
  useEffect(() => {
    console.log("Current slide ID:", activeIndex);
  }, [activeIndex]);

  return (
    <>
      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        speed={800}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => {
          const currentIndex = swiper.realIndex;
          setActiveIndex(slides[currentIndex].id);
        }}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div style={bgImage} className=" mt-[68px] lg:mt-[100px]  xl:pt-8">
              <section className="h-full w-full pt-10 py-[90px] md:py-[100px] xl:py-[130px] ">
                <div className="relative grid  gap-2     lg:grid-cols-2  ">
                  <motion.div
                    initial={{ opacity: 0, x: 200 }}
                    animate={
                      activeIndex === slide.id ? { opacity: 0.25, x: 0 } : {}
                    }
                    transition={{
                      duration: 0.8,
                      delay: 2,
                      ease: [0, 0.71, 0.2, 1.01],
                    }}
                    className="hidden xl:flex  absolute top-[33%] left-[14%] font-background  "
                  >
                    <h1 className="font-oswald text-gray-700 text-[280px] font-bold">
                      Fast Food
                    </h1>
                  </motion.div>

                  <div className="text-content-main-left-text ">
                    <motion.div
                      initial={{ opacity: 0, y: 100 }}
                      animate={
                        activeIndex === slide.id ? { opacity: 1, y: 0 } : {}
                      }
                      transition={{
                        duration: 0.8,
                        delay: 0.7,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      className="relative  text-center leading-10 tracking-normal md:leading-snug lg:leading-none md:px-10 xl:px-16 lg:text-left  top-3 z-40  "
                    >
                      <motion.span
                        initial={{ opacity: 0, y: 100 }}
                        animate={
                          activeIndex === slide.id ? { opacity: 1, y: 0 } : {}
                        }
                        transition={{
                          duration: 0.5,
                          delay: 0.5,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className=" text-[20px]  text-red-600 xl:text-xl  font-oswald font-semibold px-4  "
                      >
                        Crispy, Every Bite Taste
                      </motion.span>
                      <motion.h1 className=" text-[42px] text-white font-bold font-oswald md:text-[60px] lg:text-[100px] xl:text-9xl">
                        {slide.title}
                        <img
                          src={icon}
                          className=" hidden lg:flex absolute top-2 left-[80%] xl:top-36 xl:left-[50%]"
                          alt="water drop icon"
                        />
                      </motion.h1>
                      <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={
                          activeIndex === slide.id ? { opacity: 1, y: 0 } : {}
                        }
                        transition={{
                          duration: 0.8,
                          delay: 1.3,
                          ease: [0, 0.71, 0.2, 1.01],
                        }}
                        className="button-div py-7 px-3 "
                      >
                        <NavLink
  to="/shop"
  className="relative z-10 inline-block cursor-pointer font-oswald font-semibold bg-[#00813D] text-white px-[32px] md:px-[36px] xl:px-[50px] rounded-lg py-[8px] md:py-[16px] xl:py-[20px] overflow-hidden transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#D12525] before:duration-500 before:ease-out hover:text-white hover:before:h-40 hover:before:w-48 hover:before:opacity-80"
>
  <span className="relative z-10">Order Now</span>
</NavLink>
                      </motion.div>
                    </motion.div>

                    <motion.img
                      initial={{ opacity: 0, y: 100 }}
                      animate={
                        activeIndex === slide.id ? { opacity: 1, y: 0 } : {}
                      }
                      transition={{
                        duration: 0.8,
                        delay: 1.9,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      src={chilly2}
                      className="hidden xl:flex absolute -left-0 -top-24 "
                      alt="chilly_img"
                    />

                    <motion.img
                      initial={{ opacity: 0, y: 100 }}
                      animate={
                        activeIndex === slide.id ? { opacity: 1, y: 0 } : {}
                      }
                      transition={{
                        duration: 0.8,
                        delay: 2,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      src={fire_shape}
                      className="hidden xl:flex absolute -left-0 -bottom-36"
                      alt="fire_img"
                    />
                  </div>

                  <div className=" chicken-props relative  ">
                    <motion.img
                      initial={{ opacity: 0, y: 100 }}
                      animate={
                        activeIndex === slide.id ? { opacity: 1, y: 0 } : {}
                      }
                      transition={{
                        duration: 0.8,
                        delay: 1,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      src={chicken}
                      className="relative w-[300px] top-2 left-11 xl:left-[2%] z-40 md:w-[500px] md:top-[3%] md:left-[18%] lg:w-[400px] lg:top-0 lg:left-14  xl:-top-[6%] xl:w-[700px]"
                      alt="chicken"
                    />

                    <motion.img
                      initial={{ opacity: 0, y: 100 }}
                      animate={
                        activeIndex === slide.id ? { opacity: 1, y: 0 } : {}
                      }
                      transition={{
                        duration: 0.9,
                        delay: 1.4,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      src={offer}
                      className="w-[180px] bottom-[65%] absolute z-40 md:w-[300px] md:right-[55%] md:-top-[15%] lg:w-[350px] lg:right-[48%] lg:-top-[27%] xl:right-[59%] xl:-top-[30%] "
                      alt="offer"
                    />

                    <motion.img
                      initial={{ opacity: 0, y: 100 }}
                      animate={
                        activeIndex === slide.id ? { opacity: 1, y: 0 } : {}
                      }
                      transition={{
                        duration: 0.8,
                        delay: 1.9,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      src={chilly1}
                      className=" hidden md:flex md:left-[76%] md:-top-[69%] absolute lg:-right-[4%] lg:-top-[25%]"
                      alt="chilly_img"
                    />

                    <motion.img
                      initial={{ opacity: 0, y: 100 }}
                      animate={
                        activeIndex === slide.id ? { opacity: 1, y: 0 } : {}
                      }
                      transition={{
                        duration: 0.8,
                        delay: 1.9,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                      src={chilly_3}
                      className="opacity-15 absolute -bottom-[40%] md:-right-[1%] md:top-[8%] xl:-bottom-[30%]"
                      alt="chilly_img"
                    />
                  </div>
                </div>
              </section>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Banner;
