import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import Image from "next/image";
import React from "react";

const Number = () => {
  return (
    <>
      <section>
        <Container>
          <div className="flex gap-37.75 items-center mt-33.75 mb-28.5 relative">
            <div className="">
              <Image
                src="/images/numberimage.png"
                alt=""
                width={664}
                height={666}
              />
            </div>
            <div className="">
              <h2 className="w-143.75 font-rowdies font-bold text-[35px] text-[#1D1D45] leading-8.75">The number one factor in <span className="text-[#2AAA94]">relevance drives out resistance.</span></h2>
              <p className="w-188.5 font-saira font-normal text-lg text-[#4E596B] leading-7 pt-12 pb-13">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <Button className={"py-4.5 px-9.25 font-saira font-medium text-[20px] text-[#FFFFFF] leading-8.75 bg-linear-to-r from-[#083F9B] to-[#7F56D9] rounded-[10px]"} btnTxt={"Learn More"}/>
            </div>
            <Image className={"absolute bottom-0 right-0 "} src="/images/numberelement.png" alt="" width={119} height={119} />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Number;
