import React from 'react'
import Reviews from '../assets/Group 162.png'
import Reviewa from '../assets/Reviewa.png'
import Reviewb from '../assets/Reviewb.png'
import Reviewc from '../assets/Reviewc.png'
import Reviewd from '../assets/Reviewd.png'

const Feedback = () => {
  return (
    <div>
    <div className='sm:ml-0 sm:text-center sm:justify-center sm:grid sm:text-[28px] font-medium
                     min-[840px]:ml-0  min-[840px]:text-center  min-[840px]:justify-center  min-[840px]:grid
                    lg:ml-24 lg:text-left lg:justify-start lg:grid-none min-[800px]:ml-24 xl:ml-32 min-[1640px]:ml-64 ml-8 xl:mt-[250px] mt-[180px]'>
    <h1 className='text-white xl:text-4xl text-[24px]'>What People say about us</h1>
    <h2 className='text-white xl:text-[20px] text-[16px] font-extralight mt-[30px]'>Some of our user’s feedbacks and reviews from all over the World!</h2>
    </div>

    <div className='xl:ml-32 min-[1640px]:ml-64 ml-0'>
    <img src={Reviews} alt="" className="xl:w-[80%] xl:h-[80%] xl:mt-[100px] hidden xl:block mt-[60px]"/>
    </div>

    <div className=' xl:hidden min-[840px]:justify-center sm:justify-center lg:ml-24 lg:text-left lg:justify-start lg:grid-none flex'>
    <img src={Reviewa} alt="" className="min-[840px]:ml-0 sm:ml-0 min-[840px]:w-[30%] min-[840px]:h-[30%] ml-8 w-[40%] mt-[60px]"/>
    <img src={Reviewb} alt="" className="min-[840px]:ml-24  min-[840px]:w-[30%] min-[840px]:h-[30%] ml-8 w-[40%] mt-[60px]"/>
    </div>

    
    <div className='xl:hidden min-[840px]:justify-center sm:justify-center lg:ml-24 lg:text-left lg:justify-start lg:grid-none flex'>
    <img src={Reviewc} alt="" className="min-[840px]:ml-0 sm:ml-0 min-[800px]:w-[30%] min-[800px]:h-[30%] ml-8 w-[40%] mt-[60px]"/>
    <img src={Reviewd} alt="" className="min-[840px]:ml-24 min-[800px]:w-[30%] min-[800px]:h-[30%] ml-8 w-[40%] mt-[60px]"/>
    </div>

    </div>
  )
}

export default Feedback