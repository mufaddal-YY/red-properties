import PageBanner from "@/components/About/PageBanner";
import CTA from "@/components/Common/CTA";
import Banner from "@/components/Properties/Banner";
import PropertyCards from "@/components/Properties/PropertyCards";
import { getPropertyData } from "@/sanity/fetchedData";

export default async function Properties() {
  const propertiesData = await getPropertyData();

  return (
    <>
    <Banner propertiesData={propertiesData} />
      <main className="bg-white ">
        <section className="container py-8">
          <article className="flex flex-wrap flex-row justify-between">
            {propertiesData.map((item) => (
              <div className="w-full mb-2 md:w-1/2 lg:w-1/3 lg:p-2">
                <PropertyCards reraNumber={item.reraNumber} propertyName={item.propertyName} gallery={item.gallery} slug={item.slug} apartmentSizes={item.apartmentSizes} />
              </div>
            ))}
          </article>
        </section>
      </main>
      <CTA/>
    </>
  );
}
