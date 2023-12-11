import { useRef } from "react";

export const RandomFox = ({ image }: { image: string }) => {
const node = useRef<HTMLImageElement>(null);

  return (
    <img
    className="foxImage"
      ref={node}
      src={image}
      alt="Random Fox"
    />
  );
};