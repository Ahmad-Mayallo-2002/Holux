import { useState } from "react";
import { IconType } from "react-icons";
import { FaBars, FaBuilding, FaGem, FaHome, FaPhone } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

type NLink = {
  name: string;
  href: string;
  icon: IconType;
};

const nLinks: NLink[] = [
  {
    name: "Home",
    href: "/",
    icon: FaHome,
  },
  {
    name: "Value",
    href: "#value",
    icon: FaGem,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: FaPhone,
  },
  {
    name: "Residences",
    href: "#residences",
    icon: FaBuilding,
  },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const { pathname } = useLocation();
  return (
    <nav className="p-4">
      <div className="container md:flex-nowrap flex-wrap space-between">
        <Link
          to="/"
          className="w-fit text-blue-500 hover:text-blue-700 font-bold text-3xl duration-300 center-y gap-x-2"
        >
          <FaHome />
          Holux
        </Link>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="main-button md:hidden block"
        >
          <FaBars />
        </button>
        <ul
          className={`${
            open ? "flex" : "hidden"
          } md:flex items-center md:flex-row flex-col gap-4 md:w-fit w-full md:mt-0 mt-4 md:flex`}
        >
          {nLinks.map((link) => (
            <li key={link.name}>
              <a
                className={`w-fit text-blue-500 hover:text-white hover:bg-blue-600 rounded-lg px-4 py-2 duration-300 gap-x-2 text-[19px] center-y ${
                  pathname === link.href ? "bg-blue-600" : ""
                } ${pathname === link.href ? "text-white" : ""}`}
                href={link.href}
              >
                <link.icon />
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
