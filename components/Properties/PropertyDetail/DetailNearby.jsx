import { Separator } from "@/components/ui/separator";
import { FiCheckCircle } from "react-icons/fi";

const DetailNearby = ({ propertyDetail }) => {
  const iframeString = propertyDetail.mapLink;

  const totalLocations = propertyDetail.nearbyLocation.length;
  const midpoint = Math.ceil(totalLocations / 2);
  return (
    <main className="bg-white flex items-center">
      <section className="container py-[50px] flex flex-col items-center">
        <article className="flex flex-col lg:flex-row justify-between items-center w-full">
          <div className="w-full lg:w-1/2 lg:p-4">
            <h4 className="my-2 text-2xl text-gray-800 font-semibold leading-snug lg:leading-snug">
              {propertyDetail.address}
            </h4>
            <Separator className="my-2 bg-red-500" />

            <div className="flex flex-col lg:flex-row text-sm my-4">
              <div className="w-full lg:w-1/2">
                <ul className="list-none pl-0">
                  {propertyDetail.nearbyLocation
                    .slice(0, midpoint)
                    .map((item, index) => (
                      <li key={index} className="flex items-center mb-2">
                        <FiCheckCircle className="mr-2 text-green-700" />
                        {item.location}
                      </li>
                    ))}
                </ul>
              </div>
              <div className="w-full lg:w-1/2">
                <ul className="list-none pl-0">
                  {propertyDetail.nearbyLocation.slice(midpoint).map((item, index) => (
                    <li key={index} className="flex items-center mb-2">
                      <FiCheckCircle className="mr-2 text-green-700" />
                      {item.location}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div
            className="w-full lg:w-1/2 flex mb-4 justify-center items-center lg:order-first"
            dangerouslySetInnerHTML={{ __html: iframeString }}
          />
        </article>
      </section>
    </main>
  );
};

export default DetailNearby;
