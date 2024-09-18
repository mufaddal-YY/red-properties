"use client";
import React, { useRef } from "react";
import { motion as m, useInView } from "framer-motion";
import Image from "next/image";
import { Separator } from "../ui/separator";

const AboutSection = ({ aboutData }) => {
  return (
    <main className="bg-white flex items-center">
      <section className="container py-[50px] flex flex-col items-center">
        {aboutData.map((item) => {
          return (
            <article className="flex flex-col lg:flex-row justify-between items-center w-full">
              <div className="w-full lg:w-1/2">
                <h4 className="my-2 text-2xl lg:text-3xl text-[#EE3137] font-semibold leading-snug lg:leading-snug">
                  {item.sectionTitle}
                </h4>
                <Separator className="my-2 bg-red-500" />
                <div className="py-4 text-md text-gray-700">
                  <p>{item.sectionDescription}</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 flex mb-4 justify-center items-center">
                <Image
                  className="rounded-xl floating-hover"
                  src={item.sectionImage}
                  width={500}
                  height={500}
                  alt="About Image"
                  priority
                />
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default AboutSection;
