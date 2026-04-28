import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({ dark, setDark }) => {
    const [isScroll, setIsScroll] = useState(false)
    const sideMenuRef = useRef()

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'
    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

    return (
        <>
            <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
                <Image src={assets.header_bg_color} alt='' className='w-full' />
            </div>
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${isScroll ? "bg-white/40 bg-opacity-50 backdrop-blur-lg shadow-xs dark:bg-darkTheme dark:shadow-white/20" : ""}`}>
                <a href="#top">
                    <Image src={dark ? assets.logo_dark : assets.logo} className='w-55 h-12 cursor-pointer mr-14' alt='' />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : "bg-white/60 shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
                    <li><a href="#top" className='font-Ovo'>Home</a></li>
                    <li><a href="#about" className='font-Ovo'>About me</a></li>
                    <li><a href="#education" className='font-Ovo'>Education</a></li>
                    <li><a href="#work" className='font-Ovo'>My Work</a></li>
                    <li><a href="#contact" className='font-Ovo'>Contact me</a></li>
                </ul>

                <div className='flex items-center gap-4'>
                    <button onClick={() => setDark(prev => !prev)}>
                        <Image src={dark ? assets.sun_icon : assets.moon_icon} alt='' className='w-6 cursor-pointer' />
                    </button>

                    <a href="#contact" className='hidden lg:flex items-center font-Ovo gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 cursor-pointer dark:border-white/50'>Contact <Image src={dark ? assets.arrow_icon_dark : assets.arrow_icon} alt='' className='w-3' /></a>

                    <button className='block md:hidden ml-3 cursor-pointer' onClick={openMenu}>
                        <Image src={dark ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
                    </button>
                </div>


                {/* -------- mobile menu --------- */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <Image src={dark ? assets.close_white : assets.close_black} alt='' className='w-5' />
                    </div>

                    <li><a href="#top" onClick={closeMenu} className='font-Ovo'>Home</a></li>
                    <li><a href="#about" onClick={closeMenu} className='font-Ovo'>About me</a></li>
                    <li><a href="#education" onClick={closeMenu} className='font-Ovo'>Education</a></li>
                    <li><a href="#work" onClick={closeMenu} className='font-Ovo'>My Work</a></li>
                    <li><a href="#contact" onClick={closeMenu} className='font-Ovo'>Contact me</a></li>
                </ul>

            </nav>
        </>
    )
}

export default Navbar