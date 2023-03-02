import React from 'react'



const Marketplace = () => {
  return (
    <div className='min-[800px]:ml-24 xl:ml-32 min-[1640px]:ml-64 xl:mt-[250px]
                       ml-8     mt-[180px]
                       sm:ml-0 sm:text-center sm:grid sm:justify-center
                       min-[840px]:ml-0 
                       lg:ml-24 lg:text-left lg:grid-none lg:justify-start '>

<h1 className='text-white xl:text-4xl
                              text-[24px] sm:text-[28px] font-medium '>Our Marketplace</h1>

<h2 className='text-white  xl:text-[20px] text-[16px] font-extralight mt-[30px]'>with almost support for 175+ cryptocurrencies for you to buy, sell and track.</h2>

<div className='sm:ml-0 sm:text-center sm:grid sm:justify-center lg:text-left lg:grid-none lg:justify-start'>
<div className='mt-[100px]  flex'>
<h1 className='text-[#cccccc] font-extralight xl:w-[50px] w-[20px]'>#</h1>
<h2 className=' text-[#cccccc] font-extralight xl:w-[250px] w-[125px]'>Name</h2>
<h3 className=' text-[#cccccc] min-[840px]:ml-8 font-extralight xl:w-[250px] w-[125px]'>Price </h3> 
<h4 className=' text-[#cccccc] font-extralight xl:w-[250px] hidden xl:block'>Price Change</h4> 
<h5 className='text-[#cccccc] min-[840px]:ml-20 font-extralight lg:ml-12 xl:w-[250px] sm:ml-8 '>Trade</h5>  
</div>

<div className='mt-[50px] w-[auto] items-center flex '>
<h1 className='text-[#ffffff] xl:w-[50px] w-[20px]'>1.</h1>
<h2 className='text-[#ffffff] xl:w-[250px] w-[125px]'>Bitcoin</h2>
<h3 className=' text-[#ffffff] min-[840px]:ml-8 xl:w-[250px] w-[125px]'>₹31,61,000</h3>
<h4 className=' text-[#DB2F2F] xl:w-[250px] hidden xl:block'>-2.1%</h4> 
<button className="bg-[#6b5bcb] hover:bg-[#A57EFE] truncate text-white xl:text-base min-[840px]:ml-20   lg:ml-12 sm:ml-8   text-[14px] font-regular h-10 w-auto     py-2 px-6 rounded ">Buy</button> 
</div>

<div className='mt-[50px] items-center flex'>
<h1 className='text-[#ffffff] xl:w-[50px] w-[20px]'>2.</h1>
<h2 className='text-[#ffffff] xl:w-[250px] w-[125px]'>Ethereum</h2>
<h3 className=' text-[#ffffff] min-[840px]:ml-8 xl:w-[250px] w-[125px]'>₹2,33,187</h3>
<h4 className=' text-[#DB2F2F] xl:w-[250px] hidden xl:block'>-1.69%</h4> 
<button className="bg-[#6b5bcb] hover:bg-[#A57EFE] truncate text-white xl:text-base   min-[840px]:ml-20  lg:ml-12 sm:ml-8   text-[14px] font-regular h-10 w-auto     py-2 px-6 rounded ">Buy</button> 
</div>

<div className='mt-[50px] items-center flex'>
<h1 className='text-[#ffffff] xl:w-[50px] w-[20px]'>3.</h1>
<h2 className='text-[#ffffff] xl:w-[250px] w-[125px]'>Shiba Inu</h2>
<h3 className=' text-[#ffffff] min-[840px]:ml-8 xl:w-[250px] w-[125px]'>₹0.00183</h3>
<h4 className=' text-[#DB2F2F] xl:w-[250px] hidden xl:block'>-2.66%</h4> 
<button className="bg-[#6b5bcb] hover:bg-[#A57EFE]    truncate text-white xl:text-base   min-[840px]:ml-20  lg:ml-12  sm:ml-8   text-[14px] font-regular h-10 w-auto     py-2 px-6 rounded ">Buy</button>  
</div>


<div className='mt-[50px] items-center flex'>
<h1 className='text-[#ffffff] xl:w-[50px] w-[20px]'>4.</h1>
<h2 className='text-[#ffffff] xl:w-[250px] w-[125px]'>Ripple</h2>
<h3 className=' text-[#ffffff] min-[840px]:ml-8 xl:w-[250px] w-[125px]'>₹51.02</h3>
<h4 className=' text-[#48AA63]  xl:w-[250px] hidden xl:block'>+1.1%</h4> 
<button className="bg-[#6b5bcb] hover:bg-[#A57EFE] truncate text-white xl:text-base  min-[840px]:ml-20 lg:ml-12 sm:ml-8    text-[14px] font-regular h-10 w-auto     py-2 px-6 rounded ">Buy</button>  
</div>
</div>




    </div>
  )
}

export default Marketplace