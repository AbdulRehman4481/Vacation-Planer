import { Image } from "@nextui-org/react";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import NextImage from "next/image";

const MyImage = ({
  src,
  alt,
  className,
  isZoomed
}: {
  src: string;
  alt: string;
  className: string;
  isZoomed:boolean
}) => (
  
    <Image
     alt={alt}
     className={className}
     src={src}
     fallbackSrc={src}
     isZoomed={isZoomed}
     loading="lazy"
    />
);

export default MyImage;
