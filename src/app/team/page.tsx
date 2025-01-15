import Footer from '@/components/Footer'
import FreeTrail from '@/components/Team/FreeTrail'
import MeetOurTeam from '@/components/Team/MeetOurTeam'
import Teamgallery from '@/components/Team/Teamgallery'

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
