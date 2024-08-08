import HeroBanner from "@/components/HomePage/HeroBanner";
import Services from "@/components/HomePage/Services";
import WhyRed from "@/components/HomePage/WhyRed";
import { getHomeData } from "@/sanity/fetchedData";

export default async function Home() {
  const homeData = await getHomeData();

  return (
    <>
      <HeroBanner homeData={homeData} />
      <WhyRed homeData={homeData} />
      <Services homeData={homeData} />
    </>
  );
}
