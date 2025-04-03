import React from 'react'
import Services from './components/Services'
import OurServicesSection from './components/Ourservices'
import Standout from './components/Standout'
import Whoisfor from './components/Whoisfor'
import FaqSection from '../home/components/Faqsection'
const page = () => {
  return (
    <div>
      <Services />
      <OurServicesSection />
      <Standout />
      <Whoisfor />
      <FaqSection />
    </div>
  )
}
export default page;