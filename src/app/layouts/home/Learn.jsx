import Container from "@/app/components/Container";
import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const Learn = () => {
  return (
    <>
      <section className="bg-linear-to-r from-[#084FC7] via-[#7F56D9] via-48% to-[#7F56D9] pt-28.25 pb-36 ">
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
          <div className="flex justify-between">
            <div className="text-center">
              <FaLaptopCode className="text-white mx-auto" size={80} />
              <p className="font-rowdies font-bold text-[25px] text-white leading-8">01. Learn</p>
              <span className="font-saira font-normal text-xl text-white leading-6.75 w-82.75">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </span>
            </div>
            <div className="text-center">
              <FaLaptopCode className="text-white mx-auto" size={80} />
              <p className="font-rowdies font-bold text-[25px] text-white leading-8">01. Learn</p>
              <span className="font-saira font-normal text-xl text-white leading-6.75 w-82.75">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </span>
            </div>
            <div className="text-center">
              <FaLaptopCode className="text-white mx-auto" size={80} />
              <p className="font-rowdies font-bold text-[25px] text-white leading-8">01. Learn</p>
              <span className="font-saira font-normal text-xl text-white leading-6.75 w-82.75">
                Lorem ipsum dolor sit amet, consectetur dolorili adipiscing
                elit. Felis donec massa aliqua.
              </span>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Learn;
