import React from 'react'
import "./Menus.css"
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div>
        <section className='section2 mt-[150px] p-[20px] relative' id="menu">
                <div>
                    <h1 className='text-gray-800 text-2xl font-semibold'>Select a menu</h1>
                    <hr  className='w-[150px] bg-[#FF902A] h-[5px] rounded-full'/>
                </div>
                <div className='flex flex-wrap gap-[20px] items-center mt-[25px] justify-center'>
                    <Link to={'/menus/breakfast'}>
                        <img src="/assets/icons/breakfast.png" width={150} alt="" />
                    </Link>
                    <Link to={'/menus/lunch'}>
                        <img src="/assets/icons/Dinner.png" width={150} alt="" />
                    </Link>
                    <Link to={'/menus/dinner'}>
                        <img src="/assets/icons/Lunch.png" width={150} alt="" />
                    </Link>

                </div>
        </section>
    </div>
  )
}
