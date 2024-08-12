"use client";
import Image from "next/image";
import React from "react";

const PageBanner = ({ aboutData }) => {
  return (
    <main className="items-center bg-cover bg-center bg-no-repeat">
      {aboutData.map((item) => (
        <div className="w-full ">
          <div className="items-center">
            <div className="h-[550px] relative">
              <div className="absolute inset-0 mx-auto flex items-center justify-center z-50 p-2">
                <div className="text-center p-6 md:p-9 lg:p-12 rounded-2xl">
                  <div className="w-full mx-auto text-center">
                    <h1 className="text-white font-semibold text-2xl md:text-3xl lg:text-5xl py-2">
                      {item.headline}
                    </h1>
                    <p className="py-2 text-white text-lg">
                      {item.subHeadline}
                    </p>
                  </div>
                </div>
              </div>

              <Image
                className="object-cover"
                layout="fill"
                src={item?.image}
                alt=""
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default PageBanner;
