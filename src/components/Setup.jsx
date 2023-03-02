import React from 'react'
import Iphone from '../assets/iPhone13Pro.png'

const Setup = () => {
  return (
    <div className='min-[800px]:ml-24 xl:ml-32 min-[1640px]:ml-64 lg:ml-32 ml-8 mt-[180px] min-[840px]:ml-12 xl:mt-[250px] justify-center'>

    <div className='xl:flex flex-none lg:flex sm:grid sm:justify-center min-[840px]:grid-none min-[840px]:justify-start min-[840px]:flex'>


     <img src={Iphone} alt="Iphone" className="min-[800px]:w-[50%] xl:w-[22%] lg:w-[28%] min-[840px]:w-[30%] xl:h-[20%] w-[70%] sm:w-[50%] sm:h-[80%]  h-[70%] relative"/>
     
{/* text */}
     <div className=''>
      <h1 className='text-white xl:ml-32 lg:ml-20 xl:text-4xl min-[840px]:ml-8 text-[24px] sm:mt-[0px] lg:mt-0 min-[840px]:mt-0 xl:mt-0 mt-[50px] font-normal '>Start Trading now with these simple steps</h1>
     
      <div className='xl:ml-32'>
         <h1 className='xl:text-2xl text-[20px] lg:ml-20 xl:ml-0 min-[840px]:ml-8  min-[1640px]:mt-[100px] relative xl:mt-[50px] mt-[50px] text-white font-medium'>1. Setting up Account</h1>
         <h2 className='xl:text-1xl text-[14px] lg:ml-20 xl:ml-0 min-[840px]:ml-8 relative mt-[20px] text-[#cccccc] max-w-[280px] font-light'>Get your account verified by providing a few Identity proofs and activate your account instantly.</h2>
              </div>

              
      <div className='xl:ml-32'>
         <h1 className='xl:text-2xl text-[20px] lg:ml-20 xl:ml-0 min-[840px]:ml-8 relative min-[1640px]:mt-[80px] mt-[40px] text-white font-medium'>2. Add money to your Wallet</h1>
         <h2 className='xl:text-1xl text-[14px] lg:ml-20 xl:ml-0 min-[840px]:ml-8 relative mt-[20px] text-[#cccccc] max-w-[280px] font-light'>Add funds to your crypto wallet to start trading crypto. You can add money with a variety of payment methods.</h2>
              </div>

              
      <div className='xl:ml-32'>
         <h1 className='xl:text-2xl text-[20px] xl:ml-0 min-[840px]:ml-8 relative min-[1640px]:mt-[80px] lg:ml-20  mt-[40px] text-white font-medium'>3. Start trading</h1>
         <h2 className='xl:text-1xl text-[14px] xl:ml-0  min-[840px]:ml-8 relative mt-[20px] text-[#cccccc] lg:ml-20 max-w-[280px] font-light'>You're good to go! Buy/sell crypto, set up recurring buys for your investments.</h2>
              </div>

    </div>

    </div>
      
    </div>
  )
}

export default Setup