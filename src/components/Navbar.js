import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoLogoYoutube } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

export default function Navbar() {
  return (
    <div className='flex justify-between items-center px-14 h-14 bg-[#090909] opacity-95 sticky'>
        <div className='flex gap-8 items-center text-2xl text-white'>
            <div>
                <GiHamburgerMenu />
            </div>
            <div className='flex gap-2 items-center justify-center'>
                <IoLogoYoutube className='text-2xl text-red-600'/>
                <span className='text-xl font-semibold'>YouTube</span>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <form>
                    <div>
                        <div className='flex bg-zinc-900 items-center px-4 pr-2 h-10'>
                            <div className='flex gap-5 items-center pr-5'>
                                <input type='text' placeholder='search' className='w-96 bg-zinc-900 border-none focus:outline-none'></input>
                            </div>
                            <button>
                                    <IoSearch className='flex justify-center'/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
