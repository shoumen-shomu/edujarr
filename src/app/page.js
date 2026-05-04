import React from 'react'
import Banner from './layouts/home/Banner'
import Company from './layouts/home/Company'
import Featuredcourses from './layouts/home/Featuredcourses'
import Coursecard from './components/Coursecard'

const page = () => {
  
  
  return (
    <>
    <Banner/>
    <Company/>
    <Featuredcourses/>
    <Coursecard/>
    </>
  )
}

export default page