"use client";
import { Button } from "@/components/ui/button";
import PortableTextComponent from "@/components/ui/PortableTextComponent";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";

const DetailBanner = ({ propertyDetail }) => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    loop: true,
    onHoverPause: false,
    fade: true,
    cssEase: "linear",
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
    <main className="items-center">
      <Slider {...settings}>
        {propertyDetail?.gallery?.map((data) => (
          <div className="w-full">
            <div className="items-center">
              <div className="h-[550px] relative">
                <div className="">
                  <div className="absolute lg:ml-8 inset-0 mx-auto flex items-center mt-8 justify-left z-50 p-4">
                    <div className="p-6 rounded-3xl w-full md:1/3 lg:w-1/3 bg-[rgba(255,254,250,0.8)]">
                      <div className="w-full mx-auto">
                        <h1 className="text-gray-800 font-medium border-b border-red-500 text-xl md:text-2xl lg:text-3xl py-4">
                          {propertyDetail?.propertyName}
                        </h1>
                        <p className="py-3 text-gray-800 text-md">
                          RERA No. -{" "}
                          <span className="font-semibold">
                            {propertyDetail?.reraNumber}{" "}
                          </span>
                        </p>
                        <span className="text-sm">
                          <PortableTextComponent
                            content={propertyDetail?.highlights}
                          />
                        </span>

                        {propertyDetail?.brochure ? (
                          <Link target="_blank" href={propertyDetail?.brochure}>
                            <Button
                              variant="outline"
                              size="sm"
                              className="my-4 bg-transparent border border-red-500">
                              Download Brochure
                            </Button>
                          </Link>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <Image
                  className="object-cover"
                  layout="fill"
                  src={data?.image}
                  alt=""
                />
                <div className="absolute inset-0 bg-black opacity-10"></div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </main>
  );
};

export default DetailBanner;
