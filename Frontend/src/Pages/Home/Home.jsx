import React from 'react'
import "./Home.css"
import HomeHeroSection from '../../Components/HomeHeroSection/HomeHeroSection'
import HomeTestimonial from '../../Components/HomeTestimonial/HomeTestimonial'
import HomeSliderBrand from '../../Components/HomeSliderBrand/HomeSliderBrand'
import HomeWhyChoose from '../../Components/HomeWhyChoose/HomeWhyChoose'
import HomeAbout from '../../Components/HomeAbout/HomeAbout'
import HomeInsights from '../../Components/HomeInsights/HomeInsights'
import HomeWorkingProcess from '../../Components/HomeWorkingProcess/HomeWorkingProcess'
import HomeContactSection from '../../Components/HomeContactSection/HomeContactSection'
import HomeRecentProjects from '../../Components/HomeRecentProjects/HomeRecentProjects'

const Home = () => {
  return (
    <div className='home'>
      <HomeHeroSection/>
      <HomeSliderBrand/>
      <HomeWhyChoose/>
      <HomeAbout/>
      <HomeTestimonial/>
      <HomeWorkingProcess/>
      <HomeRecentProjects/>
      <HomeContactSection/>  
      <HomeInsights/>
    </div>
  )
}

export default Home
