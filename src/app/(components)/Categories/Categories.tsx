"use client";
import Images from "@/app/constants/Images";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React, { useState } from "react";
import Slider from "react-slick";
import MyImage from "../Image/Image";

export default function Categories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    afterChange: (currentSlide: number) => setActiveIndex(currentSlide),
    customPaging: (i: number) => (
      <div
        className={`w-4 h-4 rounded-full mt-10 ${
          i === activeIndex ? "bg-primary" : "border-1 border-black"
        } transition-colors duration-200`}
      />
    ),
    appendDots: (dots: React.ReactNode) => <div>{dots}</div>,
  };

  const categoryData = [
    { image: Images.imageC1, heading: "Hiking" },
    { image: Images.imageC2, heading: "Cruises" },
    { image: Images.imageC3, heading: "Wild Life" },
    { image: Images.imageC4, heading: "Walking" },
    { image: Images.imageC5, heading: "Air Birds" },
  ];

  return (
    <div className="text-center my-24">
      <h2 className="text-3xl font-bold mb-4 text-secondary font-montez ">
        Wonderful Place For You
      </h2>
      <h1 className="text-4xl font-bold mb-8  text-secondary">
        Tour Categories
      </h1>
      <div className="slider-container p-10">
        <Slider {...settings}>
          {categoryData.map((image, index) => (
            <div key={index}>
              <Card className="py-4 m-3 shadow-none ">
                <CardBody className="rounded-3xl  relative overflow-hidden h-[270px]">
                  <div className="rounded-3xl cursor-pointer overflow-hidden w-full h-full">
                    <MyImage
                      alt="Card background"
                      className=" aspect-square overflow-hidden  object-cover object-center"
                      src={image.image}
                      isZoomed={true}
                    />
                  </div>
                </CardBody>

                <CardFooter className="pb-0 pt-2 px-4 flex-col items-center">
                  <h3 className="text-lg font-semibold cursor-pointer">
                    {image.heading}
                  </h3>
                  <p className="cursor-pointer">See More</p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
