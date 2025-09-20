import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';

import sponser1 from "../Assets/01.svg";
import sponser2 from "../Assets/03.svg";
import sponser3 from "../Assets/04.svg";
import sponser4 from "../Assets/05.svg";
import sponser5 from "../Assets/06.svg";
import sponser6 from "../Assets/02.svg";

const BrandSponser = () => {
  const sponsors = [sponser1, sponser2, sponser3, sponser4, sponser5, sponser6, sponser1, ];

  return (
    <div className="w-full overflow-hidden py-12 px-3 sm:px-6 md:px-8 lg:px-11  xl:px-24">
      
      {/* Heading and line */}
      <div className="mb-8 flex items-center gap-2 w-full">
        <h1 className="font-oswald font-semibold whitespace-nowrap text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
  GLOBAL <span className="text-[#ffb936]">5K+</span> HAPPY SPONSORS WITH US
</h1>
        {/* Line visible only on lg and above */}
        <div className="hidden lg:block border flex-1"></div>
      </div>

      <Swiper
  loop={true}
  speed={2500}
  autoplay={{ delay: 1000, disableOnInteraction: false }}
  modules={[Autoplay]}
  centeredSlides={true}
  spaceBetween={40}
  breakpoints={{
    0: { slidesPerView: 1, centeredSlides: true },
    480: { slidesPerView: 2, centeredSlides: true },
    768: { slidesPerView: 4, centeredSlides: false },
    1024: { slidesPerView: 5, centeredSlides: false },
  }}
>
  {sponsors.map((sponsor, index) => (
    <SwiperSlide key={index} className="py-7 w-full">
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={sponsor}
          alt={`Sponsor ${index}`}
          className="w-20 sm:w-24 md:w-28 max-h-16 object-contain grayscale hover:grayscale-0 hover:brightness-50 transition-all duration-300"
        />
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </div>
  );
};

export default BrandSponser;
