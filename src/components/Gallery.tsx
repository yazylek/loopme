import { useEffect, useState } from "react";
import { ImageFinder } from "../gallery/ImageFinder";
import type { Image } from "../types/images";

const imageFinder = new ImageFinder();

export function Gallery() {
  const [query, setQuery] = useState<string>("");
  const [limit, setLimit] = useState<number>(10);
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const result = imageFinder.search(query, Number(limit));
    setImages(result.images);
  }, [query, limit]);

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4">My Gallery</h1>

      <div className="mb-4 flex gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-2 border rounded pl-3 outline-none"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select
          className="border p-2 rounded py-2"
          value={limit}
          onChange={(e) => setLimit(Number(e.target.value))}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="50">50</option>
          <option value="80">80</option>
          <option value="100">100</option>
        </select>
      </div>

      <div>
        {query.trim() === "" ? (
          <p>Search for something...</p>
        ) : (
          <ul className="grid gap-4 grid-cols-2 sm:grid-cols-4 md:grid-cols-10 h-full grid-flow-dense auto-rows-[100px]">
            {images.map((item, index) => (
              <li
                className="h-full list-none hover:scale-105 hover:shadow-2xl transition-all duration-300"
                key={`${item.id}-${index}`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full object-cover h-24"
                />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
