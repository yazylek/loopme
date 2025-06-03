import { staticImagesData } from "../resources/static-image-db.js";
import type { Image } from "../types/images.js";

export class ImageFinder {
  search(query: string, limit: number): { query: string; images: Image[] } {
    const filterData = staticImagesData.filter((item: Image) => {
      return item.title.includes(query.toLowerCase());
    });
    const slicedArr = filterData.slice(0, limit);
    const images = slicedArr.map((item: Image) => {
      return {
        id: item.id,
        url: item.url,
        title: item.title,
      };
    });
    return {
      query,
      images,
    };
  }
}
