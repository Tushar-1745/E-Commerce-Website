import React, { useState } from 'react'
import HomeSectionCard from '../homesectioncards/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button } from '@mui/material';
import { mens_jackets } from '../../../data/mens_jacket';

const HomeSectionCarousel=({data, title})=> {

    const [activeIndex, setActiveIndex]=useState(0);
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        // 1024: { items: 5, itemsFit: 'contain' },
        1024: {items: 5}
    };

    // const slidePrevious = ()=>setActiveIndex(-1);
    // const slideNext = ()=>setActiveIndex(+1);
    const slidePrevious = () => setActiveIndex(activeIndex-1);
    const slideNext = () => setActiveIndex(activeIndex+1);

    const syncActiveIndex=({item})=>setActiveIndex(item)

    const items = data.map((item) => <HomeSectionCard product={item}/>)
    return (
        <div className=' px-4 lg:px-8 border'>
            <h2 >{title}</h2>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    responsive={responsive}
                    disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />

                {activeIndex !== 0 && <Button 
                    variant='contained' 
                    className=' bg-white z-50'
                    onClick={slidePrevious} 
                    sx={{
                        position: 'absolute', 
                        top: "12rem",
                        left: '0rem', 
                        transform: 'translateX(-50%) rotate(-90deg)', 
                        bgcolor: 'white'
                    }} 
                    aria-label='next'
                    >
                    <ArrowBackIosNewIcon 
                        sx={{ transform: "rotate(90deg)", color: 'black' }} 
                    />
                </Button>}

                {activeIndex !== items.length-5 && <Button 
                    variant='contained' 
                    className=' bg-white z-50' 
                    onClick={slideNext}
                    sx={{
                        position: 'absolute', 
                        top: "12rem",
                        right: '0rem', 
                        transform: 'translateX(50%) rotate(90deg)', 
                        bgcolor: 'white'
                    }}
                    aria-label='next'
                >
                    <ArrowBackIosNewIcon 
                        sx={{ transform: "rotate(90deg)", color: 'black' }} 
                    />
                </Button>}
            </div>

        </div>
    )
}

export default HomeSectionCarousel