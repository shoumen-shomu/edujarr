import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Banner = () => {
  return (
    <section>
      <div className="bg-[url('/images/bannerbg.png')] bg-cover bg-center bg-no-repeat pt-5 relative">
        <Container>
          <div className="flex justify-between items-center">
            <div className="">
              <p className="font-saira font-semibold text-xl text-white leading-5 tracking-[3px] uppercase">
                Successful coaches are visionaries
              </p>
              <h1 className="w-167.5 font-rowdies font-normal text-[80px] text-white leading-22.5 pt-15.75 pb-23">
                Good <span className="text-[#4BE5CA]">coaching</span> is good
                teaching & nothing else.
              </h1>
              <div className="flex gap-9 items-center">
                <Button
                  className={
                    "border border-white rounded-[10px] bg-transparent py-5.5 px-9.5 font-saira font-semibold text-[18px] text-white leading-7 tracking-[1px]"
                  }
                  btnTxt={"View Courses"}
                />
                <Button
                  className={
                    "font-saira font-medium text-[20px] text-[#ffffff] leading-8.75 relative after:absolute after: content-[''] after:bottom-0 after:left-1/2 after:w-0 after:h-0.5 after:-translate-x-1/2 after:transition-all after:duration-300 after:bg-[#ffffff] hover:after:w-full "
                  }
                  btnTxt={"Get Free Consultation"}
                />
              </div>

              <div className="w-122.25 py-2.5 pr-2.5 pl-8.75 rounded-[7px] bg-white items-center flex justify-between mt-19.75">
                <input
                  className="w-70.25 outline-0 font-saira font-normal text-base text-[#4F547B]"
                  type="text"
                  placeholder="What do you want to learn today?"
                />
                <div className="pt-3.5 pb-4.25 pr-7.5 pl-6.75 bg-linear-to-r from-[#083F9B] to-[#7F56D9] flex  gap-3.75 items-center rounded-[10px] cursor-pointer">
                  <HiMagnifyingGlass className="text-white " size={20} />
                  <p className="font-saira font-medium text-white text-[15px] leading-[28.8px]  ">
                    Search
                  </p>
                </div>
              </div>
            </div>
            <div className="">
              <Image
                src={"/images/bannerimg.png"}
                alt="Banner Image"
                width={658}
                height={908}
              />
            </div>
          </div>
          <div className="absolute bottom-0 left-[40%]">
            <Image src={"/images/bannerelement.png"} width={250} height={300} />
          </div>
          <div className="flex gap-6.25 absolute top-[20%] left-1/2
          ">
            <div className="flex flex-col items-center gap-2.75">
              <div className="h-15.5 w-px bg-[#2AAA94]"></div>
              <div className="h-6 w-6 bg-[#2AAA94] flex justify-center items-center rounded-[50%]">
                <svg
                  width="9"
                  height="7"
                  viewBox="0 0 9 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 7V5.15789C0 4.59844 0.0965485 4.00487 0.289645 3.37719C0.489401 2.74269 0.775717 2.13207 1.14859 1.54532C1.52813 0.951754 1.98424 0.436647 2.51692 0L3.79535 1.06433C3.37587 1.67836 3.00965 2.31969 2.6967 2.9883C2.39041 3.6501 2.23726 4.35965 2.23726 5.11696V7H0ZM5.11374 7V5.15789C5.11374 4.59844 5.21029 4.00487 5.40338 3.37719C5.60314 2.74269 5.88946 2.13207 6.26233 1.54532C6.64187 0.951754 7.09798 0.436647 7.63066 0L8.90909 1.06433C8.4896 1.67836 8.12339 2.31969 7.81044 2.9883C7.50415 3.6501 7.351 4.35965 7.351 5.11696V7H5.11374Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="h-15.5 w-px bg-[#2AAA94]"></div>
            </div>
            <div className="">
              <p className="font-rowdies font-normal text-base text-white leading-[20.4px]">
                Ronald Richards
              </p>
              <p className="font-saira font-normal text-base text-white leading-6.5 w-68 pt-4">
                In a coaching role, you ask the questions and rely more on your
                staff, who become the experts, to provide the information.
              </p>
              <div className="flex items-center gap-2. pt-2.75 ">
                <p className="font-saira font-normal text-base text-[#81C7A2] leading-[25.2px]">4.9</p>
                <div className="flex gap-2">
                  <FaStar className="text-[#81C7A2]" />
                  <FaStar className="text-[#81C7A2]" /> 
                  <FaStar className="text-[#81C7A2]" />
                  <FaStar className="text-[#81C7A2]" />
                  <FaRegStarHalfStroke className="text-[#81C7A2]" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
