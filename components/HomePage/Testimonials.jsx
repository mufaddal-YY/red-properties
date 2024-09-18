"use client";

import { useRef } from "react";
import Slider from "react-slick";
import { motion as m, useInView } from "framer-motion";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { HiMiniArrowLongLeft } from "react-icons/hi2";
import { Separator } from "@/components/ui/separator";
import { FaStar } from "react-icons/fa";

const Testimonials = ({ homeData }) => {
  const settings = {
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
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

  const sectionRef = useRef(null);
  const sliderRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false });

  return (
    <main className="bg-white items-center py-[50px]">
      <section className="container items-center">
        <article className="flex justify-between items-center">
          <div className="">
            <h2 className="text-2xl lg:text-3xl py-3 text-left border-b-2 border-[#EE3137]">
              Customer Testimonials
            </h2>
          </div>
          <div className="flex justify-between text-2xl mb-2">
            <div
              className="slick-arrow text-[#EE3137] px-2"
              onClick={() => sliderRef?.current?.slickPrev()}>
              <HiMiniArrowLongLeft />
            </div>
            <div
              className="slick-arrow text-[#EE3137] px-2"
              onClick={() => sliderRef?.current?.slickNext()}>
              <HiOutlineArrowLongRight />
            </div>
          </div>
        </article>
      </section>

      <m.section
        ref={sectionRef}
        initial={{ y: 40, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="container mt-8 flex items-center">
        {homeData.map((item, index) => (
          <div className="w-full">
            <Slider
              ref={sliderRef}
              {...settings}
              className="flex flex-row justify-between items-center">
              {item.testimonials.map((data, index) => (
                <div className="p-2" key={index}>
                  <div
                    className="lg:h-[250px] h-full items-center border border-[#EE3137] rounded-2xl text-gray-700 hover:text-white bg-white hover:bg-[#c51f25] hover:duration-1000 p-4"
                    style={{
                      backgroundImage: "url('./testimonialsBg.png')",
                      backgroundPosition: "right bottom",
                      backgroundSize: "50%",
                      backgroundRepeat: "no-repeat",
                    }}>
                    <div className="text-xl leading-normal text-yellow-500 py-2">
                      <span className="flex">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </span>
                    </div>
                    <div className="text-md lg:text-[12px] leading-normal font-light py-2">
                      <span>{data.review}</span>
                    </div>
                    <div className="text-sm font-medium py-4">
                      <span>{data.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </m.section>
    </main>
  );
};

export default Testimonials;
