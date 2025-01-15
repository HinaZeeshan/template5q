
import Bestproduct from '../../components/Pages/Bestproduct'
import Footer from '../../components/Footer'
import Oneproduct from '../../components/Pages/Oneproduct'

import ProductDetails from '../../components/Pages/Productdetail'
import Reacticon from '../../components/about/Reacticon '
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
