import React from 'react'
import AboutBreadcrum from '../../Components/AboutBreadcrum/AboutBreadcrum'
import AboutInovation from '../../Components/AboutInovation/AboutInovation'
import Aboutbox from '../../Components/Aboutbox/Aboutbox'
import AboutWhychoose from '../../Components/AboutWhychoose/AboutWhychoose'
import AboutTeam from '../../Components/AboutTeam/AboutTeam'
import AboutTestimonial from '../../Components/AboutTestimonial/AboutTestimonial'
import AboutFaq from '../../Components/AboutFaq/AboutFaq'
import AboutSlider from '../../Components/AboutSlider/AboutSlider'

const About = () => {
  return (
    <div>
     <AboutBreadcrum />
      <AboutWhychoose />
     <AboutInovation />
     <Aboutbox />
     <AboutTeam />
     <AboutTestimonial />
     <AboutFaq />
     <AboutSlider />
    
    </div>
  )
}

export default About
