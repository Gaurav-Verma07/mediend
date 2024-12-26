import imageUrlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";

export const sanity = createClient({
  projectId: "7rljkuk3",
  dataset: "production",
  apiVersion: "2023-05-03",
  useCdn: false,
});

const builder = imageUrlBuilder(sanity);

export function urlFor(source: any) {
  return builder.image(source);
}
