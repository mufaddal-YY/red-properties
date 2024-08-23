import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import ApartmentImage from "../../../public/apartment.png";
import EnquiryForm from "@/components/Common/EnquiryForm";
import PortableTextComponent from "@/components/ui/PortableTextComponent";

const DetailAbout = ({ propertyDetail }) => {
  return (
    <>
      <main className="-mt-2 bg-[#FFF5F0] py-[20px] lg:py-[50px] items-center">
        <section className="container py-[50px] flex flex-col items-center">
          <article className="flex flex-col lg:flex-row justify-between items-center w-full">
            <div className="w-full lg:w-1/2">
              <p className="text-lg font-semibold text-gray-500">
                Residential Apartments
              </p>
              {propertyDetail?.startingPrice ? (
                <h4 className="my-1 text-2xl lg:text-5xl leading-snug lg:leading-snug">
                  <span className="font-medium text-gray-700">
                    Starting from
                  </span>
                  <br />{" "}
                  <span className="font-bold text-[#EE3137]">
                    ₹ {propertyDetail?.startingPrice}
                  </span>
                </h4>
              ) : (
                ""
              )}

              <Separator className="mt-2 bg-red-500 w-3/4" />
              <p className="text-lg font-semibold text-gray-500 mt-2">
                Apartment Size
              </p>
              <div className="py-2 flex flex-row flex-wrap">
                {propertyDetail?.apartmentSizes.map((item) => (
                  <div className="w-1/2 flex gap-2 p-2 items-center">
                    <div className="border p-3 border-red-500">
                      <Image src={ApartmentImage} width={50} height={50} />
                    </div>
                    <p className="">
                      <span className="text-lg text-gray-600 font-bold">
                        {item?.size}
                      </span>
                      <br />
                      <span className="text-md text-gray-600">
                        {item?.area}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <Separator
              orientation="vertical"
              className="w-[2px] rounded-full bg-red-500 h-[400px] hidden lg:block"
            />
            <div className="w-full lg:w-1/2 flex my-4 justify-center items-center ">
              <div className="w-full lg:p-4">
                <EnquiryForm />
              </div>
            </div>
          </article>
        </section>
      </main>

      <main className="bg-white py-[20px] items-center">
        <section className="container py-[50px] flex flex-col items-center">
          <div className="text-md lg:text-lg text-gray-600">
            <PortableTextComponent content={propertyDetail?.aboutProperty} />
          </div>
        </section>
      </main>
    </>
  );
};

export default DetailAbout;
