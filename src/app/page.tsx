"use client";

import { useState, useEffect } from "react";
import { LazyImagen } from "./components/RandomFox";
import AddFoxButton from "./components/buttom";
import { random } from "lodash";

export default function Home() {
  const randomImageNumber = random(1,123);
  const generateId = () => Math.random().toString(36).substr(2.9);

  

  const [images, setImages] = useState<Array<IFoxImageItem>>([]);
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
      <h1>Lazy Loanding</h1>
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
