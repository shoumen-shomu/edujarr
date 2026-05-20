import React from "react";
import Banner from "./layouts/home/Banner";
import Company from "./layouts/home/Company";
import Featuredcourses from "./layouts/home/Featuredcourses";
import Learn from "./layouts/home/Learn";
import Categories from "./layouts/home/Categories";

import Number from "./layouts/home/Number";
import Video from "./layouts/home/Video";
import Testimonial from "./layouts/home/Testimonial";

const page = () => {
  return (
    <>
      <Banner />
      <Company />
      <Featuredcourses />
      <Learn />
      <Categories/>
      <Number/>
      <Video/>
      <Testimonial/>
    </>
  );
};

export default page;
