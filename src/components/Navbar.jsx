import React from 'react'

const Navbar = () => {
  return (
    <div className='main lg:flex md:flex  flex-wrap justify-between items-center px-4 bg-[#000] py-4 shadow-md sticky top-0'> 
        <div className='left flex items-center space-x-3 justify-center'>
            <img className='size-20' src='https://movie-app-88kamal.vercel.app/clipart3105859.png'></img>
            <h1 className='font-bold text-2xl text-white'>Movies By Hassan</h1>
        </div>
        <div className='right'>
            <ul className='flex font-semibold space-x-4 text-white justify-center'>
              <li>Home</li>
              <li>Contact</li>
              <li>About</li>
              <li>Services</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
