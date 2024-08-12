import CTA from "@/components/Common/CTA";
import HeroBanner from "@/components/HomePage/HeroBanner";
import Services from "@/components/HomePage/Services";
import Testimonials from "@/components/HomePage/Testimonials";
import WhyRed from "@/components/HomePage/WhyRed";
import { getHomeData } from "@/sanity/fetchedData";

export default async function Home() {
  const homeData = await getHomeData();

  return (
    <>
      <HeroBanner homeData={homeData} />
      <WhyRed homeData={homeData} />
      <Services homeData={homeData} />
      <Testimonials homeData={homeData} />
      <CTA />
    </>
  );
}
