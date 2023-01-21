import React from 'react'

export default function HeroSection() {
  return (
    <section className='md:flex w-screen min-h-full '>
      <div className='w-full md:w-3/6 m-auto  p-6 md:p-10 lg:p-16 pb-8   '>
        <h1 className='text-7xl  tracking-wider mt-10 '>One Platform <br /> to
            <span className='text-zoom-blue '> connect</span>
         </h1>
        <p className='text-lg mt-14 font-semibold tracking-wider'>
            Bring teams together, reimagine workspaces, engage new audiences, and delight your customers — all on the Zoom platform you know and love.
        </p>
        <div className=' mt-16 text-center '>
            <button className='bg-blue-500 hover:bg-zoom-blue px-8 rounded-3xl py-3 text-white text-lg' type='button'>Plans & Pricing</button>
        </div>
      </div>

      <div className='w-full md:w-3/6 m-auto p-8 bg-slate-50  '>
        <img className=' h-[450px] rounded-3xl w-auto ' src="https://explore.zoom.us/media/media-anywhere-workforce.png" alt="zoom-connect" />
      </div>
    </section>
  )
}
