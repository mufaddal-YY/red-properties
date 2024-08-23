import CTA from "@/components/Common/CTA";
import DetailAbout from "@/components/Properties/PropertyDetail/DetailAbout";
import DetailAmenities from "@/components/Properties/PropertyDetail/DetailAmenities";
import DetailBanner from "@/components/Properties/PropertyDetail/DetailBanner";
import DetailFloorPlans from "@/components/Properties/PropertyDetail/DetailFloorPlans";
import DetailNearby from "@/components/Properties/PropertyDetail/DetailNearby";
import DetailSlider from "@/components/Properties/PropertyDetail/DetailSlider";
import { getPropertyDetailData } from "@/sanity/fetchedData";

export default async function PropertyDetailPage({ params }) {
  const slug = params.slug;
  const propertyDetail = await getPropertyDetailData(slug);
  return (
    <>
      <DetailBanner propertyDetail={propertyDetail} />
      <DetailAbout propertyDetail={propertyDetail} />
      <DetailSlider propertyDetail={propertyDetail} />
      <DetailNearby propertyDetail={propertyDetail} />
      {/* <DetailAmenities propertyDetail={propertyDetail} /> */}
      <DetailFloorPlans propertyDetail={propertyDetail} />
      <CTA />
    </>
  );
}
