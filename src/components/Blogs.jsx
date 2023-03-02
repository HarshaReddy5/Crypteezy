import React from 'react'
import Bloga from "../assets/bloga.png"
import Blogb from "../assets/Rectangle 85.png"
import Blogc from "../assets/Rectangle 86.png"



const Blogs = () => {
  return (
    <div className='min-[800px]:ml-24 xl:ml-32 min-[1640px]:ml-64 ml-8 xl:mt-[250px] sm:text-[28px] font-medium mt-[180px] sm:ml-0 sm:text-center sm:justify-center sm:grid
    min-[840px]:ml-0  min-[840px]:text-center  min-[840px]:justify-center  min-[840px]:grid 
    lg:ml-24 lg:text-left lg:justify-start lg:grid-none '>
    <h1 className='text-white xl:text-4xl text-[24px]'>Blogs and News</h1>
    <h2 className='text-white xl:text-[20px] text-[16px] font-extralight mt-[30px]'>Get to know current events and news around the Crypto world</h2>

     <div className='xl:flex flex:none sm:ml-0 sm:text-center sm:justify-center sm:grid
                                         lg:justify-start lg:grid-none'>

    <div className='xl:w-[400px] w-[330px] bg-[#1A0C38] rounded-[16px] flex flex-col xl:mt-[100px] mt-[60px]'>
    <img src={Bloga} alt=" " className="xl:w-[360px] w-[290px] xl:h-[200px] ml-[20px]  mt-[20px]"/>
    <h1 className='mt-[20px] w-[270px] text-white font-medium xl:w-[360px] xl:text-[20px] text-[18px] ml-[20px] text-left'>Crypto price analysis for Cardano(ADA) and Solana(SOL)</h1>
    <h2 className='ml-[20px] mb-[20px] xl:w-[360px] w-[270px] mt-[10px] mx-auto text-[#cccccc] text-left font-light xl:text-[12px] text-[12px]'>After a great rebounding stint, the crypto market showed signs of slowing down, 
            and we would understand what the price analysis for Cardano (ADA) Solana (SOL) looked like on February 12 2023..<strong>Read More</strong></h2>
    </div>



<div className='xl:w-[400px] w-[330px] xl:ml-[48px] bg-[#1A0C38] rounded-[16px] flex flex-col xl:mt-[100px]  mt-[60px]'>
<img src={Blogb} alt=" " className="xl:w-[360px] w-[290px] xl:h-[200px] ml-[20px]  mt-[20px]"/>
<h1 className='mt-[20px] xl:w-[360px] w-[270px] text-white font-medium xl:text-[20px] text-[18px] ml-[20px] text-left'>This Week in Coins: Bitcoin, Ethereum and other coins</h1>
<h2 className='ml-[20px] mb-[20px] xl:w-[360px] w-[270px] mt-[10px] mx-auto text-left text-[#cccccc] font-light xl:text-[12px] text-[12px]'>Those hoping for a 2023 Bitcoin bull run will have to keep waiting. 
Most of the leading cryptocurrencies posted pronounced losses in value over the past week...<strong>Read More</strong></h2>
</div>

<div className='xl:w-[400px] w-[330px] xl:ml-[48px] bg-[#1A0C38] rounded-[16px] flex flex-col xl:mt-[100px]  mt-[60px]'>
<img src={Blogc} alt=" " className="xl:w-[360px] w-[290px] xl:h-[200px] ml-[20px]  mt-[20px]"/>
<h1 className='mt-[20px] xl:w-[360px] w-[270px] text-white font-medium xl:text-[20px] text-[18px] ml-[20px] text-left'>Top news today BabyDoge Coin's impressive spike</h1>
<h2 className='ml-[20px] mb-[20px] xl:w-[360px] w-[270px] mt-[10px] mx-auto text-left text-[#cccccc] font-light xl:text-[12px] text-[12px]'>The cryptocurrency market saw a downturn at the start of the week, with Bitcoin trading at $22,905
a decrease of 0.5 percent from the previous day according to TradingView... <strong>Read More</strong></h2>
</div>

</div>

</div>
  )
}

export default Blogs