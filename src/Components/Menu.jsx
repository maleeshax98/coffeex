import React from 'react'
import SingleCard from './SingleCard'
import "./Menus.css"

export default function Menu({ data, menu }) {
  return (
    <div className='section mt-[150px]'>
        <h1 className='text-gray-800 text-2xl font-semibold'>{menu} Menu</h1>
        <hr  className='w-[150px] bg-[#FF902A] h-[5px] rounded-full'/>
        
         <div className='flex flex-wrap gap-4 justify-center items-center mt-[30px]'>
            { data.map((doc, index) => (
                <div key={index}>
                    <SingleCard 
                        rating={doc.Rating}
                        name={doc.Item}
                        price={doc.Price}
                        img={doc.img}
                        des={doc.Description}
                    />
                </div>
            ))}
            
        </div>
    </div>
  )
}
