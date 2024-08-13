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
        <h1 className="text-secondary text-4xl max-w-[440px] text-center md:text-start font-bold">
          Get Updated The Latest Newsletter
        </h1>
        <div className="flex mt-2 sm:mt-0 flex-col sm:flex-row justify-center items-center p-2">
          <input
            placeholder="Enter Your Email"
            className="border-1 border-secondary w-80 py-4 rounded-[30px] px-2 text-base sm:mr-2 outline-none"
          />
          <button className="relative w-full sm:w-fit text-white bg-primary my-3 px-10 py-4 mr-2 flex justify-center items-center rounded-3xl overflow-hidden group">
            <span className="relative z-10 flex flex-row items-center text-sm sm:text-sm">
              Subscribe Now
              <IoSend className="ml-2 -rotate-12 mb-1" />
            </span>
            <div className="absolute inset-0 bg-secondary w-0 group-hover:w-full rounded-3xl transition-all duration-300 cursor-pointer ease-in-out"></div>
          </button>
        </div>
      </div>
      <hr className="mx-14" />
      <div className="flex flex-col sm:flex-row mx-5 sm:mx-0 justify-around my-10">
        <div className="lg:flex ">
          <div className="">
            <div className="flex">
              <Image
                src={Images.worldLogo}
                alt="World"
                width={100}
                height={100}
                
              />
              <span className="text-secondary font-bold text-2xl">
                {" "}
                Vacation Planer
              </span>
            </div>
            <p className="sm:max-w-80 text-text_gray my-8">
              Rapidiously myocardinate cross-platform intellectual capital
              model. Appropriately create interactive infrastructures
            </p>
            <div className="flex gap-2">
              <FaFacebookF
                size={30}
                className="bg-primary p-2 bg-opacity-25 text-primary hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer"
              />
              <FaWhatsapp
                size={30}
                className="bg-primary p-2 bg-opacity-25 text-primary hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer "
              />
              <FaLinkedinIn
                size={30}
                className="bg-primary p-2 bg-opacity-25 text-primary hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer"
              />
              <FaXTwitter
                size={30}
                className="bg-primary p-2 bg-opacity-25 text-primary hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer"
              />
              <FaInstagram
                size={30}
                className="bg-primary p-2 bg-opacity-25 text-primary hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mx-2 my-5 sm:my-0">
            <h2 className="text-xl text-secondary">Quick Link</h2>
            <span className="text-text_gray hover:text-primary font-bold text-[13px]   transition-all duration-300 cursor-pointer">
              <FaChevronRight className="inline" size={15} />
              Home
            </span>
            <span className="text-text_gray hover:text-primary text-base font-bold text-[13px]  transition-all duration-300 cursor-pointer">
              <FaChevronRight className="inline" size={15} />
              About Us
            </span>
            <span className="text-text_gray hover:text-primary text-base font-bold text-[13px]  transition-all duration-300 cursor-pointer">
              <FaChevronRight className="inline" size={15} />
              Services
            </span>
            <span className="text-text_gray hover:text-primary text-base font-bold text-[13px]  transition-all duration-300 cursor-pointer">
              <FaChevronRight className="inline" size={15} />
              Tour Guide
            </span>
            <span className="text-text_gray hover:text-primary text-base font-bold text-[13px]  transition-all duration-300 cursor-pointer">
              <FaChevronRight className="inline" size={15} />
              Contact Us
            </span>
          </div>
        </div>
        <div className="my-5 sm:my-0 lg:flex ">
          <div className="flex flex-col gap-2 mx-3">
            <h2 className="text-xl text-secondary">Get In Touch</h2>
            <div className="flex gap-2">
              <LuPhoneCall
                size={40}
                className="bg-primary p-2 bg-opacity-25 text-primary hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer"
              />
              <div>
                <h1 className="  hover:text-primary text-text_gray font-bold text-[13px] hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer">
                  03038458348
                </h1>
                <h1 className="  hover:text-primary text-text_gray font-bold text-[13px] hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer">
                  03038468348
                </h1>
              </div>
            </div>
            <div className="flex gap-2">
              <MdOutlineEmail
                size={40}
                className="bg-primary p-2 bg-opacity-25 text-primary hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer"
              />
              <div>
                <h1 className="  hover:text-primary text-text_gray font-bold text-[13px] hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer">
                  abdulRehmanmughal4481@gmail.com
                </h1>
                <h1 className="  hover:text-primary text-text_gray font-bold text-[13px] hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer">
                  support24@tourm.com
                </h1>
              </div>
            </div>
            <div className="flex gap-2">
              <MdOutlineLocationOn
                size={40}
                className="bg-primary p-2 bg-opacity-25 text-primary hover:text-white hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer"
              />

              <h1 className="  hover:text-primary text-text_gray font-bold text-[13px] hover:bg-opacity-100 rounded-full transition-all duration-300 cursor-pointer">
                789 Inner Lane, Holy park, <br /> California, USA
              </h1>
            </div>
          </div>
          <div className="flex flex-col gap-2 my-5 sm:my-0">
            <h2 className="text-xl text-secondary">Instagram Post</h2>
            <div className="">
              <div className="flex gap-4 sm:gap-2 mb-4">
                <div className="relative group cursor-pointer w-[100px] h-[100px]">
                  <Image
                    src={Images.gallery1}
                    alt="djas"
                    layout="fill"
                    
                    className="rounded-lg max-w-[150px] sm:max-w-[100px] z-10 transition-transform duration-300 ease-in-out transform mb-3"
                  />
                  <div className="absolute inset-0 z-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <span className="text-white text-4xl">
                      <FaInstagram />
                    </span>
                  </div>
                  <div className="absolute inset-0 z-20 flex justify-center items-center  ">
                    <div className="bg-secondary group-hover:bg-opacity-75  rounded-full w-0 h-0 group-hover:w-full group-hover:h-full group-hover:rounded-lg  transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100"></div>
                  </div>
                </div>
                <div className="relative group cursor-pointer w-[100px] h-[100px]">
                  <Image
                    src={Images.gallery1}
                    alt="djas"
                    layout="fill"
                    
                    className="rounded-lg max-w-[150px] sm:max-w-[100px] z-10 transition-transform duration-300 ease-in-out transform mb-3"
                  />
                  <div className="absolute inset-0 z-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <span className="text-white text-4xl">
                      <FaInstagram />
                    </span>
                  </div>
                  <div className="absolute inset-0 z-20 flex justify-center items-center m">
                    <div className="bg-secondary group-hover:bg-opacity-75  rounded-full w-0 h-0 group-hover:w-full group-hover:h-full group-hover:rounded-lg  transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100"></div>
                  </div>
                </div>
                <div className="relative group cursor-pointer w-[100px] h-[100px]">
                  <Image
                    src={Images.gallery1}
                    alt="djas"
                    layout="fill"
                    
                    className="rounded-lg max-w-[150px] sm:max-w-[100px] z-10 transition-transform duration-300 ease-in-out transform mb-3"
                  />
                  <div className="absolute inset-0 z-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <span className="text-white text-4xl">
                      <FaInstagram />
                    </span>
                  </div>
                  <div className="absolute inset-0 z-20 flex justify-center items-center m">
                    <div className="bg-secondary group-hover:bg-opacity-75  rounded-full w-0 h-0 group-hover:w-full group-hover:h-full group-hover:rounded-lg  transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100"></div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-2 ">
                <div className="relative group cursor-pointer w-[100px] h-[100px]">
                  <Image
                    src={Images.gallery1}
                    alt="djas"
                    layout="fill"
                    
                    className="rounded-lg max-w-[150px] sm:max-w-[100px] z-10 transition-transform duration-300 ease-in-out transform mb-3"
                  />
                  <div className="absolute inset-0 z-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <span className="text-white text-4xl">
                      <FaInstagram />
                    </span>
                  </div>
                  <div className="absolute inset-0 z-20 flex justify-center items-center m">
                    <div className="bg-secondary group-hover:bg-opacity-75  rounded-full w-0 h-0 group-hover:w-full group-hover:h-full group-hover:rounded-lg  transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100"></div>
                  </div>
                </div>
                <div className="relative group cursor-pointer w-[100px] h-[100px]">
                  <Image
                    src={Images.gallery1}
                    alt="djas"
                    layout="fill"
                    
                    className="rounded-lg max-w-[150px] sm:max-w-[100px] z-10 transition-transform duration-300 ease-in-out transform mb-3"
                  /> 
                  <div className="absolute inset-0 z-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <span className="text-white text-4xl">
                      <FaInstagram />
                    </span>
                  </div>
                  <div className="absolute inset-0 z-20 flex justify-center items-center m">
                    <div className="bg-secondary group-hover:bg-opacity-75  rounded-full w-0 h-0 group-hover:w-full group-hover:h-full group-hover:rounded-lg  transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100"></div>
                  </div>
                </div>
                <div className="relative group cursor-pointer w-[100px] h-[100px]">
                  <Image
                    src={Images.gallery1}
                    alt="djas"
                    layout="fill"
                    
                    className="rounded-lg max-w-[150px] sm:max-w-[100px] z-10 transition-transform duration-300 ease-in-out transform mb-3"
                  />
                  <div className="absolute inset-0 z-30 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                    <span className="text-white text-4xl">
                      <FaInstagram />
                    </span>
                  </div>
                  <div className="absolute inset-0 z-20 flex justify-center items-center m">
                    <div className="bg-secondary group-hover:bg-opacity-75  rounded-full w-0 h-0 group-hover:w-full group-hover:h-full group-hover:rounded-lg  transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
