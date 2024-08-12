"use client";
import React, { useState } from "react";
import Slider from "react-slick";

import Images from "@/app/constants/Images";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const testimonials = [
  {
    image: Images.team1,
    name: "Sadjk",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto vel laudantium cumque id, reprehenderit doloremque eveniet alias mollitia exercitationem repellendus veniam.",
  },
  {
    image: Images.team2,
    name: "Name2",

    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto vel laudantium cumque id, reprehenderit doloremque eveniet alias mollitia exercitationem repellendus veniam.",
  },
  {
    image: Images.team3,
    name: "Name3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto vel laudantium cumque id, reprehenderit doloremque eveniet alias mollitia exercitationem repellendus veniam.",
  },
  {
    image: Images.team4,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto vel laudantium cumque id, reprehenderit doloremque eveniet alias mollitia exercitationem repellendus veniam.",
    name: "Name4",
  },
  {
    image: Images.team5,
    name: "Name5",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto vel laudantium cumque id, reprehenderit doloremque eveniet alias mollitia exercitationem repellendus veniam.",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1181,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
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
    <div className="text-center my-24 mx-4">
      <h2 className="text-3xl font-bold mb-4 text-[#113D48] font-montez">
        Testimonial
      </h2>
      <h1 className="text-4xl font-bold mb-8 text-[#113D48]">
        What Clients Say About Us
      </h1>
      <div className="relative h-fit">
        <Slider
          {...settings}
          className="flex justify-center items-center max-w-full h-full"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative transition-transform duration-300 ${
                index === activeIndex ? "scale-105" : "scale-95"
              } max-w-full`}
            >
              <div className="bg-[#E9F6F9] rounded-3xl p-5 sm:p-10 m-2">
                <div className="flex justify-between flex-col sm:flex-row">
                  <div className="flex items-center ">
                    <Image
                      src={testimonial.image}
                      alt={`testimonial-${index}`}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="text-start ml-2">
                      <h1 className="text-[#113D48] font-bold">
                        {testimonial.name}
                      </h1>
                      <h3>Traveler</h3>
                    </div>
                  </div>
                  <div className="flex">
                    <FaStar color="orange" />
                    <FaStar color="orange" />
                    <FaStar color="orange" />
                    <FaStar color="orange" />
                    <FaStar color="orange" />
                  </div>
                </div>
                <div>
                  <p className="text-start text-base sm:text-xl my-2 font-sans font-normal">
                    <q>{testimonial.description}</q>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
