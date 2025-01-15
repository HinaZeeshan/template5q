import About from '@/Components/about/About'
import About2 from '@/Components/about/About2'
import Footer from '@/Components/Footer'
import Likes from '@/Components/about/Likes'
import Reacticon from '@/Components/about/Reacticon '
import Team from '@/Components/about/Team'
import Views from '@/Components/about/Views'
import React from 'react'

const page = () => {
  return (
    <div>
      <About/>
      <Likes/>
      <Views/>
      <Team/>
      <Reacticon/>
      <About2/>
      <Footer/>
    </div>
  )
}

export default page
