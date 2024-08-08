import { groq } from "next-sanity";
import { client } from "./lib/client";

const defaultFetchOptions = { cache: "no-cache" };

export async function getHomeData() {
  const result = await client.fetch(
    groq`*[_type == "home"]{
         _id,
          _createdAt,
         metaTitle,
         metaDescription,
         metaKeywords,
         headline,
         subHeadline,
         heroSlider[]{
         "image": image.asset->url,
         },
         sectionHead,
         sectionDesc,
         whyRed[]{
         title,
         "image": image.asset->url,
         },
         services[]{
         title,
         "image": image.asset->url,
         },
         testimonials[]{
         name,
         review,
         },
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getAboutData() {
  const result = await client.fetch(
    groq`*[_type == "about"]{
         _id,
          _createdAt,
         metatitle,
         metaDescription,
         metaKeywords,
         headline,
         subHeadline,
         "image": image.asset->url,
         sectionTitle,
         sectionDescription,
         "sectionImage": sectionImage.asset->url,
         visionTitle,
         visionDescription,
         missionTitle,
         missionDescription,
         founderTitle,
         founderDescription,
         "founderImage": founderImage.asset->url,
         founderName,
         founderDesignation,
         founderLinkedin,
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getPropertyData() {
  const result = await client.fetch(
    groq`*[_type == "properties"]{
         _id,
          _createdAt,
         metatitle,
         metaDescription,
         metaKeywords,
         propertyName,
         "slug": slug.current,
         reraNumber,
         highlights,
         startingPrice,
         apartmentSizes[]{
         size,
         area,
         },
         gallery[]{
         title,
         "image": image.asset->url,
         },   
        }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getPropertyDetailData(slug) {
  return client.fetch(
    groq`*[_type == "properties" && slug.current == $slug][0]{
         _id,
          _createdAt,
         metatitle,
         metaDescription,
         metaKeywords,
         propertyName,
         "slug": slug.current,
         reraNumber,
         highlights,
         startingPrice,
         apartmentSizes[]{
         size,
         area,
         },
         aboutProperty,
         gallery[]{
         title,
         "image": image.asset->url,
         },
         video,
         mapLink,
         address,
         nearbyLocation[]{
         location,
         },
         amenities[],    
      }`,
    { slug, defaultFetchOptions }
  );
}
