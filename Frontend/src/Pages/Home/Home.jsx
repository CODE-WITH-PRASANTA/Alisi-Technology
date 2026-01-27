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
import HomeTechnologies from '../../Components/HomeTechnologies/HomeTechnologies'
import HomeTeam from '../../Components/HomeTeam/HomeTeam'
import HomeVideo from '../../Components/HomeVideo/HomeVideo'
import HomeServices from '../../Components/HomeServices/HomeServices'

const Home = () => {
  return (
    <div className='home'>
      <HomeHeroSection/>
      <HomeSliderBrand/>
      <HomeWhyChoose/>
      <HomeAbout/>
      <HomeServices/>
      <HomeVideo/>
      <HomeTestimonial/>
      <HomeWorkingProcess/>
      <HomeTeam/>
      <HomeTechnologies/>
      <HomeRecentProjects/>
      <HomeContactSection/>  
      <HomeInsights/>
    </div>
  )
}

export default Home
