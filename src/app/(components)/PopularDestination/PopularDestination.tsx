"use client";
import React, { useState } from "react";
import Slider from "react-slick";

import Images from "@/app/constants/Images";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { BsClock } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

export default function PopularDestination() {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  return (
    <div className="text-center my-24">
      <h2 className="text-3xl font-bold mb-4 text-secondary font-montez ">
        Best Recommended Places
      </h2>
      <h1 className="text-4xl font-bold mb-8  text-secondary">
        Popular Destination we offer for all
      </h1>
      <p className="  text-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="slider-container p-10">
        <Slider {...settings}>
          {[
            Images.image1,
            Images.image2,
            Images.image3,
            Images.image4,
            Images.image5,
          ].map((image, index) => (
            <div key={index}>
              <Card className=" m-3 rounded-3xl shadow-none border-1 transition-all duration-300 hover:m-2 hover:shadow-lg ">
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

                <CardFooter className="pb-0 pt-2 px-4 flex-col items-start">
                  <h2 className="text-lg font-manrope font-bold">
                    Langtang Valley
                  </h2>
                  <span className="text-text_gray">
                    <FaLocationDot className="inline " /> Bhutan,Pokhara
                  </span>
                  <span className="text-2xl font-bold">
                    $250
                    <span className="text-text_gray text-lg font-medium">
                      /Person
                    </span>
                  </span>
                  <div className="flex justify-between w-full items-center">
                    <span className="flex justify-center items-center">
                      <BsClock className="inline" />6 Days
                    </span>
                    <button className="relative text-secondary border-1 my-3 px-5 py-4 mr-2 hover:text-white flex justify-center items-center rounded-3xl overflow-hidden group">
                      <span className="relative z-10 flex items-center text-sm sm:text-sm ">
                        Book Now{" "}
                        <Image
                          src={Images.arrow}
                          width={24}
                          height={24}
                          alt="hlkj"
                        />
                      </span>
                      <div className="absolute inset-0 bg-primary w-0 group-hover:w-full rounded-3xl transition-all duration-300 ease-in-out"></div>
                    </button>
                  </div>
                </CardFooter>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
