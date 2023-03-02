import React, { useState } from 'react'

const Footer = () =>{
  const [aboutUsOpen, setAboutUsOpen] = useState(true);
  const [marketplaceOpen, setMarketplaceOpen] = useState(true);
  const [supportOpen, setSupportOpen] = useState(true);

  return (
    <div className=''>
    <div className='w-[100%] xl:flex  h-[100%] bg-[#140C26] '>
      <div className=' xl:flex '>
      <div className='min-[800px]:ml-24 xl:ml-32 min-[1640px]:ml-64 ml-8 pt-[50px]'>
        <div className="items-center">
          <h1 className='text-white xl:text-[24px] text-[20px] truncate'>Subscribe to our Newsletter:</h1>
          <input type="text" placeholder="Enter Your Email" className="px-3 py-3 mt-[30px] sm:w-[300px] w-[200px]  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring"/>
          <button className='bg-[#6b5bcb] hover:bg-[#A57EFE] ml-8 mt-[20px] truncate text-white text-base font-regular h-10 w-auto py-2 px-6 rounded '>Submit</button>
        </div>
      </div>

     
<div className='xl:flex flex-none   '>
      <div className=''>
        <h1 className='text-white xl:pt-[50px] pt-[100px] min-[800px]:ml-24 xl:ml-64 ml-8 font-normal text-[20px]' onClick={() => setAboutUsOpen(!aboutUsOpen)}>
          About us{aboutUsOpen ? "   -" : "   +"}
        </h1>
        {aboutUsOpen &&
          <ul>
            <li className='min-[800px]:ml-24 xl:ml-64 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>Careers</li>
            <li className='min-[800px]:ml-24 xl:ml-64 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>Community</li>
            <li className='min-[800px]:ml-24 xl:ml-64 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>Legal</li>
            <li className='min-[800px]:ml-24 xl:ml-64 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>Terms</li>
            <li className='min-[800px]:ml-24 xl:ml-64 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>Privacy</li>
            <li className='min-[800px]:ml-24 xl:ml-64 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>News</li>
            <li className='min-[800px]:ml-24 xl:ml-64 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>Cookie preference</li>
          </ul>
        }
      </div>

      <div className=''>
        <h1 className='text-white xl:pt-[50px] pt-[25px] min-[800px]:ml-24 xl:ml-32 ml-8 font-normal text-[20px]' onClick={() => setMarketplaceOpen(!marketplaceOpen)}>
          Marketplace{marketplaceOpen ? " -" : " +"}
        </h1>
        {marketplaceOpen &&
  <ul>
  <li className='min-[800px]:ml-24 xl:ml-32 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>Exchange</li>
  <li className='min-[800px]:ml-24 xl:ml-32 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>Academy</li>
  <li className='min-[800px]:ml-24 xl:ml-32 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>Card</li>
  <li className='min-[800px]:ml-24 xl:ml-32 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>Research</li>
  </ul>
}
</div>

<div className=''>
        <h1 className='text-white xl:pt-[50px] pt-[25px] min-[800px]:ml-24 xl:ml-32 ml-8 ease-in-out duration-500 font-normal text-[20px]' onClick={() => setSupportOpen(!supportOpen)}>
         Support{supportOpen ? " -" : " +"}
        </h1>
        {supportOpen &&
  <ul>

  <li className='min-[800px]:ml-24 xl:ml-32 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>Feedback</li>
  <li className='min-[800px]:ml-24 xl:ml-32 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>Support</li>
  <li className='min-[800px]:ml-24 xl:ml-32 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>Fees</li>
  <li className='min-[800px]:ml-24 xl:ml-32 ml-8 text-[#cccccc] text-[14px] font-extralight list-none mt-[15px]'>Rules</li>
  </ul>
}
</div>


</div>
</div>
</div>

</div>
  )
}

export default Footer