import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import pizza from "../Assets/pizzashape.png";
import  burgerShape from "../Assets/burger-shape-3.png";
import fries from "../Assets/fry-shape-2.png";

import first from "../Assets/01-1.jpg";
import second from "../Assets/02-1.jpg";
import third from "../Assets/03-1.jpg";

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [first, second, third];

  const testimonials = [
    {
      name: "Amelia Emily",
      title: "Business CEO & Co Founder",
      quote:
        "Thank You For your dinner last Night. It was Amazing!! I have to say it's the best meal I have had in quite some time. Will definitely be eating more next year.",
    },
    {
      name: "John Walker",
      title: "Marketing Head at Foodies",
      quote:
        "The flavors were incredible. I’m really impressed by the taste and service. Looking forward to more orders!",
    },
    {
      name: "Sophia Martinez",
      title: "Chef & Food Critic",
      quote:
        "This was hands down one of the best food deliveries I’ve received. Hot, fresh, and super delicious!",
    },
  ];

  return (
    <div div className="bg-[#F4F1EA] py-[40px] lg:py-[90px]"> 
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((t, index) => (
          <SwiperSlide key={index}>
            <div className="main w-full">
              <div className="testimonial-block-box px-6 md:px-20">
                <div className="text-center mb-6 pt-[50px]">
                  <h1 className="text-[29px] font-oswald font-extrabold">
                    {t.name}
                  </h1>
                  <h3 className="text-[20px] font-oswald font-bold text-[#D12525]">
                    {t.title}
                  </h3>
                </div>
                <img src={burgerShape} className="hidden lg:flex absolute left-32 top-5" alt="" />
                  <img src={fries} className="hidden lg:flex absolute right-28 bottom-5" alt="" />
                <h1 className="capitalize text-[26px] text-[#212121] font-oswald font-extrabold">
                  "{t.quote}"
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        <img src={pizza} className="hidden lg:flex absolute left-16" alt="" />
        <img src={burgerShape} className=" hidden lg:flex absolute right-16 " alt="" />
      {/* Images below testimonial */}
      <div className="images-div-box flex gap-6 items-center justify-center mt-8 pb-[50px] ">
        {images.map((img, index) => (
          <div
            key={index}
            className={`transition-all duration-300 rounded-full p-1 ${
              activeIndex === index
                ? "bg-[#FFB936]"
                : "bg-transparent grayscale opacity-50"
            }`}
          >
            <img
              src={img}
              alt={`person-${index}`}
              className={`rounded-full border-[6px] transition-all duration-300 ${
                activeIndex === index ? "border-white" : "border-transparent"
              } w-[80px] h-[80px] object-cover`}
            />
          </div>
        ))}
      </div>
    </div   >
  );
};

export default Testimonial;
