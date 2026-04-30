import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import React from "react";

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
                    "border border-white rounded-[5px] bg-transparent py-5.5 px-9.5 font-saira font-semibold text-[18px] text-white leading-7 tracking-[1px]"
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
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default Banner;
