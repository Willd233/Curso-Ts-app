import { useRef, useEffect, useState } from "react";
import { ImgHTMLAttributes } from "react";

type LazyImagenProps = { src: string }

type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImagenProps & ImageNative;

export const LazyImagen = ({ src, ...imgProps }: Props): JSX.Element => {
  const node = useRef<HTMLImageElement>(null);
  const [currentSrc, setCurrentSrc] = useState
    ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4=")

  useEffect(() => {
    //new observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCurrentSrc(src)
        }
      })
    })
    //observer node
    if (node.current) {
      observer.observe(node.current)
    }

    //desconet 
    return () => {
      observer.disconnect()
    }

  }, [])



  return (
    <img
      className="foxImage"
      ref={node}
      src={src}
      alt="Random Fox"
      {...imgProps}
    />
  );
};