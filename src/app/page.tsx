"use client";

import { useState, useEffect } from "react";
import { LazyImagen } from "./components/RandomFox";
import AddFoxButton from "./components/buttom";

export default function Home() {
  const randomImageNumber = Math.floor(Math.random() * 123) + 1;
  const generateId = () => Math.random().toString(36).substr(2.9);

  type ImageItem = { id: string; url: string };

  const [images, setImages] = useState<Array<ImageItem>>([]);
  const addNewFox = () => {
    const newImageItem = {
      id: generateId(),
      url: `https://randomfox.ca/images/${randomImageNumber}.jpg`
    };
    setImages([
      ...images,
      newImageItem
    ])
  }

  return (
    <main>
      <h1>hola</h1>
      <AddFoxButton onClick={addNewFox} />
      {images.map(({ id, url }) => (
        <div key={id}>
          <LazyImagen
            src={url}
            onClick={() => {
              console.log("holaa");
            }}
          />
        </div>
      ))}
    </main>
  );

}
