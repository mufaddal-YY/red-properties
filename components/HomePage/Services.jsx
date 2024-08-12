import Image from "next/image";

const Services = ({ homeData }) => {
  return (
    <main className="py-[50px] bg-gray-50">
      <section className="container">
        <div className="p-2 mx-auto flex justify-center lg:justify-start">
          <h2 className="text-3xl py-3 text-center lg:text-left border-b-2 border-[#EE3137] w-1/2 md:w-1/5 lg:w-1/6">
            Services
          </h2>
        </div>
        {homeData.map((item, index) => (
          <div key={index} className="flex flex-wrap py-8 p-1 justify-start">
            {item.services.map((data, idx) => (
              <div
                key={idx}
                className="w-1/2 md:w-1/3 lg:w-1/4 flex flex-col items-center py-4 gap-2">
                <div className="flex justify-center border border-[#EE3137] hover:bg-white p-3 rounded-lg">
                  <Image
                    src={data.image}
                    width={40}
                    height={40}
                    alt={data.title}
                  />
                </div>
                <p className="text-sm mt-2 text-center">{data.title}</p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Services;
