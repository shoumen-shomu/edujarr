import Container from "@/app/components/Container";
import Image from "next/image";
import React from "react";

const Company = () => {
  return (
    <>
      <section>
        <div className="bg-[linear-gradient(90deg,#084FC7_0%,#7F56D9_48%)] pt-13 pb-12 ">
          <Container>
            <div className="flex justify-between items-center">
              <Image
                src={"/images/amazon.png"}
                alt="Amazon"
                width={120}
                height={37}
              />
              <Image
                src={"/images/AMD.png"}
                alt="Amazon"
                width={120}
                height={28}
              />
              <Image
                src={"/images/CISCO.png"}
                alt="Amazon"
                width={120}
                height={68}
              />
              <Image
                src={"/images/dropcam.png"}
                alt="Amazon"
                width={180}
                height={35}
              />
              <Image
                src={"/images/logitec.png"}
                alt="Amazon"
                width={120}
                height={37}
              />
              <Image
                src={"/images/spotify.png"}
                alt="Amazon"
                width={140}
                height={42}
              />
            </div>
          </Container>
        </div>
      </section>
    </>
  );
};

export default Company;
