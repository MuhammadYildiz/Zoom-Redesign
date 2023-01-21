import React from 'react'

export default function PowerComponent({icon,title}) {
  return (
    <div className='max-h-36 border border-work-color  hover:border-zoom-blue px-3 py-10  m-2 text-3xl font-bold rounded-3xl flex flex-col justify-center items-center hover:shadow-blue-200 hover:shadow-2xl  hover:text-zoom-blue'>
        <h1>{icon}</h1>
        <p>{title}</p>
    </div>
  )
}
