"use client";

import { useState, useEffect } from "react";
import { RandomFox } from "./components/RandomFox";

export default function Home() {
  const randomImageNumber = Math.floor(Math.random() * 123) + 1;

  type ImageItem = { id: string; url: string };

  const generateImageURLs = () => {
    return Array.from({ length: 4 }, (_, i) => ({
      id: String(i),
      url: `https://randomfox.ca/images/${randomImageNumber + i}.jpg`,
    }));
  };
  
  const [images, setImages] = useState<ImageItem[]>([]);
  
  useEffect(() => {
    setImages(generateImageURLs());
  }, []);
  
  return (
    <main>
      <h1>hola</h1>
      {images.map(({id, url}) => (
        <div key={id}>
          <RandomFox image={url} />
        </div>
      ))}
    </main>
  );
  
}
