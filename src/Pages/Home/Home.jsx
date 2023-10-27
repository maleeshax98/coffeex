import React from 'react'

import './Home.css'
import SingleCard from '../../Components/SingleCard'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className=''>
        <div className='bg-[#F6EBDA]'>
            <div className='mt-[0px] md:mt-[70px] lg:mt-[0px] home p-[20px] flex flex-wrap justify-between items-center gap-4'>
                <div className='mt-[150px]  md:mt-[50px]'>
                    <h1 className='font-bold text-5xl text-center md:text-left'>Enjoy your <span className='text-[#FF902A]'> coffee <br />before </span> you start</h1>
                    <p className=' text-center md:text-left mt-[20px] font-light text-gray-500'>"Your Daily Perk: Welcome to Café – Where Coffee Dreams Come True!"</p>
                    <div className='flex gap-4 mt-[20px] justify-center md:justify-start'>
                        <Link to={"/menu"}>
                        <button className='bg-[#341900] font-semibold text-white p-[10px] rounded-md pl-[20px] pr-[20px]'> <span className='flex gap-2'>Early Order <img src="/assets/Plus.svg" alt="" /></span></button></Link>
                        <Link to={"/menu"}>
                        <button className='border-solid border-2 border-[#341900] text-[#341900] p-[10px] rounded-md pl-[20px] pr-[20px]'>Our Menu</button>
                        </Link>
                    </div>
                </div>
                <div className='mt-[150px]  md:mt-[50px]'>
                    <img src="/assets/headerlogo.png" alt="" />
                </div>
            </div>
        </div>
        <div className='section2 mt-[50px] p-[20px]'>
            <h1 className='text-gray-800 text-2xl font-semibold'>Popular This Week</h1>
            <hr  className='w-[150px] bg-[#FF902A] h-[5px] rounded-full'/>
            <div className='p-[20px] bg-[#F6EBDA] rounded-lg mt-[70px]'>
                <div className='flex flex-wrap gap-4 justify-center items-center mt-[-40px]'>
                    <SingleCard 
                        rating="45"
                        name="Butter Сroissant"
                        price="38$"
                        img="/assets/imgs/pngwing 3.png"
                    />
                    <SingleCard 
                        rating="45"
                        name="Butter Сroissant"
                        price="38$"
                        img="/assets/imgs/pngwing 6.png"
                    />
                    <SingleCard 
                        rating="45"
                        name="Butter Сroissant"
                        price="38$"
                        img="/assets/imgs/pngwing 7.png"
                    />
                </div>
            </div>
        </div>

        <div className='section2 mt-[50px] p-[20px] relative'>
            <h1 className='text-gray-800 text-2xl font-semibold'>How to use pre order service</h1>
            <hr  className='w-[150px] bg-[#FF902A] h-[5px] rounded-full'/>
            <div className='flex flex-wrap justify-center items-center gap-4 mt-[50px]'>

                <div className='how-to-card text-center'>
                    <center>
                        <img className='w-[50%]' src="/assets/web_imgs/1.png" alt="" />
                    </center>
                    <h1 className='font-semibold mt-[10px]'>Pre-order online</h1>
                    <p className='mt-[10px] text-[11px] text-[#45454570]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>

                <div className='how-to-card text-center'>
                    <center>
                        <img className='' src="/assets/web_imgs/2.png" alt="" />
                    </center>
                    <h1 className='font-semibold mt-[10px]'>Get your coffee</h1>
                    <p className='mt-[10px] text-[11px] text-[#45454570]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>

                <div className='how-to-card text-center'>
                    <center>
                        <img className='w-[50%]' src="/assets/web_imgs/3.png" alt="" />
                    </center>
                    <h1 className='font-semibold mt-[10px]'>Enjoy your coffee</h1>
                    <p className='mt-[10px] text-[11px] text-[#45454570]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                </div>

            </div>
            <div>
                <img className='hidden md:block w-[350px] -z-10 mt-[-80px]  absolute top-0 right-0' src="/assets/8.png" alt="" />
            </div>
            {/* <div>
                <img className='hidden md:block w-[350px] z-10 mt-[-80px]  absolute bottem-0 left-0' src="/assets/8.png" alt="" />
            </div> */}
        </div>

        <div className='bg-[#F6EBDA]  mt-[80px]'>
            <div className='about-section p-[50px]  '>
                <div className='flex flex-wrap justify-center items-center gap-8  '>
                    <div>
                        <img className='w-[250px] md:w-auto' src="/assets/abt.png" alt="" />
                    </div>
                    <div className='text-left max-w-[400px]'>
                        <h1 className='text-black text-2xl font-semibold'>About Us</h1>
                        <hr  className='w-[150px] bg-[#FF902A] h-[5px] rounded-full'/>
                        <h1 className='mt-[20px]  text-2xl font-bold text-[#341900]'>We provide quality and tasty <span className='text-[#FF902A]'> coffee </span> and <span className='text-[#FF902A]'> foods </span></h1>
                        <p className='mt-[20px] text-[12px] text-[#808080]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Link to={"/menu"}>
                         <button className='bg-[#341900] mt-[20px]  text-white p-[5px] text-[15px] rounded-md pl-[40px] pr-[40px]'>Our Menu </button>
                        </Link>

                    </div>
                </div>
            </div>
        
        </div>



        <section className='section2 mt-[50px] p-[20px] relative' id="menu">
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



        
        <div className='section2 mt-[50px] p-[20px] relative'>
            <div>
                <h1 className='text-gray-800 text-2xl font-semibold'>Special Coffees</h1>
                <hr  className='w-[150px] bg-[#FF902A] h-[5px] rounded-full'/>
            </div>
            <div className='flex flex-wrap gap-[20px] items-center  mt-[20px] justify-center'>
                    <div className='flex flex-wrap gap-[20px] justify-center items-center'>
                        <img className='w-[320px]' src="/assets/imgs/Iced_Cafe_Mocha 1.png" alt="" />
                        <div className='max-w-[450px]'>
                            <h1 className='font-bold text-2xl '>Café Mocha</h1>
                            <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptate voluptatibus odio quis, minima deleniti laboriosam quas repellendus. Quasi enim quos voluptas omnis quibusdam sint, aliquam suscipit ex cum repellat.</p>
                            <img src="/assets/icons/starts.png" className='mt-[10px]' width={100} alt="" />
                        </div>
                    </div>
            </div>
            <div className='flex flex-wrap flex-row-reverse gap-[20px]   mt-[20px]  items-center justify-center'>
                    <div className='flex flex-wrap flex-row-reverse gap-[20px] justify-center items-center'>
                        <img className='w-[320px]' src="/assets/imgs/flat-white-d8ada0f 1.png" alt="" />
                        <div className='max-w-[450px]'>
                            <h1 className='font-bold text-2xl '>Café Mocha</h1>
                            <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptate voluptatibus odio quis, minima deleniti laboriosam quas repellendus. Quasi enim quos voluptas omnis quibusdam sint, aliquam suscipit ex cum repellat.</p>
                            <img src="/assets/icons/starts.png" className='mt-[10px]' width={100} alt="" />
                        </div>
                    </div>
            </div>
            <div className='flex flex-wrap gap-[20px] items-center mt-[20px] justify-center'>
                    <div className='flex flex-wrap gap-[20px] justify-center items-center'>
                        <img className='w-[320px]' src="/assets/imgs/Cortadito-1 1.png" alt="" />
                        <div className='max-w-[450px]'>
                            <h1 className='font-bold text-2xl '>Café Mocha</h1>
                            <p className='text-gray-400 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi voluptate voluptatibus odio quis, minima deleniti laboriosam quas repellendus. Quasi enim quos voluptas omnis quibusdam sint, aliquam suscipit ex cum repellat.</p>
                            <img src="/assets/icons/starts.png" className='mt-[10px]' width={100} alt="" />
                        </div>
                    </div>
            </div>
        </div>

        <div className='section2 mt-[250px] p-[20px] relative'>
            <center>
                <div className='relative'>
                    <center>
                        <h1 className='text-white font-bold text-2xl z-40'>Subscribe to our newsletter</h1>
                        <div className='inline-block
                        '>
                        <input type="text" className='rounded-full bgwhite outline-none border-2 text-gray-600 p-[10px] text-sm ' placeholder='maleesha@xmartcode.com' />
                        <button className='bg-[#341900] mt-[20px]  text-white text-[15px] rounded-lg p-[10px] ml-[10px]'>Subscribe </button>
                        </div>
                        <img src="/assets/imgs/Newsletter.png" className='max-w-auto md:max-w-[750px]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[-50]' alt="" />
                    </center>
                </div>
            </center>
        </div>
    </div>
  )
}
