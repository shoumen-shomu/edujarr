import Container from "@/app/components/Container";
import React from "react";

const Featuredcourses = () => {
  return (
    <>
      <section className="mt-30">
        <Container>
          <div className="text-center">
            <h2 className="font-rowdies font-normal text-[45px] text-[#323232] leading-17.5">
              Featured{" "}
              <span className="font-rowdies font-normal text-[45px] text-[#2AAA94] leading-17.5">
                Course
              </span>
            </h2>
            <p className="pt-5 w-172.75 mx-auto font-saira font-normal text-[25px] text-[#4E596B] leading-8.75">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod temporidunt ut labore veniam...
            </p>
          </div>
          <div className="mt-23.5"></div>
        </Container>
      </section>
    </>
  );
};

export default Featuredcourses;
