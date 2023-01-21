import React from 'react'
import { BsLink45Deg} from 'react-icons/bs';

export default function WorkSection() {
  return (
    <div className='relative  bg-work-color md:flex justify-around items-center '>
        <div className='mx-auto my-4 py-4 w-80 md:py-0 md:w-96 md:my-[-20px] '>
            <img className='w-auto' src="/src/assets/zoom-big.png" alt="" />
        </div>
        <div className=' md:w-2/4  p-6'>
            <h2 className='text-blue-200 text-4xl font-sans ' >Make work less work</h2> <br />
            <p className='font-sans text-blue-200  '>Securely connect and collaborate so you can work better together. Simple to manage and delightful to use, Zoom powers the modern workforce.</p> <br />
            <a href="#">    
                <h3 className='font-body  hover:text-white  text-blue-200  text-xl flex items-center  '>
                Discover the Possibilities
                <span className=' px-1 text-2xl'><BsLink45Deg/></span>
                </h3>
            </a>
        </div>
    </div>
  )
}
