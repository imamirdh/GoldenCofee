import React from 'react'

function CategoryItem({title , img}) {
  return (
    <div className='lg:w-[200px] lg:h-[238px] w-[100px] h-[120px] text-center dark:text-white '>
        <img src={img} alt="" className='lg:w-[200px] lg:h-[200px] w-[100px] h-[100px] lg:mb-[10px] mb-[6px] mx-auto'/>
        <p className='lg:text-xl text-[14px] lg:leading-7 leading-5 font-bold'>{title}</p>
    </div>
  )
}

export default CategoryItem