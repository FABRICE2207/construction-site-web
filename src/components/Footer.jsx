import React from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { FaCopyright } from 'react-icons/fa6'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div className='bg-black text-white flex justify-center items-center gap-2 p-5'>
      <FaCopyright className='fill-yellow-500 lg:size-5 size-8'/>
      <p className='text-lg text-center'>Copyrigt 2024, PRIME CONSTRUCTION, All Rights Reserved</p>

      {/* scroll buton haut */}
      <div id="icon-box" className='bg-yellow-500 text-black p-3 rounded-full 
      hover:bg-black hover:text-white cursor-pointer fixed lg:bottom-6 right-6 bottom-6'>
        <Link to='hero' spy={true} offset={-100} smooth={true}>
          <FaArrowUp className='size-6' />
        </Link>
      </div>
    </div>
  )
}

export default Footer