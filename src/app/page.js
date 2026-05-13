import React from "react";
import Banner from "./layouts/home/Banner";
import Company from "./layouts/home/Company";
import Featuredcourses from "./layouts/home/Featuredcourses";
import Learn from "./layouts/home/Learn";
import Categories from "./layouts/home/Categories";

const page = () => {
  return (
    <>
      <Banner />
      <Company />
      <Featuredcourses />
      <Learn />
      <Categories/>
    </>
  );
};

export default page;
