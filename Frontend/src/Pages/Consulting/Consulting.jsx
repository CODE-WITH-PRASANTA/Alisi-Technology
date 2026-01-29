import React from 'react'
import ConsultingBreadcrum from '../../Components/ConsultingBreadcrum/ConsultingBreadcrum'
import ConsultingFeatures from '../../Components/ConsultingFeatures/ConsultingFeatures'
import ConsultingCTA from '../../Components/ConsultingCTA/ConsultingCTA'
import ConsultingPlanPricing from '../../Components/ConsultingPlanPricing/ConsultingPlanPricing'
import ConsultingBrand from '../../Components/ConsultingBrand/ConsultingBrand'

const Consulting = () => {
  return (
    <div>
     <ConsultingBreadcrum />
     <ConsultingFeatures />
     <ConsultingCTA />
     <ConsultingPlanPricing />
     <ConsultingBrand />
    </div>
  )
}

export default Consulting
