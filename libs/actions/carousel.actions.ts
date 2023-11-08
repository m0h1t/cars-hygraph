import { fetchHygraphQuery } from "@/utils/fetch-hygraph-queries";

export const getCarousels = async (): Promise<any> => { 
  const query = `{
    marqueeCarousels {
      id
      position
      subtitleText
      titleColor {
        hex
      }
      titleText
      carSlug
      background {
        url
      }
    }
  }`;

  const data: any = await fetchHygraphQuery(
    query,
    1000 * 60 * 60 * 24,
  );
  return data.marqueeCarousels;
}