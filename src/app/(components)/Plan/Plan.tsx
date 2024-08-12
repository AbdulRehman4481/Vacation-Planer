import Image from "next/image";

import Images from "@/app/constants/Images";
import imageP1 from "../../../../public/assets/Images/destination_1_1.jpg";
import imageP2 from "../../../../public/assets/Images/destination_1_2.jpg";
import imageP3 from "../../../../public/assets/Images/destination_1_3.jpg";

export default function Plan() {
  return (
    <div className="h-fit items-start justify-center flex flex-col-reverse lg:flex-row">
      <div className="flex flex-row justify-center items-center w-full lg:w-fit">
        <div className="">
          <Image
            src={imageP3}
            alt="image1"
            className="rounded-t-full rounded-bl-full h-full w-80"
          />
        </div>
        <div className="sm:ml-28">
          <Image
            src={imageP2}
            alt="image2"
            className="rounded-t-full rounded-br-full w-56 h-56 "
          />
          <Image
            src={imageP1}
            alt="image3"
            className="rounded-tl-full rounded-b-full w-56 max-h-56 sm:mt-28"
          />
        </div>
      </div>
      <div className="ml-10">
        <h2 className="text-3xl font-bold mb-4 text-[#113D48] font-montez">
          Let’s Go Together
        </h2>
        <h1 className="text-5xl font-bold mb-8  text-[#113D48] lg:max-w-80">
          Plan Your Trip With us
        </h1>
        <p className="lg:max-w-[420px] text-[#6e7070] text-lg my-4">
          There are many variations of passages of available but the majority
          have suffered alteration in some form, by injected hum randomised
          words which don’t look even slightly.
        </p>
        <div className="flex flex-row items-center gap-4 mb-4">
          <div className="flex justify-center items-center  h-20 w-20 cursor-pointer rounded-full bg-[#1ca8cb]">
            <Image src={Images.map}
              alt="sakhd"
              width={33}
              height={33}
              className="  ml-0 sm:ml-2  text-white "
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#113D48] ">
              Exclusive Trip
            </h2>
            <p className="text-[#6e7070] max-w-80">
              There are many variations of passages of available but the
              majority.
            </p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <div className="flex justify-center items-center  h-20 w-20 cursor-pointer rounded-full bg-[#1ca8cb]">
          <Image src={Images.guide}
              alt="sakhd"
              width={33}
              height={33}
              className="  ml-0 sm:ml-2  text-white "
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-[#113D48] ">
              Professional guide
            </h2>
            <p className="text-[#6e7070] max-w-80">
              There are many variations of passages of available but the
              majority.
            </p>
          </div>
        </div>
        <button className="relative text-white border-1 my-3 bg-[#113d48] px-10 py-4 mr-2 flex justify-center items-center rounded-full overflow-hidden group">
                <span className="relative z-10 flex items-center text-sm sm:text-sm">
                  Learn More <Image src={Images.arrow} alt="dsjfhl" width={20} height={20} className=" ml-0 sm:ml-2" />
                </span>
                <div className="absolute inset-0 bg-[#1CA8CB] w-0 group-hover:w-full rounded-3xl transition-all duration-300 ease-in-out"></div>
              </button>
        
      </div>
    </div>
  );
}
