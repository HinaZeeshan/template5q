import Facts from '@/Components/Pricing/Facts'
import Footer from '@/Components/Footer'

import Reacticon from '@/Components/about/Reacticon '
import React from 'react'
import PricingSection from '@/Components/Pricing/Pricing'

const page = () => {
  return (
    <div>
      <PricingSection/>
      <Reacticon/>
      <Facts/>
      <Footer/>
    </div>
  )
}

export default page
