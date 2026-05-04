import Image from "next/image";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

const Coursecard = ({courseImg, studentsNumber, duration, courseName, price}) => (
  <>
    <div className="rounded-[20px]">
      <Image src={courseImg} alt="Motion" width={511} height={314} />
      <div className="p-7.5 bg-white w-127.5">
        <div className="flex justify-between">
          <p className="font-saira font-medium text-[14px] text-[#4E596B] leading-8.75">{studentsNumber}</p>
          <p className="font-saira font-medium text-[14px] text-[#4E596B] leading-8.75">{duration}</p>
        </div>
        <h2 className="w-108.75 font-saira font-semibold text-[25px] text-[#324361] leading-8.75 pt-5.25 pb-8.25">{courseName}</h2>
        <div className="flex justify-between">
          <p className="font-saira font-medium text-[22px] text-[#4E596B] leading-8.75 tracking-[-3%]">{price}</p>
          <FaCartShopping className="text-[#5E6775] " size={22} />
        </div>
      </div>
    </div>
  </>
);

export default Coursecard;
