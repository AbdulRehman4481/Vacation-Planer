"use client";
import Slider from "react-slick";

import Images from "@/app/constants/Images";
import Image from "next/image";

const brand = [
  {
    image: Images.brand1,
  },
  {
    image: Images.brand2,
  },
  {
    image: Images.brand3,
  },
  {
    image: Images.brand1,
  },
  {
    image: Images.brand2,
  },
  {
    image: Images.brand3,
  },
];

export default function ElementsSection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1181,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10">

    <Slider
      {...settings}
      className="flex justify-center items-center max-w-full h-full rounded-3xl"
      >
      {brand.map((item, index) => (
          <div
          key={index}
          className="m-2 cursor-pointer transform transition-transform duration-500 hover:-translate-y-5"
          >
          <Image
            src={item.image}
            alt={`brand-${index}`}
            width={150}
            height={150}
            className="rounded-full"
            />
        </div>
      ))}
    </Slider>
      </div>
  );
}
