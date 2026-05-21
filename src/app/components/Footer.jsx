import Image from "next/image";
import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="pt-12.5 pb-10 bg-linear-to-r from-[#331DA8] to-[#865AEF] flex justify-between items-center">
          <Container>
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
          </Container>
        </div>
      </footer>
    </>
  );
};

export default Footer;
