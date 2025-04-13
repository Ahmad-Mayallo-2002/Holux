import { ReactNode, useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { FaCar, FaGasPump, FaCogs } from "react-icons/fa";
import { MdPriceChange, MdSpeed } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";

type Item = {
  head: string;
  text: string;
  icon: ReactNode;
};

const items: Item[] = [
  {
    head: "Affordable Pricing",
    text: "Get the best deals on top models with no hidden fees.",
    icon: <MdPriceChange className="text-3xl text-blue-600" />,
  },
  {
    head: "Wide Range of Cars",
    text: "Choose from economy to luxury cars across all brands.",
    icon: <FaCar className="text-3xl text-red-500" />,
  },
  {
    head: "Fuel Efficient",
    text: "Explore fuel-efficient and hybrid vehicles.",
    icon: <FaGasPump className="text-3xl text-green-600" />,
  },
  {
    head: "Latest Models",
    text: "We provide the latest models with advanced features.",
    icon: <BiCalendar className="text-3xl text-purple-500" />,
  },
  {
    head: "High Performance",
    text: "Speed and performance packed in every ride.",
    icon: <MdSpeed className="text-3xl text-yellow-500" />,
  },
  {
    head: "Reliable Service",
    text: "We ensure a hassle-free experience from start to finish.",
    icon: <FaCogs className="text-3xl text-gray-600" />,
  },
];

const AccordionItem = ({ head, text, icon }: Item) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:bg-dark-2 dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={handleToggle}
      >
        <div className="mr-5 text-blue-500 text-3xl flex h-10 w-full cursor-pointer max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary dark:bg-white/5">
          {!active ? <FaAngleDown /> : <FaAngleUp />}
        </div>

        <div className="w-full">
          <h4 className="center-y gap-x-2 text-blue-700 mt-1 text-lg font-semibold text-dark dark:text-white">
            {icon}
            {head}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="text-gray-400 py-3 text-base leading-relaxed text-body-color dark:text-dark-6">
          {text}
        </p>
      </div>
    </div>
  );
};

const Accordion = () => {
  return (
    <section className="">
      <div className="container">
        {items.map((item) => (
          <AccordionItem
            key={item.head}
            head={item.head}
            text={item.text}
            icon={item.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Accordion;
