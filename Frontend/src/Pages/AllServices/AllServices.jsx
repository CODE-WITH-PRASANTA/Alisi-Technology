import React from 'react'
import AllServicesBreadcrum from '../../Components/AllServicesBreadcrum/AllServicesBreadcrum'
import AllServicesFeatures from '../../Components/AllServicesFeatures.jsx/AllServicesFeatures'
import AllServicesCTA from '../../Components/AllServicesCTA/AllServicesCTA'
import AllServicesPlanPriceing from '../../Components/AllServicesPlanPriceing/AllServicesPlanPriceing'
import AllServicesBrand from '../../Components/AllServicesBrand/AllServicesBrand'

const AllServices = () => {
  return (
    <div>
      <AllServicesBreadcrum/>
      <AllServicesFeatures/>
      <AllServicesCTA/>
      <AllServicesPlanPriceing/>
      <AllServicesBrand/>
    </div>
  )
}

export default AllServices
