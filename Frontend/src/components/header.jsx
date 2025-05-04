import React from 'react'
import { AudioLines, Moon, User, } from 'lucide-react';
import { Link } from 'react-router-dom';


function header() {
    return (
        <div className='w-full p-5 flex justify-between items-center'>
                <div className='flex gap-3 items-center flex-2  '>
                    <AudioLines className='text-[#3e84f6]' />
                    <h2 className='text-black text-2xl font-bold'>TaskManager</h2>
                </div>

                <form action="" className='flex items-center flex-2 justify-center gap-2 '>
                    <input
                        type="text"
                        placeholder='Enter task here'
                        className='w-full pl-4 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#3e84f6]'
                    />
                    <button
                        type="submit"
                        className='bg-[#3e84f6] text-white px-4 py-2 rounded-md hover:bg-[#2c6fc7] transition-all cursor-pointer'
                    >
                        Search
                    </button>
                </form>

                <div className='flex gap-5 flex-2 items-center justify-center  '>
                    <Moon size={25} />
                    <Link> <User size={25} /> </Link>
                </div>
            </div>

    )
}

export default header