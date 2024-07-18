import { Menu, MiscellaneousServicesOutlined } from '@mui/icons-material'
import React from 'react'

const Header = () => {
  return (
    <header className="px-3 py-2 shadow-md flex justify-between items-center bg-white dark:bg-black dark:text-white text-black">
          <h1 className="logo font-bold capitalize text-3xl text-green-500">
             Shop
          </h1>

          <ul className="nav hidden lg:flex w-4/12 justify-between items-center">
             <li>Omar</li>
             <li>Omar</li>
             <li>Omar</li>
             <li>Omar</li>
             <li>Omar</li>
          </ul>

          
          <Menu className='text-3xl cursor-pointer block lg:hidden'/>
    </header>
  )
}

export default Header