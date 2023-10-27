import React from 'react'

export default function Footer() {
  return (
    <div className='mt-[350px]'>
        <footer className="bg-white rounded-lg shadow ">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a href="https://xmartcode.com/" className="flex items-center mb-4 sm:mb-0">
                    <img src="/assets/logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">CofeeX</span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                    </li>
                    <li>
                        <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center ">© 2023 <a href="https://xmartcode.com/" className="hover:underline">XmartCode™</a>. All Rights Reserved.</span>
        </div>
    </footer>

    </div>
  )
}
