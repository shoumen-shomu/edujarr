import Button from "@/app/components/Button";
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
          <div className="pt-23.5 pb-22.75 grid grid-cols-3 gap-11">
            <Coursecard
              courseImg={"/images/motion.png"}
              studentsNumber={"5,957 Students"}
              price={"$33.99"}
              courseName={"Motion Graphics: Create a Nice Typography Animation"}
              duration={"01h 49m"}
            />
            <Coursecard
              courseImg={"/images/finance.png"}
              studentsNumber={"5,957 Students"}
              price={"$$45.99"}
              courseName={"The Complete Financial Analyst Training & Investing"}
              duration={"01h 49m"}
            />
            <Coursecard
              courseImg={"/images/education.png"}
              studentsNumber={"5,957 Students"}
              price={"$33.99"}
              courseName={"Education Software and PHP and JS System Script"}
              duration={"01h 49m"}
            />
            <Coursecard
              courseImg={"/images/marketing.png"}
              studentsNumber={"5,957 Students"}
              price={"$33.99"}
              courseName={"EMarketing 2023: Complete Guide To Instagram Growth"}
              duration={"01h 49m"}
            />
            <Coursecard
              courseImg={"/images/php.png"}
              studentsNumber={"5,957 Students"}
              price={"$33.99"}
              courseName={"Advance PHP knowledge with JS to make smart web"}
              duration={"01h 49m"}
            />
            <Coursecard
              courseImg={"/images/modelling.png"}
              studentsNumber={"5,957 Students"}
              price={"$33.99"}
              courseName={"Learn 3D Modelling and Design for Beginners"}
              duration={"01h 49m"}
            />
          </div>
          <div className="text-center">
            <Button className={"py-4.5 px-9.25 font-saira font-medium text-[20px] text-[#FFFFFF] leading-8.75 bg-linear-to-r from-[#083F9B] to-[#7F56D9] rounded-[10px]"} btnTxt={"Explore courses"}/> 
          </div>
        </Container>
      </section>
    </>
  );
};

export default Featuredcourses;
