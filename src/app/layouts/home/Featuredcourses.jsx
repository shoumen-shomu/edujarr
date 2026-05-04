import Container from "@/app/components/Container";
import Coursecard from "@/app/components/Coursecard";
import React from "react";

const Featuredcourses = () => {
  return (
    <>
      <section className="pt-30 pb-25.75 bg-[linear-gradient(to_right,#D9ECFF_0%,transparent_100%)]">
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
          <div className="mt-23.5">
            <Coursecard courseImg={"/images/motion.png"} studentsNumber={"5,957 Students"} price={"$33.99"} courseName={"Motion Graphics: Create a Nice Typography Animation"} duration={"01h 49m"}/>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Featuredcourses;
