import React from 'react'
import Microsoft from '../assets/logos_microsoft.png'
import Binance from '../assets/Group 152.png'
import Opensea from '../assets/Group 94.png'
import Arcadian from '../assets/Group 153.png'
import Ripple from '../assets/Group 154.png'
import Ethereum from '../assets/Group 155.png'
import Bitsquare from '../assets/bitsquare.png'
import coinbase from '../assets/Vector.png'



const Investors = () => {
  return (
    <div className='min-[840px]:ml-0 xl:mt-[250px] mt-[180px] lg:ml-24 lg:text-left lg:justify-start lg:grid-none sm:ml-0 sm:text-center sm:justify-center sm:grid xl:ml-32 min-[1640px]:ml-64 ml-8'>
        <h1 className='text-white xl:text-4xl sm:text-[28px] font-medium text-[24px]'>Our Range of Investors and Partners</h1>

    <div className='hidden xl:block'>
        <div className='xl:flex xl:mt-[100px] mt-[60px]'>

        <img src={Microsoft} alt="" className=" xl:w-[10%] xl:h-[10%]"/>
        <img src={Binance} alt="" className=" xl:ml-48  xl:mt-0 xl:w-[10%] xl:h-[10%] "/>
        <img src={Opensea} alt="" className=" xl:ml-48  xl:mt-0 xl:w-[10%] xl:h-[10%] "/>
        <img src={Arcadian} alt="" className="xl:ml-48  xl:mt-0  xl:w-[10%] xl:h-[10%] "/>
       
        </div>


        <div className=' xl:flex xl:mt-[100px] mt-20'>

        <img src={Ripple} alt="" className=" xl:w-[10%] xl:h-[10%] "/>
        <img src={Ethereum} alt="" className="xl:ml-48 xl:mt-0 xl:w-[10%] xl:h-[10%] "/>
        <img src={Bitsquare} alt="" className=" xl:ml-48 xl:mt-0 mt-20 xl:w-[10%] xl:h-[10%] "/>
        <img src={coinbase} alt="" className=" xl:ml-48  xl:mt-0 xl:w-[10%] xl:h-[10%] "/>
        </div>

        </div>

        <div className='xl:hidden block'>

          <div className='flex min-[840px]:justify-center lg:ml-0 sm:ml-[80px] min-[840px]:ml-[80px] '>

        <div className=''>
        <img src={Microsoft} alt="" className="  mt-[100px]  w-[70%] "/>
        <img src={Binance} alt="" className= "  mt-[80px] w-[70%]  "/>
        <img src={Opensea} alt="" className="  mt-[80px] w-[70%] "/>
        <img src={Arcadian} alt="" className="  mt-[80px] w-[70%]  "/>
        </div>

        <div className=''>
        <img src={Ripple} alt="" className=" mt-[100px] sm:w-[60%] min-[840px]:w-[60%] w-[70%] ]"/>
        <img src={Ethereum} alt="" className=" mt-[80px] w-[70%]  "/>
        <img src={Bitsquare} alt="" className=" mt-[80px] w-[70%] ]"/>
        <img src={coinbase} alt="" className=" mt-[80px] w-[70%]  "/>
        </div>

        </div>

        </div>


        </div>
 
  )
}

export default Investors