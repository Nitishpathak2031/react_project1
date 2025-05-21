import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className='flex place-content-between items-center bg-[#282828] font-normal p-2.5'>
        <Link className='text-white text-lg font-medium' to="/">Website</Link>
        <ul className='flex gap-5 text-lg text-white '>
            <li>
                <Link className='hover:underline hover:text-[#FFA119]' to="/about">About</Link>
            </li>
            <li>
               <Link className='hover:underline hover:text-[#FFA119]' to="/contact">Contact</Link>
            </li>
             <li>
                <Link className='hover:underline hover:text-[#FFA119]' to="/services">Services</Link>
            </li>
            
        </ul>
    </nav>
    </>
  )
}

export default Navbar


                // <li>
                // <NavLink to="/contact" className={({isActive}) =>
                // isActive
                // ? 'text-blue-500 font-bold border-b-2 border-blue-500'
                // : 'text-black hover:underline'
                // }>Contact</NavLink>
                // </li>
