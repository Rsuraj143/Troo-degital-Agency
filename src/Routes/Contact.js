import React from 'react'
import NavBar from '../Components/NabBar/NavBar'

import ContactComponent from '../Components/ContactComponent/ContactComponent'
import Footer from '../Components/Footer/Footer'

const Contact = () => {
  return (
    <div>
        <NavBar/>
       <ContactComponent/>
       <Footer/>
    </div>
  )
}

export default Contact