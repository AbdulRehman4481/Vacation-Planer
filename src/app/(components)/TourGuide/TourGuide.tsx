"use client";
import React, { useState } from "react";
import Slider from "react-slick";

import Images from "@/app/constants/Images";
import { Card, CardBody, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function TourGuide() {
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
        breakpoint: 1156,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 862,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 593,
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
    <div className="text-center my-24 bg-primary_light ">
      <h2 className="text-3xl font-bold mb-4 text-secondary font-montez ">
        Meet with Guide{" "}
      </h2>
      <h1 className="text-4xl font-bold mb-8  text-secondary">Tour Guide</h1>
      <div className="slider-container ">
        <Slider {...settings} className="flex justify-center items-center">
          {[
            Images.team1,
            Images.team2,
            Images.team3,
            Images.team4,
            Images.team5,
          ].map((image, index) => (
            <div key={index}>
              <Card className="m-3 p-4 relative rounded-3xl bg-transparent  items-center shadow-none h-[400px] sm:max-w-72 w-full   group">
                <CardBody className="absolute border-2 border-white p-2 rounded-full h-52 w-52 sm:h-44 sm:w-44  overflow-hidden ">
                  <Image
                    alt="Card background"
                    className=" rounded-full overflow-hidden transition-transform duration-500 ease-in-out transform hover:scale-105 object-cover object-center"
                    src={image}
                    layout="fill"
                  />
                </CardBody>

                <CardFooter className="p-4 flex-col  items-center w-full h-56 mt-32 rounded-3xl bg-white  ">
                  <div className="bg-primary_light flex flex-col justify-center group-hover:bg-primary rounded-3xl mt-10 w-full h-36">
                    <h2 className="text-lg font-manrope font-bold group-hover:text-white">
                      Abdul Rehman
                    </h2>
                    <span className="group-hover:text-white">
                      Tourist Guide
                    </span>

                    <div className="flex justify-center">
                      <FaFacebookF
                        size={33}
                        className="border-1 text-primary group-hover:text-white border-primary group-hover:border-white rounded-full p-2 "
                      />{" "}
                      <FaXTwitter
                        size={33}
                        className="border-1 text-primary group-hover:text-white border-primary group-hover:border-white rounded-full p-2"
                      />
                      <FaInstagram
                        size={33}
                        className="border-1 text-primary group-hover:text-white border-primary group-hover:border-white rounded-full p-2"
                      />
                      <BsYoutube
                        size={33}
                        className="border-1 text-primary group-hover:text-white border-primary group-hover:border-white rounded-full p-2"
                      />
                    </div>
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
