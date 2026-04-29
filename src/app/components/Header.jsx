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
  return (
    <>
      <header className="bg-white">
        <Container>
          <div className="flex items-center py-7 justify-between">
            <div className="">
              <Image
                src="/logo.png"
                alt="Edujarr"
                width={192}
                height={60}
              />
            </div>
            <div className="">
              <ul className="flex gap-5.5">
                <li className="flex items-center cursor-pointer"><Link href={"/"}>Home </Link><RiArrowDownSLine className="pl-2.5" size={30}/></li>
                <li className="flex items-center cursor-pointer"><Link href={"/"}>Courses </Link><RiArrowDownSLine className="pl-2.5" size={30}/></li>
                <li className="flex items-center cursor-pointer"><Link href={"/"}>Blog </Link><RiArrowDownSLine className="pl-2.5" size={30}/></li>
                <li className="flex items-center cursor-pointer"><Link href={"/"}>Shop </Link><RiArrowDownSLine className="pl-2.5" size={30}/></li>
                <li className="flex items-center cursor-pointer"><Link href={"/"}>Pages </Link><RiArrowDownSLine className="pl-2.5" size={30}/></li>
                <li className="flex items-center cursor-pointer"><Link href={"/"}>Events </Link><RiArrowDownSLine className="pl-2.5" size={30}/></li>
              </ul>
            </div>
            <div className="flex gap-4.25">
              <CiShoppingBasket size={25} />
              <FaRegUserCircle size={25} />
              <HiMagnifyingGlass size={25} />
            </div>
            <div className="flex">
              <Button className={""} btnTxt={"Login"} />
              <Button btnTxt={"Signup"} />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
