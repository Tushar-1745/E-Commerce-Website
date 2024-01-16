import React from 'react'
import Maincarousel from '../../components/homecarousel/Maincarousel'
import HomeSectionCarousel from '../../components/homesectioncarousel/HomeSectionCarousel'

function Homepage() {
  return (
    <div>
        <Maincarousel/>

        <div><HomeSectionCarousel/></div>
    </div>
  )
}

export default Homepage
