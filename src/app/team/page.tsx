import Footer from '@/Components/Footer'
import FreeTrail from '@/Components/Team/FreeTrail'
import MeetOurTeam from '@/Components/Team/MeetOurTeam'
import Teamgallery from '@/Components/Team/Teamgallery'

import React from 'react'

const page = () => {
  return (
    <div>
      <Teamgallery/>
    <MeetOurTeam/>
    <FreeTrail/>
      <Footer/>
    </div>
  )
}

export default page
