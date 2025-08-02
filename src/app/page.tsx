'use client'
import React from 'react'
import Navbar from './components/navbar/Navbar'
import HeroContent from './components/landingPage/HeroContent'
import CardCarousalParent from './components/homeCards/CardCarousalParent'
import Template from './components/homeCards/Template'
import SuperCard from './components/homeCards/SuperCard'

import AiInputCard from './components/homeCards/AiInputCard'
import Theme from './components/homeCards/Theme'
import Count from './components/homeCards/Count'
import Counter from './components/homeCards/Counter'


const page = () => {
  return (
    <div>
      <Navbar />
      <HeroContent />
      <CardCarousalParent />
      <Template />
      <Count />
      <SuperCard />
      <AiInputCard />
      <Theme />
      <Counter />
     
    </div>
  )
}

export default page