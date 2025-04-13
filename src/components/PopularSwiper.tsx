import { BiArea } from "react-icons/bi";
import popular from "../assets/popular.json";
import { MdBathroom, MdBed } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function PopularSwiper() {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      slidesPerView={3}
      spaceBetween={20}
      pagination
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      breakpoints={{
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {popular.map((pop) => (
        <SwiperSlide key={pop.id}>
          <div className="duration-300 hover:shadow-2xl rounded-lg p-3">
            <img
              src={pop.image}
              className="rounded-lg w-full h-[250px]"
              alt=""
            />
            <div className="pt-3 content">
              <h3 className="text-xl text-blue-700 mb-1">{pop.title}</h3>
              <p className="text-red-500 text-[24px]">{pop.price}</p>
              <div className="mt-2 space-between border-blue-300 flex-wrap border-2 rounded-md p-2 text-gray-800">
                <p className="center-y gap-x-1">
                  <BiArea size={20} /> {pop.area}
                </p>
                <p className="center-y gap-x-1">
                  <MdBathroom size={20} /> {pop.bathrooms}
                </p>
                <p className="center-y gap-x-1">
                  <MdBed size={20} /> {pop.bedrooms}
                </p>
                <p className="center-y gap-x-1">
                  <FaLocationDot size={20} /> {pop.location}
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
