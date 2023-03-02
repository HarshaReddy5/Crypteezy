import React from 'react'
import Communityimg from "../assets/community.png"
import Discord from "../assets/icons/discord.png"
import Telegram from "../assets/icons/telegram.png"
import Twitter from "../assets/icons/twitter.png"
import Youtube from "../assets/icons/youtube.png"

const Community = () => {
  return (
    <div className='mt-[80px]'>

   

<div className='min-[800px]:ml-24 xl:mt-[370px] mt-[280px] absolute xl:ml-32 min-[1640px]:ml-64 ml-8 flex'>

        <img className="w-[40px] h-[40px]" src={Discord} alt=" " />
        <img className="w-[40px] ml-[50px] h-[40px]" src={Telegram} alt=" " />
        <img className="w-[40px] ml-[50px] h-[40px]" src={Twitter} alt=" " />
        <img className="w-[40px]  ml-[50px] h-[40px]" src={Youtube} alt=" " />
        </div>
        
        <h1 className='min-[800px]:ml-24 absolute xl:mt-[150px] mt-[60px] xl:ml-32 min-[1640px]:ml-64 ml-8 text-white xl:text-4xl text-[24px]'>Join the Community!</h1>
        <h2 className='min-[800px]:ml-24 absolute xl:mt-[210px] mt-[120px] xl:ml-32 min-[1640px]:ml-64 ml-8 font-light text-white xl:text-[20px] text-[16px]'>Want more information and alerts? Join our community channels.</h2>
        <h3 className='min-[800px]:ml-24 absolute xl:mt-[300px] mt-[210px] xl:ml-32 min-[1640px]:ml-64 ml-8 font-medium text-white xl:text-2xl text-[20px]'>Follow us on:</h3>

      

        <img className="xl:w-[1920px] xl:h-[700px] w-[1000px] h-[400px]" src={Communityimg} alt=" " />

        
    </div>
  )
}

export default Community