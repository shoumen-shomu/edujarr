import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Banner = () => {
  return (
    <section>
      <div className="bg-[url('/images/bannerbg.png')] bg-cover bg-center bg-no-repeat py-20">
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
                <input className="w-70.25 outline-0 font-saira font-normal text-base text-[#4F547B]"
                  type="text"
                  placeholder="What do you want to learn today?"
                  
                />
                <div className="pt-3.5 pb-4.25 pr-7.5 pl-6.75 bg-linear-to-r from-[#083F9B] to-[#7F56D9] flex  gap-3.75 items-center rounded-[10px] cursor-pointer">
                  <HiMagnifyingGlass className="text-white " size={20} />
                  <p className="font-saira font-medium text-white text-[15px] leading-[28.8px]  ">Search</p>
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
