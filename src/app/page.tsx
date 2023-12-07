import { RandomFox } from "./components/RandomFox";

export default function Home() {
  const randomImageNumber = Math.floor(Math.random() * 123) + 1;
  const imageURL = `https://randomfox.ca/images/${randomImageNumber}.jpg`;

  return (
    <main>
      <h1>holaaa</h1>
      <RandomFox imageURL={imageURL} />
    </main>
  );
}
