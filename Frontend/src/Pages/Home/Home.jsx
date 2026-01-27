import React from 'react'
import "./Home.css"
import HomeHeroSection from '../../Components/HomeHeroSection/HomeHeroSection'
import HomeTestimonial from '../../Components/HomeTestimonial/HomeTestimonial'
import HomeSliderBrand from '../../Components/HomeSliderBrand/HomeSliderBrand'
import HomeWhyChoose from '../../Components/HomeWhyChoose/HomeWhyChoose'


const Home = () => {
  return (
    <div className='home'>
      <HomeHeroSection/>
      <HomeSliderBrand/>
      <HomeWhyChoose/>
      <HomeTestimonial/>
    </div>
  )
}

export default Home
