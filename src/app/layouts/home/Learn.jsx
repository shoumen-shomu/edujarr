import Container from "@/app/components/Container";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { BsPersonWorkspace } from "react-icons/bs";
import Image from "next/image";

const Learn = () => {
  return (
    <>
      <section className="bg-linear-to-r from-[#084FC7] via-[#7F56D9] via-48% to-[#7F56D9] pt-28.25 pb-36 relative ">
        <Image src="/images/learnelement.png" alt="" width={180} height={170} className="absolute "/>
        <Container>
          <div className="text-center mb-28.75">
            <h2 className="font-rowdies font-bold text-[45px] text-white leading-12.5 pb-7.25">
              Why{" "}
              <span className="font-rowdies font-bold text-[45px] text-[#4BE5CA] leading-12.5">
                learn
              </span>{" "}
              with our courses?
            </h2>
            <p className="font-saira font-normal text-[25px] text-white leading-8.75 w-182 mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temporidunt ut labore veniam...
            </p>
          </div>
          <div className="flex gap-46.5 justify-center">
            <div className="text-center">
              <FaLaptopCode className="text-white mx-auto" size={80} />
              <p className="font-rowdies font-bold text-[25px] text-white leading-8 pt-9 pb-7.25">01. Learn</p>
              <p className="font-saira font-normal text-xl text-white leading-6.75 w-82.75">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </p>
            </div>
            <div className="text-center">
              <GiGraduateCap className="text-white mx-auto" size={80} />
              <p className="font-rowdies font-bold text-[25px] text-white leading-8 pt-9 pb-7.25">02. Graduate</p>
              <p className="font-saira font-normal text-xl text-white leading-6.75 w-82.75">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </p>
            </div>
            <div className="text-center">
              <BsPersonWorkspace className="text-white mx-auto" size={80} />
              <p className="font-rowdies font-bold text-[25px] text-white leading-8 pt-9 pb-7.25">03. Work</p>
              <p className="font-saira font-normal text-xl text-white leading-6.75 w-82.75">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Learn;
