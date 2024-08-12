import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Image from "next/image";

const WhyRed = ({ homeData }) => {
  return (
    <section className="-mt-2">
      <div className="flex flex-col md:flex-row lg:flex-row">
        <div className="w-full lg:w-1/2 bg-primary flex items-center ">
          {homeData.map((item) => (
            <div className="flex flex-col w-full p-8">
              <div className="py-4">
                <h2 className="text-white text-5xl lg:text-6xl leading-snug font-bold">
                  {item.sectionHead}
                </h2>
              </div>

              <Separator className="my-2 text-white" />
              <div className="py-2">
                <p className="text-md text-white mb-4">{item.sectionDesc}</p>
              </div>
              <div className="">
                <Button
                  size="lg"
                  className="bg-white hover:bg-transparent hover:text-white border border-white text-[#EE3137]">
                  Enquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/2 py-[50px]">
          {homeData.map((item) => (
            <div className="w-full md:w-3/4 lg:w-3/4 mx-auto text-center">
              <h1 className="text-gray-800 text-center font-semibold text-3xl lg:text-5xl py-4">
                Why <span className="text-[#EE3137]">Red Properties?</span>
              </h1>
              <Separator className="w-3/4 mx-auto my-2 bg-primary" />
              <div className="flex flex-wrap justify-center py-8 p-1">
                {item.whyRed.map((data) => (
                  <div className="w-1/3 flex gap-2 flex-col items-center py-4">
                    <div className="flex justify-center h-12 w-12">
                      <Image
                        src={data.image}
                        width={50}
                        height={50}
                        alt={data.title}
                      />
                    </div>
                    <p className="text-[10px] mt-2 text-center">{data.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyRed;
