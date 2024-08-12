import AboutSection from "@/components/About/AboutSection";
import FounderSection from "@/components/About/FounderSection";
import PageBanner from "@/components/About/PageBanner";
import VisionMission from "@/components/About/VisionMission";
import CTA from "@/components/Common/CTA";
import { getAboutData, getHomeData } from "@/sanity/fetchedData";

export default async function About() {
  const homeData = await getHomeData();
  const aboutData = await getAboutData();
  return (
    <>
      <PageBanner homeData={homeData} aboutData={aboutData} />
      <AboutSection aboutData={aboutData} />
      <VisionMission aboutData={aboutData} />
      <FounderSection aboutData={aboutData} />
      <CTA/>
    </>
  );
}
