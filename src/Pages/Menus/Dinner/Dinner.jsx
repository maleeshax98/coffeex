import React from 'react'
import Menu from '../../../Components/Menu'
import useGetMenu from '../../../hooks/useGetMenu'

export default function Dinner() {
  const { data } = useGetMenu("dinner")

  return (
    <div className='mt-[5px] p-[10px]'>
        <Menu data={data} menu={"Dinner"}/>
    </div>
  )
}
