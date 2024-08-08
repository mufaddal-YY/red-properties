import { getPropertyData } from "@/sanity/fetchedData";

export default async function Properties() {
  const propertiesData = await getPropertyData();
  return <div>Properties</div>;
}
