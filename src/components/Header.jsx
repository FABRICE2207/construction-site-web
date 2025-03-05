import React, { useState } from 'react'
import { FaXmark, FaBars } from 'react-icons/fa6'
import { Link } from 'react-scroll'

const Header = () => {

  // 
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Clique sur la barre du menue pour ouvrier
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // Pour fermer le menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  // Le menu = les onglets
  const navItems = [
    {
      link: 'Home', path: 'home'
    },
    {
      link: 'About', path: 'about'
    },
    {
      link: 'Services', path: 'services'
    },
    {
      link: 'Projects', path: 'projects'
    },
    {
      link: 'Contact', path: 'contact'
    }
  ]

  return (
    // Le header : la partie blanche
    <nav className='w-full flex bg-white justify-between items-center gap-1 lg:px-16
    px-6 py-4 sticky top-0 z-50'>
      {/* NOM ENTREPRISE */}
      <h1 className='text-black font-bold md:text-4xl text-3xl font-rubik'>Prime
        <span className='text-yellow-500 italic'>Struture</span>
      </h1>

      {/* Menu */}
      <ul className='lg:flex justify-center items-center gap-6 hidden'>
        {
          navItems.map(( {link, path} ) => (
            <Link key={path} className='text-black uppercase font-bold cursor-pointer p-3
              rounded-full hover:bg-yellow-500 hover:text-black text-[15px]' to={path}
               spy={true} offset={-100} smooth={true}>{link}</Link>
          ))
        }
      </ul>

      {/* Button */}
      <button className='bg-yellow-500 px-10 py-3 rounded-full text-black font-semibold
      hover:bg-black hover:text-white transform hover:scale-105 transition-transform duration-300 
      cursor-pointer md:flex hidden'>
        BOOK NOW
      </button>

      {/* debut du menu ici */}
      <div className='flex justify-betwenn items-center lg:hidden mt-3' onClick={toggleMenu}>
        <div>
          {
            // Si le menu est ouvert, affiche Icon FaXmark sinon FarBars
            isMenuOpen ? <FaXmark className='text-yellow-500 text-3xl cursor-pointer'/>
            : <FaBars className='text-yellow-500 text-3xl cursor-pointer'/>
          }
        </div>
      </div>
      
      {/* affiche du menu format telephone */}
      <div className={`${isMenuOpen ? 'flex' : 'hidden'} w-full h-fit bg-yellow-500 
      p-4 absolute top-[80px] left-0`} onClick={closeMenu}>
          <ul className='flex flex-col justify-center items-center gap-2 w-full'>
          {
          navItems.map(( {link, path} ) => (
            <Link key={path} className='text-black uppercase font-semibold cursor-pointer p-2
              rounded-lg hover:bg-black hover:text-white w-full text-center' to={path}
               spy={true} offset={-100} smooth={true}>{link}</Link>
          ))
        }
          </ul>
      </div>
    </nav>
  )
}

export default Header