import React from 'react'
import Herosection from './components/Herosection'
import Ourfeature from './components/Ourfeature'
import Aboutsection from './components/Aboutsection'
import Whoweare from './components/Whoweare'
import Productsection from './components/Productsection'
import Whychooseus from './components/Whychooseus'
import Testimonialsection from './components/TestimonialSection'
import Faqsection from './components/Faqsection'

const Page = () => {
  return (
    <div className='min-h-screen'>
      <Herosection />
      <Ourfeature />
      <Aboutsection />
      <Whoweare />
      <Productsection />
      <Whychooseus />
      <Testimonialsection />
      <Faqsection/>
    </div>
  )
}
export default Page;