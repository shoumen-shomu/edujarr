import React from "react";
import Banner from "./layouts/home/Banner";
import Company from "./layouts/home/Company";
import Featuredcourses from "./layouts/home/Featuredcourses";
import Learn from "./layouts/home/Learn";
import Categories from "./layouts/home/Categories";
import CategoryCard from "./components/CategoryCard";
import Number from "./layouts/home/Number";

const page = () => {
  return (
    <>
      <Banner />
      <Company />
      <Featuredcourses />
      <Learn />
      <Categories/>
      <Number/>
    </>
  );
};

export default page;
