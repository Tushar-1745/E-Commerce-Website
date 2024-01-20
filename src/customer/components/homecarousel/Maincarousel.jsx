import React from 'react'
import { MainCarouselData } from './MainCarouselData'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

function Maincarousel() {

    // const items = MainCarouselData.map((item)=> <img className="cursor-pointer" 
    //               role='presentation' src = {item.image} alt=" "/>)
    const items = MainCarouselData.map((item, index) => (
      <img
          key={index}
          className="cursor-pointer"
          role='presentation'
          src={item.image}
          alt=" "
          style={{ width: '100%', height: '400px', objectFit: 'contain' }}
      />
  ));
  return (
    <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={500}
        infinite
    />
  )
}

export default Maincarousel