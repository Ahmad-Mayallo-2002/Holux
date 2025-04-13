import { FaLocationDot } from "react-icons/fa6";
import home from "../assets/img/home.jpg";
import logo1 from "../assets/img/logo1.png";
import logo2 from "../assets/img/logo2.png";
import logo3 from "../assets/img/logo3.png";
import logo4 from "../assets/img/logo4.png";
import PopularSwiper from "../components/PopularSwiper";
import value from "../assets/img/value.jpg";
import Accordion from "../components/Accordion";
import { IconType } from "react-icons";
import { FaPhone, FaVideo } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdMail } from "react-icons/md";
import AOS from "aos";
type HeroData = {
  head: string;
  content: string;
};

const heroData: HeroData[] = [
  {
    head: "9K",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    head: "2K",
    content: "Lorem ipsum dolor sit amet.",
  },
  {
    head: "28K",
    content: "Lorem ipsum dolor sit amet.",
  },
];

const logos = [logo1, logo2, logo3, logo4];

type ContactUs = {
  icon: IconType;
  title: string;
  content: string;
  message: string;
};

const contact: ContactUs[] = [
  {
    icon: FaPhone,
    title: "Call",
    content: "0123456789",
    message: "Call Now",
  },
  {
    icon: IoChatbubbleEllipses,
    title: "Chat",
    content: "0123456789",
    message: "Chat Now",
  },
  {
    icon: FaVideo,
    title: "Video Call",
    content: "0123456789",
    message: "Video Call Now",
  },
  {
    icon: MdMail,
    title: "Message",
    content: "0123456789",
    message: "Message Now",
  },
];

export default function Home() {
  AOS.init();
  return (
    <>
      <section className="hero min-h-[calc(100vh-77px)] bg-linear-[170deg,#383838_0%,#0f0f0f_30%] center-y">
        <div className="overflow-x-hidden container gap-y-6 py-24 space-between lg:flex-row flex-col">
          <div data-aos="fade-right" data-aos-duration="800" className="col">
            <h1 className="text-white mb-6 leading-[1.25] text-5xl">
              Discover Most <br /> Suitable Property
            </h1>
            <p className="text-gray-400 max-w-[550px] my-6">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
              sint, inventore consectetur sed vero dolor.
            </p>
            <form className="my-6">
              <div className="flex items-center">
                <div className="icon border-gray-300 center-y border-e rounded-s-lg self-stretch p-2 bg-white">
                  <FaLocationDot className="text-blue-500" />
                </div>
                <input
                  className="p-2 bg-white"
                  type="text"
                  placeholder="Search by Location"
                />
                <button
                  className="bg-blue-600 text-white rounded-e-lg p-2 cursor-pointer duration-300 hover:bg-blue-800"
                  type="submit"
                >
                  Search
                </button>
              </div>
            </form>
            <div className="w-fit data grid gap-4 lg:grid-cols-3 grid-cols-1">
              {heroData.map((data) => (
                <div className="p-2" key={data.head}>
                  <h3 className="text-white text-[30px]">
                    {data.head} <span className="text-yellow-500">+</span>
                  </h3>
                  <p className="text-gray-400">{data.content}</p>
                </div>
              ))}
            </div>
          </div>
          <div
            className="col"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <figure className="image-animation relative">
              <img
                src={home}
                className="relative ld:w-[400px] rounded-[20rem] h-full"
                alt=""
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="logos my-24">
        <div className="container grid gap-4 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
          {logos.map((logo, index) => (
            <img
              key={logo}
              src={logo}
              className="h-[100px] mx-auto animate-opacity"
              alt=""
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={300 * index}
            />
          ))}
        </div>
      </section>
      <section id="residences" className="popular my-24">
        <div className="container">
          <div className="text-center mb-6">
            <span className="text-red-500">Best Choices</span>
            <h2 className="text-blue-700 text-4xl">Popular Residences</h2>
          </div>
          <PopularSwiper />
        </div>
      </section>
      <section id="value" className="value my-24">
        <div className="container">
          <img
            src={value}
            className="animate-opacity mx-auto mb-6 w-[400px] rounded-t-[20rem] rounded-b-2xl"
            alt=""
          />

          <div className="text-center mb-6">
            <span className="text-red-500">Our Value</span>
            <h2 className="text-blue-700 text-4xl">Value We Give To You</h2>
          </div>
          <Accordion />
        </div>
      </section>
      <section id="contact" className="contact my-24">
        <div className="container">
          <div className="text-center mb-6">
            <span className="text-red-500">Contact Us</span>
            <h2 className="text-blue-700 text-4xl">Easy to Contact Us</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
            {contact.map((box, index) => (
              <div
                data-aos={index % 2 === 0 ? "fade-up" : "fade-down"}
                data-aos-duration="750"
                data-aos-delay={index * 100}
                key={index}
                className="p-3 rounded-lg bg-blue-100"
              >
                <div className="head center-y gap-x-4">
                  <div className="bg-blue-200 text-blue-500 p-3">
                    <box.icon />
                  </div>
                  <div>
                    <h4 className="text-blue-700">{box.title}</h4>
                    <p className="text-gray-600">{box.content}</p>
                  </div>
                </div>
                <button className="mt-3 w-full bg-blue-500 p-2 rounded-lg text-white duration-300 hover:bg-blue-700">
                  {box.message}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="subscribe my-24">
        <div className="container">
          <div className="text-center content p-4 rounded-lg bg-blue-500">
            <h2 className="text-white text-3xl mb-5">Get Started with Holux</h2>
            <p className="mb-5 text-gray-50 max-w-[600px] mx-auto leading-[2]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis
              animi cum numquam ea reiciendis quisquam? Ipsam qui autem
              repudiandae placeat ex neque error ipsa pariatur?
            </p>
            <button className="py-4 px-12 text-xl font-[600] rounded-lg text-white border-2 border-white cursor-pointer hover:bg-blue-800 hover:border-blue-800 duration-300">
              Get Started
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
