import React from 'react'
import Maincarousel from '../../components/homecarousel/Maincarousel'
import HomeSectionCarousel from '../../components/homesectioncarousel/HomeSectionCarousel'

function Homepage() {
  return (
    <div>
        <Maincarousel />
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <div><HomeSectionCarousel/></div>
          <div><HomeSectionCarousel/></div>
        </div>
    </div>
  )
}

export default Homepage
