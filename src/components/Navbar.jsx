import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold  ' > 
        <div className= ' flex items-center gap-2 '>
            <img onClick={()=>navigate(-1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer '  src={assets.arrow_left} alt="" />
            <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer '  src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4 ' >
            <button  className='bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden  md:block cursor-pointer ' >Explore Premium</button>
            <button  className='bg-black text-white text-[15px] px-3 py-1 rounded-2xl  cursor-pointer ' >Install App</button>
            <p className='bg-purple-400 rounded-full h-7 w-7  flex items-center justify-center cursor-pointer ' >A</p>
        </div>
    </div>
    <div className='flex items-center gap-2 mt-4 ' >
        <button className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer' >All</button>
        <button className='bg-black px-4 py-1 rounded-2xl cursor-pointer' >Music</button>
        <button className='bg-black px-4 py-1 rounded-2xl cursor-pointer' >Podcast</button>
    </div>
    </>
  )
}

export default Navbar