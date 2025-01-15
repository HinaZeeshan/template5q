
import Bestproduct from '@/Components/Pages/Bestproduct'
import Footer from '@/Components/Footer'
import Oneproduct from '@/Components/Pages/Oneproduct'

import ProductDetails from '@/Components/Pages/Productdetail'
import Reacticon from '@/Components/about/Reacticon '
import React from 'react'

const page = () => {
  return (
    <div>
      <ProductDetails/>
      <Oneproduct/>
      <Bestproduct/>
      <Reacticon/>
      <Footer/>
    </div>
  )
}

export default page
