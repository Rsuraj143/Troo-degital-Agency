import React from 'react'
import Blogs from '../Components/Blogs/Blogs'
import ClientFeedback from '../Components/ClientFeedback/ClientFeedback'
import Comparison from '../Components/Comparison/Comparison'
import ContactComponent from '../Components/ContactComponent/ContactComponent'
import Footer from '../Components/Footer/Footer'
import NavBar from '../Components/NabBar/NavBar'
import PortfolioComponent from '../Components/Portfolio/PortfolioComponent'
import PricingCard from '../Components/PriciningCard/PricingCard'

import ServiceComponent from '../Components/Service/ServiceComponent'
import TeamComponent from '../Components/Team/TeamComponent'


const Service = () => {
  return (
    <div>
      <NavBar/>
      <ServiceComponent/>
      <PortfolioComponent/>
      <Comparison/>
      <TeamComponent/>
      <ClientFeedback/>
      <PricingCard/>
      <Blogs/>
      <ContactComponent/>
      <Footer/>
    </div>
  )
}

export default Service