import { getPropertyDetailData } from "@/sanity/fetchedData";

export default async function PropertyDetailPage({ params }) {
  const slug = params.slug;
  const propertyDetail = await getPropertyDetailData(slug);
  return <div>{propertyDetail.reraNumber}PropertyPage</div>;
}
