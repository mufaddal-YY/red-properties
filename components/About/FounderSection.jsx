import React from "react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const FounderSection = ({ aboutData }) => {
  return (
    <main className="bg-white flex items-center">
      <section className="container py-[50px] flex flex-col items-center">
        {aboutData.map((item) => {
          return (
            <article className="flex flex-col lg:flex-row justify-between w-full">
              <div className="w-full lg:w-1/2">
                <h4 className="my-2 text-2xl lg:text-3xl text-[#EE3137] font-semibold leading-snug lg:leading-snug">
                  {item.founderTitle}
                </h4>
                <Separator className="my-2 bg-red-500" />
                <div className="py-4 text-md text-gray-500">
                  <p>{item.founderDescription}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center">
                <div className="w-full max-w-[300px] bg-primary rounded-2xl overflow-hidden">
                  <Image
                    className="w-full rounded-t-2xl"
                    src={item.founderImage}
                    width={300}
                    height={300}
                    alt="About Image"
                    priority
                  />
                  <div className="p-4 flex flex-row justify-between">
                    <div>
                      <h6 className="text-lg text-white font-semibold text-left">
                        {item.founderName}
                      </h6>
                      <p className="text-left text-white text-xs">
                        {item.founderDesignation}
                      </p>
                    </div>
                    <div>
                      <Link href={item.founderLinkedin} target="_blank">
                        <span className="text-3xl text-white">
                          <FaLinkedinIn />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default FounderSection;
