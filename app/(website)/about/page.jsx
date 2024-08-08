import { getAboutData } from "@/sanity/fetchedData";

export default async function About() {
  const aboutData = await getAboutData();
  return <div>About</div>;
}
