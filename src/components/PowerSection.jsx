import React from 'react'
import PowerComponent from './PowerComponent';
import { GiGraduateCap} from 'react-icons/gi';
import { TbBuildingBank} from 'react-icons/tb';
import { SiHackthebox} from 'react-icons/si';
import { FaCommentDollar} from 'react-icons/fa';
import { FaHospitalAlt} from 'react-icons/fa';
import { FaWineBottle} from 'react-icons/fa';
export default function PowerSection() {
  return (
    <div className='lg:flex justify-around p-10 mt-10  items-center'>
        <section className='lg:w-1/2  '>
            <h1 className=' text-gray-700 text-4xl font-bold pb-8 px-4'>Powering organizations across industries and geographies</h1> <br />
            <p className='text-2xl px-4  text-gray-600'>Zoom helps consolidate communications, connect people, and collaborate better together in the boardroom, classroom,operating room, and everywhere in between.
            </p>
            <div className=' text-center mt-20 mb-8'>
                <button className='text-center bg-blue-500 hover:bg-zoom-blue px-8 rounded-3xl py-3 text-white text-lg' type='button'>
                    Explore Industry Solutions
                </button>
            </div>
        </section>
        <div className='md:flex lg:w-1/2 justify-center  items-end '>
                <div className='md:w-1/2'>
                    <PowerComponent icon={<GiGraduateCap />} title={'Education'} />
                    <PowerComponent icon={<TbBuildingBank/>} title={'Government'} />
                    <PowerComponent icon={<SiHackthebox />} title={'Manufacturing'} />
                </div>
                <div className='md:w-1/2'>
                    <PowerComponent icon={<FaCommentDollar />} title={'Financial Services'} />
                    <PowerComponent icon={<FaHospitalAlt/>} title={'Healthcare'} />
                    <PowerComponent icon={<FaWineBottle/>} title={'Retail'} />
                </div>
                
        </div>
    </div>
  )
}
