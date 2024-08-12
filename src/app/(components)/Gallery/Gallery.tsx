"use client";

import Images from "@/app/constants/Images";
import Image from "next/image";
import { PiMagnifyingGlassPlusLight } from "react-icons/pi";

export default function Gallery() {
  return (
    <div className="text-center my-24">
      <h2 className="text-3xl font-bold mb-4 text-[#113D48] font-montez ">
      Make Your Tour More Pleasure      </h2>
      <h1 className="text-4xl font-bold mb-8  text-[#113D48]">
        Recent Gallery

      </h1>
      <div className="flex justify-center items-center gap-3">
        <div className="relative group cursor-pointer">
          <Image
            src={Images.gallery1}
            alt="djas"
            width={176}
            height={176}
            className=" rounded-3xl transition-transform duration-300 ease-in-out transform group-hover:scale-110 "
          />
          <div className="absolute inset-0 flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className="text-white text-4xl">
              <PiMagnifyingGlassPlusLight />
            </span>
          </div>
        </div>
        <div className="">
          <div className="relative group cursor-pointer">
            <Image
              src={Images.gallery2}
              alt="djas"
              width={200}
              height={100}
              className=" rounded-3xl transition-transform duration-300 ease-in-out transform group-hover:scale-110 mb-3"
            />
            <div className="absolute inset-0 flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <span className="text-white text-4xl">
                <PiMagnifyingGlassPlusLight />
              </span>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <Image
              src={Images.gallery3}
              alt="djas"
              width={200}
              height={100}
              className=" rounded-3xl transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <span className="text-white text-4xl">
                <PiMagnifyingGlassPlusLight />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative group cursor-pointer">
            <Image
              src={Images.gallery4}
              alt="djas"
              width={200}
              height={200}
              className=" rounded-3xl transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <span className="text-white text-4xl">
                <PiMagnifyingGlassPlusLight />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative group cursor-pointer">
            <Image
              src={Images.gallery5}
              alt="djas"
              width={200}
              height={200}
              className=" rounded-3xl transition-transform duration-300 ease-in-out transform group-hover:scale-110 mb-3"
            />
            <div className="absolute inset-0 flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <span className="text-white text-4xl">
                <PiMagnifyingGlassPlusLight />
              </span>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <Image
              src={Images.gallery6}
              alt="djas"
              width={200}
              height={200}
              className=" rounded-3xl transition-transform duration-300 ease-in-out transform group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className="text-white text-4xl">
              <PiMagnifyingGlassPlusLight />
            </span>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <Image
            src={Images.gallery7}
            alt="djas"
            width={200}
            height={200}
            className="rounded-3xl transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
          <div className="absolute inset-0 flex justify-center items-center  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className="text-white text-4xl">
              <PiMagnifyingGlassPlusLight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
