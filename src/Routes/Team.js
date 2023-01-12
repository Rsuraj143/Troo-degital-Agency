import React from 'react'
import Blogs from '../Components/Blogs/Blogs'
import ClientFeedback from '../Components/ClientFeedback/ClientFeedback'
import ContactComponent from '../Components/ContactComponent/ContactComponent'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NabBar/NavBar'
import PricingCard from '../Components/PriciningCard/PricingCard'
import TeamComponent from '../Components/Team/TeamComponent'

const Team = () => {
  return (
    <div>
      <NavBar/>
      <TeamComponent/>
      <ClientFeedback/>
      <PricingCard/>
      <Blogs/>
      <ContactComponent/>
      <Footer/>
    </div>
  )
}

export default Team