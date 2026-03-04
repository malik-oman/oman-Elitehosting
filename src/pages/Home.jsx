import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Pricing from '../components/Pricing'
import Service from '../components/Service'
import Support from '../components/Support'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <Pricing/>
      <Service/>
      <Support/>
    </div>
  )
}

export default Home