import React from "react";
import Marquee from "react-fast-marquee";
import first from "../Assets/slideimg1.jpg";
import second from "../Assets/Slideimg3.jpg";
import three from "../Assets/Slideimg2.jpg";
import four from "../Assets/04-1.jpg";
import five from "../Assets/05-1.jpg";
import six from "../Assets/06-1.jpg";
import seven from "../Assets/07-1.jpg";
import eight from "../Assets/08-2.jpg";
import nine from "../Assets/09-2.jpg";
import ten from "../Assets/10-1.jpg";

const images = [first, second, three, four, five, six, seven, eight, nine, ten];

const PhotoSlider = () => {
  return (
    <div className="overflow-hidden">
      <Marquee speed={60} gradient={false} pauseOnHover>
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="relative group">
              <img
                src={img}
                alt={`img-${i}`}
                className="w-[450px] h-[450px] object-cover"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default PhotoSlider;
