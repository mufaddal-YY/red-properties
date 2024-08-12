"use client";
import Image from "next/image";
import Slider from "react-slick";
import { motion } from "framer-motion";
const HeroBanner = ({ homeData }) => {
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
    <main className="">
      <section className="flex flex-col md:flex-row lg:flex-row items-center">
        {homeData.map((item) => (
          <div className="w-full ">
            <div className="items-center">
              <Slider {...settings}>
                {item.heroSlider.map((data, index) => (
                  <div
                    className="h-[550px] md:h-screen lg:h-screen relative"
                    key={index}>
                    <motion.div
                      initial={{ opacity: 0, y: "5%" }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        ease: "easeIn",
                        duration: 1.2,
                        delay: index * 0.9,
                      }}
                      className="absolute inset-0 mx-auto flex items-center justify-center z-50 p-2">
                      <div className="text-center bg-[#00000060] p-6 md:p-9 lg:p-12 rounded-2xl">
                        <div className="w-full md:w-3/4 lg:w-3/4 mx-auto text-center">
                          <h1 className="text-white font-semibold text-2xl md:text-3xl lg:text-5xl py-4 border-b-2 border-[#EE3137]">
                            {item.headline}
                          </h1>
                          <p className="py-2 text-white text-lg">
                            {item.subHeadline}
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    <Image
                      className="object-cover"
                      layout="fill"
                      src={data?.image}
                      alt=""
                    />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HeroBanner;
