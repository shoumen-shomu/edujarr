import Image from "next/image";
import React from "react";

const CategoryCard = ({ imgSrc, courseTitle, courseNumber,bgColor }) => {
  return (
    <>
      <div className="bg-white rounded-[20px] w-63.25 pt-9.25 pb-11.75 text-center">
        <div className={`${bgColor} rounded-lg flex justify-center items-center pt-5.25 px-6.25 pb-7.25 w-22.5 mx-auto`}>
          <Image src={imgSrc} alt="" width={40} height={40} />
        </div>
        <h3 className="font-saira font-semibold text-[#324361] text-[25px] leading-8.75 pt-12.5 pb-11.25">
          {courseTitle}
        </h3>
        <p className="font-saira font-medium text-[#4F547B] text-[18px] leading-5.75">
          {courseNumber}
        </p>
      </div>
    </>
  );
};

export default CategoryCard;
