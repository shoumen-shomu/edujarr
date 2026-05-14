import CategoryCard from "@/app/components/CategoryCard";
import Container from "@/app/components/Container";
import React from "react";

const Categories = () => {
  return (
    <>
      <section className="pt-25.25 pb-38.75 bg-linear-to-r from-[#D9ECFF] to-[#D9ECFF]/0">
        <Container>
          <div className="text-center">
            <h2 className="font-rowdies font-bold text-[35px] text-[#323232] leading-8.75 pb-10.5">
              Top <span className=" text-[#2AAA94] ">Categories</span>
            </h2>
            <p className="font-saira font-medium text-[25px] text-[#4E596B] leading-6.75">
              12,000+ unique online course list designs
            </p>
          </div>
          <div className="flex gap-5 mt-25">
            <CategoryCard
            bgColor="bg-[#DF385B]"
              imgSrc={"/images/dm.png"}
              courseTitle={"Digital Marketing"}
              courseNumber={"25 Courses"}
            />
            <CategoryCard
             bgColor="bg-[#5AB48E]"
              imgSrc={"/images/web.png"}
              courseTitle={"Web Development"}
              courseNumber={"16 Courses"}
            />
            <CategoryCard
            bgColor="bg-[#7F56D9]"
              imgSrc={"/images/art.png"}
              courseTitle={"Art & Humanities"}
              courseNumber={"76 Courses"}
            />
            <CategoryCard
            bgColor="bg-[#FAB437]"
              imgSrc={"/images/pd.png"}
              courseTitle={"Personal Development"}
              courseNumber={"22 Courses"}
            />
            <CategoryCard
            bgColor="bg-[#2AAA94]"
              imgSrc={"/images/it.png"}
              courseTitle={"IT and Software"}
              courseNumber={"110 Courses"}
            />
            <CategoryCard
            bgColor="bg-[#2CD182]"
              imgSrc={"/images/gd.png"}
              courseTitle={"Graphic Design"}
              courseNumber={"85 Courses"}
            />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Categories;
