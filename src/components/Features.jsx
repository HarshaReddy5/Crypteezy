import React from 'react'
import Lowfees from '../assets/Lowfees.svg'
import security from '../assets/security.svg'
import trans from '../assets/trans.svg'


const Features = () => {
  return (
    <div className='min-[800px]:ml-24 xl:ml-32 min-[1640px]:ml-64 lg:ml-32 sm:ml-0 ml-8 xl:mt-[180px] mt-[80px] min-[840px]:ml-0  '>
        <h1 className=' xl:text-4xl text-[24px] sm:text-center lg:ml-0 sm:ml-12 sm:mr-12 min-[840px]:text-center sm:text-[28px] font-medium lg:text-left text-white'>Buying and Managing Cryptocurrencies made easy</h1>

        <div className='xl:flex  xl:mt-[100px] min-[840px]:grid lg:grid-none min-[840px]:justify-center lg:justify-start
                                                                min-[640px]:grid min-[640px]:mx-auto min-[640px]:justify-center     mt-[40px]'>

<div className='lg:flex lg:gap-10 xl:flex-none'>
            {/* box1 */}
            <div className='min-[1640px]:w-[400px] xl:h-[420px] w-[320px] h-[330px]   bg-[#28164F] rounded-[16px]       border border-white flex flex-col items-center'>
<img src={Lowfees} alt="fees" className="xl:w-[100px] xl:h-[100px] w-[50px] h-[50px]      relative mx-auto      xl:mt-[50px] mt-[25px]"/>
            <h1 className='xl:mt-[50px] mt-[25px]     text-white font-semibold        xl:text-2xl text-[20px] truncate text-center     mr-8 ml-8'>Fast Transactions</h1>
            <h2 className='xl:mt-[25px] mt-[12px]       xl:max-w-[340px] max-w-[200px]         text-[#cccccc]  font-light      xl:text-1xl text-[14px] mx-auto text-center     mr-8 ml-8'>Millions of instant Transactions with a infrastructure to scale-up in a few seconds to match surging demand.</h2>
            <button className="bg-[#6b5bcb] hover:bg-[#A57EFE]    xl:mt-6 mt-4 truncate text-white xl:text-base       text-[14px] font-regular h-10 w-auto     py-2 px-6 rounded ">Learn More</button>
            </div>

               {/* box2 */}
               <div className='min-[1640px]:w-[400px] xl:h-[420px] w-[320px] h-[290px] lg:h-[330px] xl:ml-[80px] lg:mt-0 xl:mt-0 mt-[25px] bg-[#28164F] rounded-[16px] border border-white flex flex-col items-center'>
<img src={trans} alt="fees" className="xl:w-[100px] xl:h-[100px] w-[50px] h-[50px] relative mx-auto xl:mt-[50px] mt-[25px]"/>
            <h1 className='xl:mt-[50px] mt-[25px] text-white font-semibold xl:text-2xl text-[20px] truncate text-center mr-8 ml-8'>Low Fees</h1>
            <h2 className='xl:mt-[25px]  mt-[12px] xl:max-w-[340px] max-w-[200px] text-[#cccccc]  font-light xl:text-1xl text-[14px] mx-auto text-center mr-8 ml-8'>Lowest transaction fees of 0.05% on all cryptocurrencies.</h2>
            <button className="bg-[#6b5bcb] hover:bg-[#A57EFE] xl:mt-6 mt-4 truncate text-white xl:text-base text-[14px] font-regular h-10 w-auto py-2 px-6 rounded ">Learn More</button>
            </div>
           </div>
                 {/* box3*/}
                 <div className='min-[1640px]:w-[400px] xl:h-[420px] w-[320px] h-[290px] xl:ml-[80px] xl:mt-0 mt-[25px] bg-[#28164F] rounded-[16px] border border-white flex flex-col items-center'>
<img src={security} alt="fees" className="xl:w-[100px] xl:h-[100px] w-[50px] h-[50px] relative mx-auto xl:mt-[50px] mt-[25px]"/>
            <h1 className='xl:mt-[50px] mt-[25px] text-white font-semibold xl:text-2xl text-[20px] truncate text-center mr-8 ml-8'>High Security</h1>
            <h2 className='xl:mt-[25px]  mt-[12px] xl:max-w-[340px] max-w-[200px] text-[#cccccc]  font-light xl:text-1xl text-[14px] mx-auto text-center mr-8 ml-8'>Regular security audits to ensure a highly secured trading platform.</h2>
            <button className="bg-[#6b5bcb] hover:bg-[#A57EFE] xl:mt-6 mt-4 truncate text-white xl:text-base text-[14px] font-regular h-10 w-auto py-2 px-6 rounded">Learn More</button>
            </div>


        </div>
    </div>
  )
}

export default Features