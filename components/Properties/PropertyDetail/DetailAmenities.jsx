import { Amn } from "@/constants";
import React from "react";

const DetailAmenities = ({ propertyDetail }) => {
  return (
    <section className="py-[50px] bg-white flex items-center justify-center">
      <div className="container">
        <div className="flex justify-center items-center px-4 mb-2">
          <h3
            className={`font-medium text-gray-800 py-2 border-b-2 border-[#BD9A68] text-4xl max-md:text-2xl text-center items-center`}>
            Amenities
          </h3>
        </div>
        <div className="flex flex-row justify-between md:flex-col lg:flex-col ">
          <div className="w-1/2 md:w-full lg:w-full">
            <div className="flex flex-col justify-between md:flex-row lg:flex-row py-6">
              {Amn.slice(0, 5).map((item) => (
                <>
                  <div className="flex flex-col items-center justify-center">
                    <div className="bg-white shadow-sm rounded-full p-8 flex items-center text-gray-800 hover:text-red-500 border border-[#BD9A68] hover:border-red-500 transition duration-800">
                      <span className=" text-3xl">{item.icon}</span>
                    </div>
                    <div className="text-center mt-2">
                      <h6 className="text-sm text-gray-600">{item.name}</h6>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>

          <div className="w-1/2 md:w-full lg:w-full">
            <div className="flex flex-col justify-between md:flex-row lg:flex-row py-6">
              {Amn.slice(5, 10).map((item) => (
                <>
                  <div className="flex flex-col items-center justify-center ">
                    <div className="bg-white shadow-sm rounded-full p-8 flex items-center text-gray-800 hover:text-red-500 transition duration-800 border border-[#BD9A68] hover:border-red-500">
                      <span className=" text-3xl">{item.icon}</span>
                    </div>
                    <div className="text-center mt-2">
                      <h6 className="text-sm text-gray-600">{item.name}</h6>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailAmenities;
