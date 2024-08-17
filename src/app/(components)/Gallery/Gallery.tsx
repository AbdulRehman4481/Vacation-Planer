"use client";

import Images from "@/app/constants/Images";
import { PiMagnifyingGlassPlusLight } from "react-icons/pi";
import MyImage from "../Image/Image";

export default function Gallery() {
  return (
    <div className="text-center my-24">
      <h2 className="text-3xl font-bold mb-4 text-secondary font-montez ">
        Make Your Tour More Pleasure{" "}
      </h2>
      <h1 className="text-4xl font-bold mb-8  text-secondary">
        Recent Gallery
      </h1>
      <div className="flex justify-center items-center gap-3">
        <div className="relative group cursor-pointer">
          <MyImage
            src={Images.gallery1}
            alt="GalleryImage"
            isZoomed={true}
            className="  w-44 h-44 transition-transform duration-300 ease-in-out transform group-hover:scale-110 "
          />
          <div className="absolute inset-0 flex justify-center items-center  opacity-0 group-hover:z-50 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className="text-white text-4xl">
              <PiMagnifyingGlassPlusLight />
            </span>
          </div>
        </div>
        <div className="">
          <div className="relative group cursor-pointer">
            <MyImage
              isZoomed={true}
              src={Images.gallery2}
              alt="GalleryImage"
              className=" w-52 h-[150px]   group-hover:scale-110 mb-3"
            />
            <div className="absolute inset-0 flex justify-center items-center  opacity-0 group-hover:opacity-100 group-hover:z-50 transition-opacity duration-500 ease-in-out">
              <span className="text-white text-4xl">
                <PiMagnifyingGlassPlusLight />
              </span>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <MyImage
              src={Images.gallery3}
              alt="GalleryImage"
              isZoomed={true}
              className=" w-[200px] h-[150px] group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center  opacity-0 group-hover:z-50 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <span className="text-white text-4xl">
                <PiMagnifyingGlassPlusLight />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative group cursor-pointer">
            <MyImage
              src={Images.gallery4}
              alt="GalleryImage"
              isZoomed={true}
              className=" w-[200px] h-[200px] group-hover:scale-110"
            />
            <div className="absolute inset-0 flex justify-center items-center  opacity-0 group-hover:z-50 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <span className="text-white text-4xl">
                <PiMagnifyingGlassPlusLight />
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="relative group cursor-pointer">
            <MyImage
              src={Images.gallery5}
              alt="GalleryImage"
              isZoomed={true}
              className=" w-[200px] h-[200px]  group-hover:scale-110 mb-3"
            />
            <div className="absolute inset-0 flex justify-center items-center  opacity-0 group-hover:z-50 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
              <span className="text-white text-4xl">
                <PiMagnifyingGlassPlusLight />
              </span>
            </div>
          </div>
          <div className="relative group cursor-pointer">
            <MyImage
              src={Images.gallery6}
              alt="GalleryImage"
              isZoomed={true}
              className=" w-[200px] h-[200px] group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 flex justify-center items-center group-hover:z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className="text-white text-4xl">
              <PiMagnifyingGlassPlusLight />
            </span>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <MyImage
            src={Images.gallery7}
            alt="GalleryImage"
            isZoomed={true}
            className=" w-[200px] h-[200px] group-hover:scale-110"
          />
          <div className="absolute  inset-0 flex justify-center group-hover:z-50 items-center  opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
            <span className="text-white text-4xl">
              <PiMagnifyingGlassPlusLight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
