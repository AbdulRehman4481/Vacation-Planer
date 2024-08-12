"use client";
import Images from "@/app/constants/Images";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const CustomPrevArrow = ({ onClick }: any) => {
  return (
    <div
      className="absolute hidden  text-white border-1 right-[25px] top-[30%] h-10 sm:flex justify-center items-center w-10 transform -translate-y-1/2 z-10 cursor-pointer hover:bg-[#1CA8CB] rounded-full"
      onClick={onClick}
    >
      <Image
        src={Images.arrow}
        alt="arrow"
        width={24}
        height={24}
        className="-rotate-90"
      />
    </div>
  );
};

const CustomNextArrow = ({ onClick }: any) => {
  return (
    <div
      className="absolute hidden  text-white border-1 right-[25px] top-[55%] sm:flex justify-center items-center rotate-180 h-10 w-10 transform -translate-y-1/2 z-10 cursor-pointer hover:bg-[#1CA8CB] rounded-full"
      onClick={onClick}
    >
      <Image
        src={Images.arrow}
        alt="arrow"
        width={24}
        height={24}
        className="-rotate-90"
      />
    </div>
  );
};

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      offset: 50,
    });
  }, []);

  const handleAfterChange = (currentSlide: number) => {
    setActiveIndex(currentSlide);
    AOS.init();
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    afterChange: handleAfterChange,
    customPaging: (i: number) => (
      <div
        className={`w-1 h-7 rounded-full ${
          i === activeIndex ? "bg-[#1CA8CB]" : "bg-gray-300"
        } transition-colors duration-200`}
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className="absolute flex flex-col justify-center w-full">{dots}</div>
    ),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="hero-container relative">
      <Slider {...settings} className="max-w-screen h-[400px] sm:h-[700px] ">
        <div className="bg-hero-image1 bg-center bg-cover w-full h-[400px] sm:h-[700px]">
          <div className="w-full h-full  sm:ml-[40px] md:ml-[80px] flex flex-col justify-center items-center sm:items-start">
            <span
              className="block text-white text-xl sm:text-2xl font-montez text-center sm:text-start"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Get unforgettable pleasure With us
            </span>
            <span
              className="block text-white text-4xl max-w-2xl sm:text-6xl font-manrope text-center sm:text-start mb-3 sm:my-5 font-bold"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Explore The Beauty of The Whole World
            </span>
            <div
              className="flex flex-col sm:flex-row"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <button className="relative text-white bg-[#1CA8CB] my-3 px-10 py-4 mr-2 flex justify-center items-center rounded-3xl overflow-hidden group">
                <span className="relative z-10 flex items-center text-sm sm:text-sm">
                  Explore World{" "}
                  <Image
                    src={Images.arrow}
                    alt="dsjfhl"
                    width={20}
                    height={20}
                    className=" ml-0 sm:ml-2"
                  />
                </span>
                <div className="absolute inset-0 bg-[#15363e] w-0 group-hover:w-full rounded-3xl transition-all duration-300 ease-in-out"></div>
              </button>
              <button className="relative text-white border-1 my-3 px-10 py-4 mr-2 flex justify-center items-center rounded-3xl overflow-hidden group">
                <span className="relative z-10 flex items-center text-sm sm:text-sm">
                  Our Services
                  <Image
                    src={Images.arrow}
                    alt="dsjfhl"
                    width={20}
                    height={20}
                    className=" ml-0 sm:ml-2"
                  />
                </span>
                <div className="absolute inset-0 bg-[#1CA8CB] w-0 group-hover:w-full rounded-3xl transition-all duration-300 ease-in-out"></div>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-hero-image2 bg-center bg-cover w-full h-[400px] sm:h-[700px]">
          <div className="w-full h-full  sm:ml-[40px] md:ml-[80px] flex flex-col justify-center items-center sm:items-start">
            <span
              className="block text-white text-xl sm:text-2xl font-montez text-center sm:text-start"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Get unforgettable pleasure With us
            </span>
            <span
              className="block text-white text-4xl max-w-2xl sm:text-6xl font-manrope text-center sm:text-start mb-3 sm:my-5 font-bold"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Natural Wonder of the World
            </span>
            <div
              className="flex flex-col sm:flex-row"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <button className="relative text-white bg-[#1CA8CB] my-3 px-10 py-4 mr-2 flex justify-center items-center rounded-3xl overflow-hidden group">
                <span className="relative z-10 flex items-center text-sm sm:text-sm">
                  Explore World{" "}
                  <Image
                    src={Images.arrow}
                    alt="dsjfhl"
                    width={20}
                    height={20}
                    className=" ml-0 sm:ml-2"
                  />
                </span>
                <div className="absolute inset-0 bg-[#15363e] w-0 group-hover:w-full rounded-3xl transition-all duration-300 ease-in-out"></div>
              </button>
              <button className="relative text-white border-1 my-3 px-10 py-4 mr-2 flex justify-center items-center rounded-3xl overflow-hidden group">
                <span className="relative z-10 flex items-center text-sm sm:text-sm">
                  Our Services{" "}
                  <Image
                    src={Images.arrow}
                    alt="dsjfhl"
                    width={20}
                    height={20}
                    className=" ml-0 sm:ml-2"
                  />
                </span>
                <div className="absolute inset-0 bg-[#1CA8CB] w-0 group-hover:w-full rounded-3xl transition-all duration-300 ease-in-out"></div>
              </button>
            </div>
          </div>
        </div>
        <div className="bg-hero-image3 bg-center bg-cover w-full h-[400px] sm:h-[700px]">
          <div className="w-full h-full  sm:ml-[40px] md:ml-[80px] flex flex-col justify-center items-center sm:items-start">
            <span
              className="block text-white text-xl sm:text-2xl font-montez text-center sm:text-start"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Get unforgettable pleasure With us
            </span>
            <span
              className="block text-white text-4xl max-w-2xl sm:text-6xl font-manrope text-center sm:text-start mb-3 sm:my-5 font-bold"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              Lets Make Your Best Trip With Us
            </span>
            <div
              className="flex flex-col sm:flex-row"
              data-aos="fade-up"
              data-aos-duration="3000"
            >
              <button className="relative text-white bg-[#1CA8CB] my-3 px-10 py-4 mr-2 flex justify-center items-center rounded-3xl overflow-hidden group">
                <span className="relative z-10 flex items-center text-sm sm:text-sm">
                  Explore World{" "}
                  <Image
                    src={Images.arrow}
                    alt="dsjfhl"
                    width={20}
                    height={20}
                    className=" ml-0 sm:ml-2"
                  />
                </span>
                <div className="absolute inset-0 bg-[#15363e] w-0 group-hover:w-full rounded-3xl transition-all duration-300 ease-in-out"></div>
              </button>
              <button className="relative text-white border-1 my-3 px-10 py-4 mr-2 flex justify-center items-center rounded-3xl overflow-hidden group">
                <span className="relative z-10 flex items-center text-sm sm:text-sm">
                  Our Services{" "}
                  <Image
                    src={Images.arrow}
                    alt="dsjfhl"
                    width={20}
                    height={20}
                    className=" ml-0 sm:ml-2"
                  />
                </span>
                <div className="absolute inset-0 bg-[#1CA8CB] w-0 group-hover:w-full rounded-3xl transition-all duration-300 ease-in-out"></div>
              </button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
