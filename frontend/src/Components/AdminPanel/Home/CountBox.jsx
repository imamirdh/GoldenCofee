import React from 'react'
import {AiOutlineArrowUp , AiOutlineArrowDown} from "react-icons/ai";


export default function CountBox(props) {
  return (
    <div className=' flex items-center justify-between
     bg-zinc-500 text-white
     dark:bg-zinc-700
    drop-shadow-lg
    lg:w-1/2
    h-20
    px-5
    rounded-lg
     font-MorabbaMedium'
    >
      <div className='flex items-center gap-5'>
        <div className='text-2xl text-orange-200'>{props.icon}</div>
        <p className='text-lg'>{props.title}:</p>
      </div>
       <div className='flex items-center gap-2'>
        <p className='font-DanaDemiBold text-xl'>{props.countproducts}</p>
        {/* <label htmlFor="" className='text-sm font-Dana'>محصول</label> */}
       </div>
    </div>
  )
}
