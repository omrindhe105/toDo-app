import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            <div className='bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] w-full h-screen flex flex-col'>
                <Navbar />

                {/* Hero Section */}
                <div className='flex px-10 items-center w-full justify-center flex-1 flex-col gap-5 text-center'>
                    <h1 className='text-4xl md:text-6xl font-extrabold text-white'>
                        Welcome to <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500'>Task Manager</span>
                    </h1>
                    <p className='text-lg md:text-xl text-gray-200 max-w-2xl'>
                        Organize your tasks, boost your productivity, and stay on top of your goals with our intuitive task management app.
                    </p>
                    <Link to="/dashboard" className='bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-md text-lg font-medium shadow-lg transition-all'>
                        Get Started
                    </Link>
                </div>

                {/* Footer */}
                <footer className='w-full py-4 bg-black text-white text-center'>
                    <p className='text-sm'>© 2025 Task Manager. All rights reserved.</p>
                </footer>
            </div>
        </>
    )
}

export default Home