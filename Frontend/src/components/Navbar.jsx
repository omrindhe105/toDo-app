import React from 'react'
import { Link } from 'react-router-dom'
import { CircleUserRound } from 'lucide-react';

function Navbar() {
    return (
        <nav className='w-full  text-whitepy-4 px-20   py-3  flex items-center justify-between shadow-md'>
            {/* Logo or App Name */}
            <div className='text-xl font-bold'>
                <Link to="/" className='hover:text-gray-400 transition-all'>
                    Task Manager
                </Link>
            </div>

            {/* Navigation Links */}
            <div className='hidden md:flex gap-6'>
                <Link to="/features" className='hover:text-gray-400 transition-all'>
                    Features
                </Link>
                <Link to="/pricing" className='hover:text-gray-400 transition-all'>
                    Pricing
                </Link>
                <Link to="/about" className='hover:text-gray-400 transition-all'>
                    About
                </Link>
            </div>

            {/* User Profile */}
            <div className='relative'>
                <button className='flex items-center gap-2 hover:text-gray-400 transition-all'>
                <CircleUserRound />
                    
                </button>
                {/* Dropdown Menu */}
                <div className='absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg hidden group-hover:block'>
                    <Link to="/profile" className='block px-4 py-2 hover:bg-gray-100'>
                        Profile
                    </Link>
                    <button className='block w-full text-left px-4 py-2 hover:bg-gray-100'>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar