import Image from "next/image";
import { FaEye } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { Separator } from "../ui/separator";

const VisionMission = ({ aboutData }) => {
  return (
    <main className="bg-primary">
      <section className="container py-[80px] items-center">
        {aboutData.map((item) => (
          <article className="flex justify-between flex-col md:flex-row lg:flex-row">
            <article className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center p-4 md:border-r-2 lg:border-r-2 border-white">
              <div className="bg-white rounded-full w-24 h-24 flex justify-center items-center mb-4">
                <FaEye className="text-red-500 text-4xl" />
              </div>
              <h2 className="text-xl font-semibold text-center text-white">
                {item.visionTitle}
              </h2>
              <p className="text-md text-center mt-2 text-white">
                {item.visionDescription}
              </p>
            </article>
            <article className="w-full md:w-1/2 lg:w-1/2 flex flex-col items-center p-4">
              <div className="bg-white rounded-full w-24 h-24 flex justify-center items-center mb-4">
                <GoGoal className="text-red-500 text-4xl" />
              </div>
              <h2 className="text-xl font-semibold text-center text-white">
                {item.missionTitle}
              </h2>
              <p className="text-md text-center mt-2 text-white">
                {item.missionDescription}
              </p>
            </article>
          </article>
        ))}
      </section>
    </main>
  );
};

export default VisionMission;
