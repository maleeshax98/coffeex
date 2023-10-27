import React from 'react'
import Menu from '../../../Components/Menu'
import useGetMenu from '../../../hooks/useGetMenu';

export default function Breakfast() {

  const { data } = useGetMenu("breakfast")

  return (
    <div className='mt-[5px] p-[10px]'>
        <Menu data={data} menu={"Breakfast"}/>
    </div>
  )
}
