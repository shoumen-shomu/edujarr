import Image from "next/image";
import React from "react";
import Container from "./Container";
import { IoCallOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="pt-29.5 pb-10 bg-linear-to-r from-[#331DA8] to-[#865AEF]">
          <Container>
            <div className="flex justify-between mb-22.5">
              <div className="">
                <Image
                  src="/images/footerimg.png"
                  alt=""
                  width={192}
                  height={60}
                />
                <p className="font-saira font-normal text-xl text-white leading-7 w-130.25 pt-18.5">
                  Veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat. Duis aute irure dolor in
                  reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
              </div>
              <div className="">
                <h3 className="font-rowdies font-bold text-[25px] text-white leading-6.25 mb-21">
                  Quick Links
                </h3>
                <div className="flex gap-18 pb-5.5">
                  <p className="font-saira font-medium text-[18px] text-white leading-7">
                    About
                  </p>
                  <p className="font-saira font-medium text-[18px] text-white leading-7">
                    Blog
                  </p>
                </div>
                <div className="flex gap-18">
                  <p className="font-saira font-medium text-[18px] text-white leading-7">
                    Course
                  </p>
                  <p className="font-saira font-medium text-[18px] text-white leading-7">
                    Contact
                  </p>
                </div>
              </div>
              <div className="">
                <h3 className="font-rowdies font-bold text-[25px] text-white leading-6.25 mb-21">
                  Contact us
                </h3>
                <div className="flex items-center pb-5.5 gap-5">
                  <IoCallOutline className="text-white" size={22} />
                  <p className="font-saira font-medium text-[18px] text-white leading-7">
                    (209) 555-0104
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <IoMailOutline className="text-white" size={22} />
                  <p className="font-saira font-medium text-[18px] text-white leading-7">
                    michelle.rivera@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5">
                <FaMapMarkerAlt className="text-white" size={22} />
                <p className="font-saira font-medium text-[18px] text-white leading-7">
                  2715 Ash Dr. San Jose, South Dakota 83475
                </p>
              </div>
            </div>
            <div className="w-full bg-[#8a8787] py-[.25px]"></div>
            <div className="flex justify-between pt-8.25">
              <p className="font-saira font-normal text-[18px] text-white leading-7">
                Copyright 2023 | All Rights Reserved
              </p>
              <div className="flex gap-7.5">
                <Link href={"/"}>
                  <FaFacebookF className="text-white" size={22} />
                </Link>
                <Link href={"/"}>
                  <FaTwitter className="text-white" size={22} />
                </Link>
                <Link href={"/"}>   
                  <FaInstagram className="text-white" size={22} />
                </Link>
                <Link href={"/"}>
                  <FaDribbble className="text-white" size={22} />
                </Link>
              </div>
            </div>
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
