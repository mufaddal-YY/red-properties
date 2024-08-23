"use client";

import { useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Slider from "react-slick";
import Image from "next/image";
import { HiMiniArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import ReactPlayer from "react-player";

const DetailSlider = ({ propertyDetail }) => {
  const sliderRef = useRef(null);

  console.log(propertyDetail);

  const settings = {
    infinite: true,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    centerMode: true, // Center the active slide
    centerPadding: "10%",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          centerPadding: "10%", // Adjust for larger screens
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10%", // Adjust for tablets
        },
      },
      {
        breakpoint: 591,
        settings: {
          centerPadding: "10%", // Adjust for mobile devices
        },
      },
    ],
  };
  return (
    <>
      <Tabs defaultValue="photo" className="w-full">
        <TabsList className="relative shadow-custom z-10 flex mx-auto w-3/4 lg:w-1/2  flex-wrap justify-center items-center bg-white backdrop-blur-sm py-4">
          <TabsTrigger value="photo">Photo Gallery</TabsTrigger>
          {propertyDetail?.video ? (
            <TabsTrigger value="video">Video</TabsTrigger>
          ) : (
            ""
          )}
        </TabsList>
        <TabsContent value="photo">
          <div className="relative">
            <div
              className="z-10 px-2 lg:px-12 absolute w-full flex justify-between items-center text-2xl mb-2"
              style={{ top: "50%", transform: "translateY(-50%)" }}>
              <div
                className="slick-arrow text-red-500 p-4 bg-white rounded-full shadow-sm"
                onClick={() => sliderRef?.current?.slickPrev()}>
                <HiMiniArrowLongLeft />
              </div>
              <div
                className="slick-arrow text-red-500 p-4 bg-white rounded-full shadow-sm"
                onClick={() => sliderRef?.current?.slickNext()}>
                <HiOutlineArrowLongRight />
              </div>
            </div>

            <div className="lg:-mt-14 relative">
              <Slider {...settings} ref={sliderRef}>
                {propertyDetail?.gallery?.map((data, index) => (
                  <div className="relative p-2" key={index}>
                    <div className="relative w-full h-[40vh] lg:h-[60vh] overflow-hidden">
                      <Image
                        className="object-cover rounded-2xl h-full w-auto"
                        src={data?.image}
                        alt={data?.title}
                        layout="fill"
                        priority
                      />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="video">
          <article className="container">
            <div className="flex justify-center mt-3">
              <ReactPlayer url={propertyDetail?.video} style={{borderRadius: "24px"}} />
            </div>
          </article>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default DetailSlider;
