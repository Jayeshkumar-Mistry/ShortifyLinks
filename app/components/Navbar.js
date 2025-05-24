import React from 'react'
import Link from 'next/link'
const Navbar = () => (
    <div className='bg-[#008080] flex justify-between px-10 h-14 items-center text-white'>
        <div className='font-bold text-xl'>
            <Link href="/">ShortifyLinks</Link>

        </div>
        <div className='flex gap-3 items-center'>

            <ul className='flex justify-center items-center gap-3'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/shorten"><li>Shorten</li></Link>
                <Link href="/contact"><li>Contact Us</li></Link>
            </ul>
            <div className='flex justify-center items-center gap-2'>
                <Link href="/shorten"><button className='bg-[#1da099]   px-2 py-1 rounded-lg'>Try Now</button></Link>
                <Link href='github'> <button className='bg-[#1da099]   px-2 py-1 rounded-lg'>GitHub</button></Link>
            </div>
        </div>
    </div>
)

export default Navbar
