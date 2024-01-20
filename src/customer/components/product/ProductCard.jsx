import React from 'react'
import productCard from './ProductCard.css'

function ProductCard({ product }) {
    return (
        <div className='productCard w-[15rem] m-3 transition-all cursor-pointer'>
            <div className='h-[20rem]'>
                <img className='h-full w-full object-cover object-left-top'
                    src={product.imageurl}
                    alt="" />
            </div>
            <div className='textPart bg-white p-3'>
                <div>
                    <p className='font-bold opacity-60'>{product.brand}</p>
                    <p>Casuaal PUff sleeves solid women white top</p>
                </div>
                <div className='flex items-center space-x-2'>
                    <p className='font-semibold'>199</p>
                    <p className='line-through opacity-50'>1999</p>
                    <p className='text-green-600 font-semibold'>70% off</p>
                </div>
            </div>

        </div>
    )
}

export default ProductCard