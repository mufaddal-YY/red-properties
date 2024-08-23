"use client";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const Banner = ({ propertiesData }) => {
  
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    loop: true,
    onHoverPause: false,
    fade: true, // Add this to enable a smooth fade transition
    cssEase: "linear", // Use linear easing for a smoother transition
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 591,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <main className="items-center bg-cover bg-center bg-no-repeat">
      {propertiesData.slice(2, 3).map((item) => (
        <Slider {...settings}>
          {item.gallery.map((data) => (
            <div className="w-full ">
              <div className="items-center">
                <div className="h-[450px] relative">
                  <div className="absolute inset-0 mx-auto flex items-center justify-center z-50 p-2">
                    <div className="text-center p-6 md:p-9 lg:p-12 rounded-2xl">
                      <div className="w-full mx-auto text-center">
                        <h1 className="text-white font-semibold text-2xl md:text-3xl lg:text-5xl py-2">
                          Properties
                        </h1>
                        <p className="py-2 text-white text-lg">
                        Discover Your Dream Home – Where Luxury Meets Comfort.
                        </p>
                      </div>
                    </div>
                  </div>
                  <Image
                    className="object-cover"
                    layout="fill"
                    src={data?.image}
                    alt=""
                  />
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ))}
    </main>
  );
};

export default Banner;
