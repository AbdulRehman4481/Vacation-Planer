import { useState } from "react";
import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { IoCloseSharp, IoReorderThree } from "react-icons/io5";
import Image from "next/image";
import Images from "@/app/constants/Images";
import { FaChevronRight } from "react-icons/fa";

function Sidebar({ isOpen, toggleSidebar }: any) {
  return (
    <>
      <div
        className={`fixed top-0 right-0 w-2/3 md:w-80 h-full bg-white shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="flex bg-primary  p-4">
          <div className="flex">
            <Image
              src={Images.worldLogo2}
              alt="World"
              width={100}
              height={100}
            />
            <span className="text-white font-bold text-2xl">
              {" "}
              Vacation Planer
            </span>
          </div>
        </div>
        <ul className="p-6">
          <li className="my-4">
            <span className="text-text_gray hover:text-primary font-bold    transition-all duration-300 cursor-pointer">
              <FaChevronRight className="inline" size={15} />
              Home
            </span>
            <hr className="my-2" />
          </li>
          <li className="my-4">
            <span className="text-text_gray hover:text-primary text-base font-bold   transition-all duration-300 cursor-pointer">
              <FaChevronRight className="inline" size={15} />
              About Us
            </span>
            <hr className="my-2" />
          </li>
          <li className="my-4">
            <span className="text-text_gray hover:text-primary text-base font-bold   transition-all duration-300 cursor-pointer">
              <FaChevronRight className="inline" size={15} />
              Services
            </span>
            <hr className="my-2" />
          </li>
          <li className="my-4">
            <span className="text-text_gray hover:text-primary text-base font-bold   transition-all duration-300 cursor-pointer">
              <FaChevronRight className="inline" size={15} />
              Tour Guide
            </span>
            <hr className="my-2" />
          </li>
          <li className="my-4">
            <span className="text-text_gray hover:text-primary text-base font-bold   transition-all duration-300 cursor-pointer">
              <FaChevronRight className="inline" size={15} />
              Contact Us
            </span>
            <hr className="my-2" />
          </li>
        </ul>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
}

export default function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <p className="font-bold text-inherit">Vacation Planer</p>
        </NavbarBrand>
        <NavbarContent className="hidden md:flex gap-4" justify="center">
          <NavbarItem className="relative group">
            <Link
              className="no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              color="foreground"
              href="#"
            >
              Home
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              color="foreground"
              href="#"
            >
              Blog
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              color="foreground"
              href="#"
            >
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="hidden md:flex">
          <NavbarItem>
            <Link
              className="no-underline relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-current after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
              href="#"
            >
              Login
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="md:hidden flex">
          <NavbarItem>
            <button
              onClick={toggleSidebar}
              className="bg-primary rounded-lg px-1 hover:bg-secondary transition-all duration-300"
            >
              <IoReorderThree color="white" size={45} />
            </button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </>
  );
}
