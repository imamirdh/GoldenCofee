import React from 'react'

function ServicesBox({title , subtitle , children}) {
  return (
    <div className='flex items-center gap-4  lg:h-[73px] '>
        <div className="svg lg:h-[73px]">
            {children}
        </div>
        <div className='body text-zinc-700 dark:text-white'>
        <h4 className='text-lg leading-6 font-DanaMedium'>{title }</h4>
        <p className='font-dana text-[14px] leading-6'>{subtitle}</p>
        </div>
    </div>
  )
}

export default ServicesBox