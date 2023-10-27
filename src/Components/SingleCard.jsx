import React, { useState } from 'react'
import CenteredModal from './Modal';
import useAddOrder from '../hooks/useAddOrder';

export default function SingleCard({ rating, name, price, img, des}) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [uName, setUName ] = useState("")
    const [items, setItems ] = useState("")

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const { error, id, add } = useAddOrder()


    const addOrder = async (name, item) => {
        await add(name, item, items)
    }


    return (
        <div>
            <div className='bg-white p-[20px] rounded-lg border-solid border-4 border-[#341900] max-w-[298px]'>
                            <div>
                                <div className='bg-white p-[5px] rounded-full flex w-[30%] gap-2 border-solid border-4 border-[#F8F7F7]'>
                                    <img src="/assets/Star.svg" alt="" />
                                    <h1>{ rating }</h1>
                                </div>
                            </div>
                            <div className='flex justify-center w-[250px] h-[150px] overflow-hidden rounded-xl relative mt-[10px]'>
                                <img className='object-cover w-full h-full' src={img} alt="" />
                            </div>
                            <div className='flex flex-col gap-[5px] font-semibold mt-[20px]'>
                                <h1>{ name }</h1>
                                <p className='font-light text-xs text-gray-400'>{ des }</p>
                                <h1 className=' text-orange-400'>{price}</h1>
                            </div>
                            <div className='flex justify-center mt-[20px]'>
                                <button  onClick={openModal} className='bg-[#341900] text-white p-[5px] rounded-md pl-[20px] pr-[20px]'> <span className='flex gap-2 text-[15px] items-center'>Early Order <img src="/assets/Plus.svg" alt="" /></span></button>
                            </div>
                        </div>
                        <CenteredModal isOpen={modalIsOpen} onRequestClose={closeModal}>
                            <div className='flex flex-col gap-[5px] font-semibold mt-[20px]'>
                                <h1>{ name }</h1>
                                <p className='font-light text-xs text-gray-400'>{ des }</p>
                                <h1 className=' text-orange-400'>{price}$</h1>
                                { error && <h1 className=' text-orange-400 font-semibold mt-[5px]'>{error}</h1>}
                            </div>
                            { !id ? (
                                <div className='mt-[10px]'>
                                    
                                    <p className='font-light text-xs text-gray-400'>Enter Your Name</p>
                                    <input type="text" onChange={(e) => setUName(e.target.value) } value={uName} className=' font-semibold rounded-lg outline-none border-2 p-2  w-[100%]' /><br />

                                    <p className='font-light text-xs text-gray-400 mt-[5px]'>How many items</p>
                                    <input type="text" onChange={(e) => setItems(e.target.value) } value={items} className=' font-semibold rounded-lg outline-none border-2 p-2  w-[100%]' /><br />
                                    <button onClick={() => {addOrder( uName,name) }}  className='bg-[#341900] text-white p-[5px] rounded-md pl-[20px] pr-[20px] mt-[10px] w-[100%]'> Order Now</button>
                                </div>
                            ) : (
                                <div className='mt-[10px]'>
                                    <button  className='bg-[#341900] text-white p-[5px] rounded-md pl-[20px] pr-[20px] mt-[10px] w-[100%]'> 
                                        Your order id is { id }
                                    </button>
                                    <p className='font-light text-xs text-gray-400'>Go to the shop and say this id or show it.</p>

                                </div>
                            
                            )}
                            <button onClick={closeModal} className='mt-[10px] text-orange-400'>Close</button>
                        </CenteredModal>
        </div>
  )
}
