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
import HomeVideo from '../../Components/HomeVideo/HomeVideo'
import HomeServices from '../../Components/HomeServices/HomeServices'
import HomeFeedback from '../../Components/HomeFeedback/HomeFeedback'
import AboutTestmonial from '../../Components/AboutTestimonial/AboutTestimonial'
import AboutTeam from '../../Components/AboutTeam/AboutTeam'

const Home = () => {
  return (
    <div className='home'>
      <HomeHeroSection/>
      <HomeSliderBrand/>
      <HomeWhyChoose/>
      <HomeAbout/>
      <HomeServices/>
      <HomeVideo/>
      <HomeFeedback/>
      <AboutTestmonial/>
      <HomeWorkingProcess/>
      <AboutTeam/>
      <HomeTechnologies/>
      <HomeRecentProjects/>
      <HomeContactSection/>  
      <HomeInsights/>
    </div>
  )
}

export default Home
