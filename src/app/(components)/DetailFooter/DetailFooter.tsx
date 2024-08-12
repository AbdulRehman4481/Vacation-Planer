import Images from "@/app/constants/Images";
import Image from "next/image";
import React from "react";
import { IoSend } from "react-icons/io5";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail, MdOutlineLocationOn } from "react-icons/md";
export default function DetailFooter() {
  return (
    <div className="my-20">
      <div className="flex md:justify-around flex-col md:flex-row mb-12 justify-center items-center">
        <h1 className="text-[#113D48] text-4xl max-w-[440px] font-bold">
          Get Updated The Latest Newsletter
        </h1>
        <div className="flex justify-center items-center">
          <input
            placeholder="Enter Your Email"
            className="border-1 border-[#113D48] max-w-96 py-4 rounded-[30px] px-2 text-base mr-2 outline-none"
          />
          <button className="relative text-white bg-[#1CA8CB] my-3 px-10 py-4 mr-2 flex justify-center items-center rounded-3xl overflow-hidden group">
            <span className="relative z-10 flex flex-row items-center text-sm sm:text-sm">
              Subscribe Now
              <IoSend className="ml-2 -rotate-12 mb-1" />
            </span>
            <div className="absolute inset-0 bg-[#15363e] w-0 group-hover:w-full rounded-3xl transition-all duration-300 cursor-pointer ease-in-out"></div>
          </button>
        </div>
      </div>
      <hr className="mx-14" />
      <div className="flex justify-around my-10" >
        <div>
          <div className="flex">
            <Image
              src={Images.worldLogo}
              alt="World"
              width={100}
              height={100}
            />
            <span className="text-[#113D48] font-bold text-2xl">
              {" "}
              Vacation Planer
            </span>
          </div>
          <p className="max-w-80 text-[#666666] my-8">
            Rapidiously myocardinate cross-platform intellectual capital model.
            Appropriately create interactive infrastructures
          </p>
          <div className="flex gap-2">
            <FaFacebookF
              size={30}
              className="bg-[#1CA8CB] p-2 bg-opacity-25 text-[#1CA8CB] hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer"
            />
            <FaWhatsapp
              size={30}
              className="bg-[#1CA8CB] p-2 bg-opacity-25 text-[#1CA8CB] hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer "
            />
            <FaLinkedinIn
              size={30}
              className="bg-[#1CA8CB] p-2 bg-opacity-25 text-[#1CA8CB] hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer"
            />
            <FaXTwitter
              size={30}
              className="bg-[#1CA8CB] p-2 bg-opacity-25 text-[#1CA8CB] hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer"
            />
            <FaInstagram
              size={30}
              className="bg-[#1CA8CB] p-2 bg-opacity-25 text-[#1CA8CB] hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl text-[#15363e]">Quick Link</h2>
          <span className="text-[#666666] hover:text-[#1CA8CB] text-base   transition-all duration-300 cursor-pointer">
            <FaChevronRight className="inline" size={15} />
            Home
          </span>
          <span className="text-[#666666] hover:text-[#1CA8CB] text-base  transition-all duration-300 cursor-pointer">
            <FaChevronRight className="inline" size={15} />
            About Us
          </span>
          <span className="text-[#666666] hover:text-[#1CA8CB] text-base  transition-all duration-300 cursor-pointer">
            <FaChevronRight className="inline" size={15} />
            Services
          </span>
          <span className="text-[#666666] hover:text-[#1CA8CB] text-base  transition-all duration-300 cursor-pointer">
            <FaChevronRight className="inline" size={15} />
            Tour Guide
          </span>
          <span className="text-[#666666] hover:text-[#1CA8CB] text-base  transition-all duration-300 cursor-pointer">
            <FaChevronRight className="inline" size={15} />
            Contact Us
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl text-[#15363e]">Get In Touch</h2>
          <div className="flex gap-2">
            <LuPhoneCall
              size={40}
              className="bg-[#1CA8CB] p-2 bg-opacity-25 text-[#1CA8CB] hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer"
            />
            <div>
              <h1 className="  hover:text-[#1CA8CB] text-[#666666] hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer">
                03038458348
              </h1>
              <h1 className="  hover:text-[#1CA8CB] text-[#666666] hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer">
                03038468348
              </h1>
            </div>
          </div>
          <div className="flex gap-2">
            <MdOutlineEmail
              size={40}
              className="bg-[#1CA8CB] p-2 bg-opacity-25 text-[#1CA8CB] hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer"
            />
            <div>
              <h1 className="  hover:text-[#1CA8CB] text-[#666666] hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer">
                abdulRehmanmughal4481@gmail.com
              </h1>
              <h1 className="  hover:text-[#1CA8CB] text-[#666666] hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer">
                support24@tourm.com
              </h1>
            </div>
          </div>
          <div className="flex gap-2">
            <MdOutlineLocationOn
              size={40}
              className="bg-[#1CA8CB] p-2 bg-opacity-25 text-[#1CA8CB] hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer"
            />

            <h1 className="  hover:text-[#1CA8CB] text-[#666666] hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer">
              789 Inner Lane, Holy park, <br /> California, USA
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-xl text-[#15363e]">Instagram Post</h2>
          <div className="">
            <div className="flex gap-2">
              <div className="relative group cursor-pointer w-[100px] h-[100px]">
                <Image
                  src={Images.gallery1}
                  alt="djas"
                  width={100}
                  height={100}
                  className="rounded-lg z-10 transition-transform duration-300 ease-in-out transform mb-3"
                />
                <div className="absolute inset-0 z-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-4xl">
                    <FaInstagram />
                  </span>
                </div>
                <div className="absolute inset-0 z-20 flex justify-center items-center  mb-[7px]">
                  <div className="bg-[#113D48] group-hover:bg-opacity-75  rounded-full w-0 h-0 group-hover:w-full group-hover:h-full group-hover:rounded-lg  transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100"></div>
                </div>
              </div>
              <div className="relative group cursor-pointer w-[100px] h-[100px]">
                <Image
                  src={Images.gallery1}
                  alt="djas"
                  width={100}
                  height={100}
                  className="rounded-lg z-10 transition-transform duration-300 ease-in-out transform mb-3"
                />
                <div className="absolute inset-0 z-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-4xl">
                    <FaInstagram />
                  </span>
                </div>
                <div className="absolute inset-0 z-20 flex justify-center items-center mb-[7px]">
                  <div className="bg-[#113D48] group-hover:bg-opacity-75  rounded-full w-0 h-0 group-hover:w-full group-hover:h-full group-hover:rounded-lg  transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100"></div>
                </div>
              </div>
              <div className="relative group cursor-pointer w-[100px] h-[100px]">
                <Image
                  src={Images.gallery1}
                  alt="djas"
                  width={100}
                  height={100}
                  className="rounded-lg z-10 transition-transform duration-300 ease-in-out transform mb-3"
                />
                <div className="absolute inset-0 z-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-4xl">
                    <FaInstagram />
                  </span>
                </div>
                <div className="absolute inset-0 z-20 flex justify-center items-center mb-[7px]">
                  <div className="bg-[#113D48] group-hover:bg-opacity-75  rounded-full w-0 h-0 group-hover:w-full group-hover:h-full group-hover:rounded-lg  transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100"></div>
                </div>
              </div>
            </div>
            <div className="flex gap-2 ">
              <div className="relative group cursor-pointer w-[100px] h-[100px]">
                <Image
                  src={Images.gallery1}
                  alt="djas"
                  width={100}
                  height={100}
                  className="rounded-lg z-10 transition-transform duration-300 ease-in-out transform mb-3"
                />
                <div className="absolute inset-0 z-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-4xl">
                    <FaInstagram />
                  </span>
                </div>
                <div className="absolute inset-0 z-20 flex justify-center items-center mb-[7px]">
                  <div className="bg-[#113D48] group-hover:bg-opacity-75  rounded-full w-0 h-0 group-hover:w-full group-hover:h-full group-hover:rounded-lg  transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100"></div>
                </div>
              </div>
              <div className="relative group cursor-pointer w-[100px] h-[100px]">
                <Image
                  src={Images.gallery1}
                  alt="djas"
                  width={100}
                  height={100}
                  className="rounded-lg z-10 transition-transform duration-300 ease-in-out transform mb-3"
                />
                <div className="absolute inset-0 z-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-4xl">
                    <FaInstagram />
                  </span>
                </div>
                <div className="absolute inset-0 z-20 flex justify-center items-center mb-[7px]">
                  <div className="bg-[#113D48] group-hover:bg-opacity-75  rounded-full w-0 h-0 group-hover:w-full group-hover:h-full group-hover:rounded-lg  transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100"></div>
                </div>
              </div>
              <div className="relative group cursor-pointer w-[100px] h-[100px]">
                <Image
                  src={Images.gallery1}
                  alt="djas"
                  width={100}
                  height={100}
                  className="rounded-lg z-10 transition-transform duration-300 ease-in-out transform mb-3"
                />
                <div className="absolute inset-0 z-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <span className="text-white text-4xl">
                    <FaInstagram />
                  </span>
                </div>
                <div className="absolute inset-0 z-20 flex justify-center items-center mb-[7px]">
                  <div className="bg-[#113D48] group-hover:bg-opacity-75  rounded-full w-0 h-0 group-hover:w-full group-hover:h-full group-hover:rounded-lg  transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
