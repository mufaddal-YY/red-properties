"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { TiLocation } from "react-icons/ti";
import { MdBed, MdPeopleAlt } from "react-icons/md";
import Slider from "react-slick";

const PropertyCards = ({
  slug,
  propertyName,
  reraNumber,
  gallery,
  apartmentSizes,
}) => {
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
    <div className="mb-2 bg-white shadow-[0px_0px_10px_1px_#edf2f7] rounded-lg">
      <div className="w-full overflow-hidden">
        <div className="relative h-[250px] rounded-t-lg overflow-hidden">
          <Slider {...settings}>
            {gallery?.map((data, index) => (
              <Link href={`/properties/${slug}`} key={index}>
                <div className="relative w-full h-[250px]">
                  <Image
                    className="object-cover rounded-t-lg"
                    src={data?.image}
                    alt={data?.title}
                    layout="fill"
                    priority
                  />
                </div>
              </Link>
            ))}
          </Slider>
        </div>
      </div>

      <div className="px-4 py-2">
        <div className="">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
            <div>
              <Link href={`/properties/${slug}`}>
                <h4 className="font-medium text-gray-800 capitalize text-md mb-2">
                  {propertyName}
                </h4>{" "}
              </Link>
            </div>
            <div className="flex items-center gap-2 pb-2">
              <Link href={`/properties/${slug}`}>
                <p className="flex items-center">
                  <span className="mr-1 text-red-500">Rera:</span>
                  <span
                    className="font-regular text-sm text-gray-500 truncate"
                    style={{
                      maxWidth: "150px", // Adjust this value as needed
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}>
                    {reraNumber}
                  </span>
                </p>
              </Link>
            </div>
          </div>

          <div className="flex flex-row justify-center md:justify-start lg:justify-start items-center">
            <div className="flex items-center gap-2 pb-2">
              {[...new Set(apartmentSizes.map((item) => item.size))].map(
                (size, index, array) => (
                  <p className="flex items-center" key={index}>
                    <span className="mr-1 text-gray-700">
                      {size}
                      {index < array.length - 1 && ","}
                    </span>
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCards;
