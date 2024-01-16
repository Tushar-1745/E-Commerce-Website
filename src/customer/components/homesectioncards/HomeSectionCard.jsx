import React from 'react'

function HomeSectionCard() {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-large shadow-lg overflow-hidden w-{15rem} mx-3'>
        <div className='h-{12rem} w={10rem}'>
            <img className='object-cover object-top w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqbQA9a8s8fQXyjevWYzKSS41BrhqwJ6oOw&usqp=CAU" alt=''/>
        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Nofilter</h3>
            <p className='mt-2 text-sm text-gray-500'>Men solid pure cotton straight kurta</p>
        </div>
    </div>
  )
}

export default HomeSectionCard