import React from 'react'
import HomeSectionCard from '../homesectioncards/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button } from '@mui/material';

function HomeSectionCarousel() {
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5, itemsFit: 'contain' },
    };

    const items = [1, 1, 1, 1, 1].map((item) => <HomeSectionCard />)
    return (
        <div className=' px-4 lg:px-8'>
            <div className='relative p-5 border'>
                <AliceCarousel
                    items={items}
                    disableButtonsControls
                    infinite
                    responsive={responsive}
                    disableDotsControls
                />

                <Button variant='contained' className=' bg-white z-50' sx={{position: 'absolute', top:"8rem", 
                    right: '0rem', transform: 'translateX(50%) rotate(90deg)', bgcolor: 'white'}} aria-label='next'>
                    <ArrowBackIosNewIcon sx={{transform: "rotate(90deg)", color: 'black'}}/>
                </Button>

                <Button variant='contained' className=' bg-white z-50' sx={{position: 'absolute', top:"8rem", 
                    left: '0rem', transform: 'translateX(50%) rotate(-90deg)', bgcolor: 'white'}} aria-label='next'>
                    <ArrowBackIosNewIcon sx={{transform: "rotate(90deg)", color: 'black'}}/>
                </Button>
            </div>

        </div>
    )
}

export default HomeSectionCarousel