import React from 'react'
import AboutComponent from '../Components/About/AboutComponent'
import Blogs from '../Components/Blogs/Blogs'
import ClientFeedback from '../Components/ClientFeedback/ClientFeedback'
import Comparison from '../Components/Comparison/Comparison'
import ContactComponent from '../Components/ContactComponent/ContactComponent'
import Footer from '../Components/Footer/Footer'
import HeroImg from '../Components/HeroImg/HeroImg'
import NavBar from '../Components/NabBar/NavBar'
import PortfolioComponent from '../Components/Portfolio/PortfolioComponent'
import PricingCard from '../Components/PriciningCard/PricingCard'


import ServiceComponent from '../Components/Service/ServiceComponent'
import TeamComponent from '../Components/Team/TeamComponent'



const Home = () => {
  return (
    <div>
      <NavBar/>
      <HeroImg />
      <AboutComponent/>
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

export default Home