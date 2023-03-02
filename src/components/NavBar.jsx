import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';


const NavBar = () => {
  const [nav, setNav] = useState(true);
  
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='text-white flex xl:block justify-between'>
      <div className=' flex items-center justify-between
                             min-[1640px]:ml-64  min-[1640px]:mr-64
                            xl:mt-16 xl:ml-32 xl:mr-32 
                            lg:mt-16 lg:ml-32 lg:mr-32 
                            min-[900px]:ml-24  min-[900px]:mr-24
                            md:mt-16 md:ml-12 md:mr-12
                            sm:ml-12
                            mt-20 ml-8'>
        <h1 className='2xl:text-3xl xl:text-[28px] lg:text-[28px] min-[840px]:text-[24px] sm:text-[24px] text-3xl font-medium text-[#ffffff]'>Crypteezy</h1>

        <ul className='hidden md:flex  xl:mx-20  xl:gap-20 font-regular
                                      lg:mx-12  lg:gap-12 
                                      md:mx-8  md:gap-8  '>

          <li className='  text-[#ffffff] '>Home</li>
          <li className='  text-[#cccccc] hover:text-[#ffffff]'>Features</li>
          <li className='  text-[#cccccc] hover:text-[#ffffff] truncate'>How it works</li>
          <li className='  text-[#cccccc] hover:text-[#ffffff] truncate'>About us</li>
        </ul>
        <button className="hidden md:flex bg-[#6b5bcb] hover:bg-[#A57EFE] truncate text-white text-base font-regular h-10 w-auto py-2 px-6 rounded-[4px]">
          Connect Wallet
        </button>
      </div>
      <div onClick={handleNav} className='mr-[60px] mt-20 md:hidden'>
        {!nav ? <AiOutlineClose size={30}/> : <AiOutlineMenu size={30} />}
      </div>
      <div className={!nav ? 'fixed top-0 w-[60%] h-full bg-[#140C26] border-r border-r-gray-900 ease-in-out duration-500' : 'fixed left-[100%]' }>
        <h1 className='w-auto xl:ml-0  ml-8 text-3xl mt-20 font-medium text-[#ffffff]'>Crypteezy</h1>
        <ul>
          <li className='px-10 pt-16 text-[#ffffff]'>Home</li>
          <li className='px-10 pt-8 text-[#cccccc] hover:text-[#ffffff]'>Features</li>
          <li className='px-10 pt-8 text-[#cccccc] hover:text-[#ffffff] truncate'>How it works</li>
          <li className='px-10 pt-8 text-[#cccccc] hover:text-[#ffffff] truncate'>About us</li>
        </ul>
        <button className="bg-[#6b5bcb] ml-8 hover:bg-[#A57EFE] mt-16 truncate text-white text-base font-regular h-10 w-auto py-2 px-6 rounded-[4px]">
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default NavBar;
