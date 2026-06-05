import React from "react";
import Container from "./Container";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDownSLine } from "react-icons/ri";
import { CiShoppingBasket } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import Button from "./Button";

const Header = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Blog", path: "/blog" },
    { name: "Shop", path: "/shop" },
    { name: "Events", path: "/events" },
    { name: "Pages", path: "/pages" },
  ];

  return (
    <header className="bg-white">
      <Container>
        <div className="flex items-center py-7 justify-between">
          {/* Logo Start */}
          <div>
            <Image
              className="cursor-pointer"
              src="/images/logo.png"
              alt="Edujarr"
              width={192}
              height={60}
            />
          </div>
          {/* Logo End */}
          {/* Menu Start */}
          <div>
            <ul className="flex gap-5.5">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center cursor-pointer font-saira font-medium text-[20px] text-[#1B2336] leading-6.5 hover:text-[#2AAA94] duration-300"
                >
                  <Link href={item.path}>{item.name}</Link>
                  <RiArrowDownSLine
                    className="pl-2.5 text-[#2AAA94]"
                    size={30}
                  />
                </li>
              ))}
            </ul>
          </div>
          {/* Menu End */}
          {/* Icons Start */}
          <div className="flex gap-4.25">
            <CiShoppingBasket className="cursor-pointer" size={25} />
            <FaRegUserCircle className="cursor-pointer" size={25} />
            <HiMagnifyingGlass className="cursor-pointer" size={25} />
          </div>
           {/* Icons End */}
          {/* Buttons Start */}
          <div className="flex gap-10 items-center">
            <Button
              className="font-saira font-medium text-[20px] text-[#4A4A4A] leading-8.75 relative after:absolute after:content-[''] after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-[#4A4A4A] hover:after:w-full"
              btnTxt="Login"
            />
            <Button
              className="py-4.5 px-9.25 font-saira font-medium text-[20px] text-white leading-8.75 bg-linear-to-r from-[#083F9B] to-[#7F56D9] rounded-[10px]"
              btnTxt="Signup"
            />
            {/* Buttons End */}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
