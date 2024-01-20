import React from 'react'
import Maincarousel from '../../components/homecarousel/Maincarousel'
import HomeSectionCarousel from '../../components/homesectioncarousel/HomeSectionCarousel'
import { mens_jackets } from '../../../data/mens_jacket'

function Homepage() {
  return (
    <div>
        <Maincarousel />
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
          <div><HomeSectionCarousel data={mens_jackets} title={"men's jackets"}/></div>
          <div><HomeSectionCarousel data={mens_jackets} title={"men's kurta"}/></div>
          <div><HomeSectionCarousel data={mens_jackets} title={"men's shoes"}/></div>
        </div>
    </div>
  )
}

export default Homepage
