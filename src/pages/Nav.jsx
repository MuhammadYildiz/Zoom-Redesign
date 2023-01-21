import React from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu} from 'react-icons/gi';
import { AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(true)


  return (
    <nav className=' flex justify-between h-20 shadow-sm items-center top-0 sticky bg-white z-20 '>
      <Link to="/" >
        <img className='mx-10' src="https://st2.zoom.us/static/6.3.10815/image/new/topNav/Zoom_logo.svg" alt="zoom-logo" />
      </Link>

        <div className={isOpen? 'hidden w-full sm:w-1/2  md:flex md:flex-row md:w-full md:mt-0 md:ml-10 md:justify-around':'flex flex-col mt-56 mr-[-50px] sm:mr-[-190px] md:mr-0 w-full   sm:w-1/2 text-center bg-white rounded-b-xl  md:flex md:flex-row md:w-full md:mt-0 md:ml-10 md:justify-around'}>
            <Link to="/Products" >
              <h1 className='mt-1 border hover:border-zoom-blue rounded-xl px-4 py-1 '>Products</h1>
            </Link>
            <Link to="/Solutions" >
              <h1 className='mt-1 border hover:border-zoom-blue rounded-xl px-4 py-1 '>Solutions</h1>
            </Link>
            <Link to="/Resources" >
                  <h1 className='mt-1 border hover:border-zoom-blue rounded-xl px-4 py-1 '>Resources</h1>
              </Link>
            <Link to="/PlansPricing" >
               <h1 className='mt-1 border hover:border-zoom-blue rounded-xl px-4 py-1 '>Plans & Pricing</h1>
             </Link>
        </div>

        <div className=' flex items-center justify-center mx-4' >
            <button className={isOpen ? 'block text-zoom-blue text-2xl md:hidden ':'hidden ' }onClick={()=>setIsOpen( prev=>!prev)}> 
            <GiHamburgerMenu/></button>
            <button className={isOpen ? 'hidden  ':'block text-zoom-blue text-3xl md:hidden '} onClick={()=>setIsOpen( prev=>!prev)} ><AiOutlineClose/> </button>
        </div>
    </nav>
  )
}
