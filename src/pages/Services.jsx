import React from 'react'
import Emergency from '../services comp/Emergency'
import Booking from '../services comp/Booking'
import Blood from '../services comp/Blood'
import First from '../services comp/First'
import Sos from '../services comp/Sos'
import Footer from "../Home comp/Footer";
const Services = () => {
  return (
      <div>
          <h2 className='text-center mt-5'>Our Services </h2>
          <Emergency />
          <Booking />
          <Blood />
          <First />
          <Sos />
          <Footer/>
    </div>
  )
}

export default Services