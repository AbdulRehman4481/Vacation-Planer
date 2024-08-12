"use client";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import Slider from "react-slick";
import image5 from "../../../../public/assets/Images/alec-douglas-2Kexn4xZm1Q-unsplash.jpg";
import image2 from "../../../../public/assets/Images/billy-pasco-F5oj6SYoarc-unsplash.jpg";
import image1 from "../../../../public/assets/Images/gabriel-alenius-USXfF_ONUGo-unsplash.jpg";
import image3 from "../../../../public/assets/Images/geranimo-f0oe9P9Yixs-unsplash.jpg";
import image4 from "../../../../public/assets/Images/trail-5yOnGsKUNGw-unsplash.jpg";

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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    afterChange: (currentSlide: number) => setActiveIndex(currentSlide),
    customPaging: (i: number) => (
      <div
        className={`w-4 h-4 rounded-full mt-10 ${
          i === activeIndex ? "bg-[#1CA8CB]" : "border-1 border-black"
        } transition-colors duration-200`}
      />
    ),
    appendDots: (dots: React.ReactNode) => <div>{dots}</div>,
  };

  return (
    <div className="text-center my-24">
      <h2 className="text-3xl font-bold mb-4 text-[#113D48] font-montez ">
        Wonderful Place For You
      </h2>
      <h1 className="text-4xl font-bold mb-8  text-[#113D48]">
        Tour Categories
      </h1>
      <div className="slider-container p-10">
        <Slider {...settings}>
          {[image1, image2, image3, image4, image5].map((image, index) => (
            <div key={index}>
              <Card className="py-4 m-3 shadow-none">
                <CardBody className="rounded-3xl relative overflow-hidden h-[270px]">
                  <div className="rounded-3xl overflow-hidden w-full h-full">
                    <Image
                      alt="Card background"
                      className="rounded-3xl overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 object-cover object-center"
                      src={image}
                      layout="fill"
                    />
                  </div>
                </CardBody>

                <CardFooter className="pb-0 pt-2 px-4 flex-col items-center">
                  <h3 className="text-lg font-semibold">
                    {
                      [
                        "Hiking",
                        "Cruises",
                        "Wild Life",
                        "Walking",
                        "Air Birds",
                      ][index]
                    }
                  </h3>
                  <p className="">See More</p>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
