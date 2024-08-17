import { Swiper, SwiperSlide } from "swiper/react";
const images = [
  {
    src: Images.imageD1,
    country: "Maldive",
  },
  {
    src: Images.imageD2,
    country: "Belgium",
  },
  {
    src: Images.imageD3,
    country: "Island",
  },
  {
    src: Images.imageD4,
    country: "Island",
  },
  {
    src: Images.imageD5,
    country: "Thailand",
  },
  {
    src: Images.imageD1,
    country: "Australia",
  },
  {
    src: Images.imageD2,
    country: "Vinland",
  },
  {
    src: Images.imageD3,
    country: "Pakistan",
  },
];

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import Image from "next/image";
import { HiArrowSmUp } from "react-icons/hi";
import Images from "@/app/constants/Images";

function Destination() {
  return (
    <div className="destination-container m-5">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 font-montez">Top Destination</h2>
        <h1 className="text-4xl font-bold mb-8 text-secondary">
          Popular Destination
        </h1>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={1}
        loop={true}
        slidesPerView={4}
        breakpoints={{
          1024: {
            slidesPerView: 4,
          },
          945: {
            slidesPerView: 3,
          },
          700: {
            slidesPerView: 2,
          },
          500: {
            slidesPerView: 2,
          },
          100: {
            slidesPerView: 1,
          },
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="relative h-[595px] py-8"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full relative">
            <div className="relative">
              <Image
                src={image.src}
                alt={`slide_image_${index + 1}`}
                width={500}
                height={500}
                className="w-[400px] h-[500px] rounded-2xl object-cover"
              />
              <div className="absolute top-3/4 flex flex-row justify-around items-center w-full">
                <div>
                  <h1 className="text-white text-2xl font-bold">
                    {image.country}
                  </h1>
                  <h3 className="text-white">22 Listing</h3>
                </div>
                <button className="relative text-white hover:text-black border-2  px-6 py-3 mr-2 flex justify-center items-center rounded-3xl overflow-hidden group">
                  <span className="relative z-10 flex items-center text-sm sm:text-sm">
                    View All <HiArrowSmUp size={20} className="rotate-90" />
                  </span>
                  <div className="absolute inset-0 bg-white w-0 group-hover:w-full rounded-3xl transition-all duration-300 ease-in-out"></div>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Destination;
